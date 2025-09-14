// Highlight active page in navbar
const links = document.querySelectorAll('.nav-links a');
links.forEach(link => {
  if (link.href === window.location.href) {
    link.classList.add('active');
  }
});

// Mobile menu toggle
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
}
// (existing code you have is preserved)
// ... your nav highlight & mobile menu toggle code above ...

// Reveal-on-scroll (lightweight)
document.addEventListener('DOMContentLoaded', () => {
  const revealEls = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window) {
    const obs = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // only reveal once
        }
      });
    }, { threshold: 0.12 });

    revealEls.forEach(el => obs.observe(el));
  } else {
    // fallback: just make things visible
    revealEls.forEach(el => el.classList.add('visible'));
  }
});
// Chatbot demo open/close + simple mock reply
const openChatBtn = document.getElementById('open-chat');
const chatModal = document.getElementById('chat-modal');
const closeChatBtn = document.getElementById('close-chat');
const chatForm = document.getElementById('chat-form');
const chatWindow = document.getElementById('chat-window');
const chatInput = document.getElementById('chat-input');

if (openChatBtn && chatModal) {
  openChatBtn.addEventListener('click', () => {
    chatModal.classList.add('show');
    chatModal.setAttribute('aria-hidden', 'false');
    chatInput && chatInput.focus();
  });
  closeChatBtn && closeChatBtn.addEventListener('click', () => {
    chatModal.classList.remove('show');
    chatModal.setAttribute('aria-hidden', 'true');
  });

  chatForm && chatForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const text = chatInput.value.trim();
    if (!text) return;
    // append user message
    const userMsg = document.createElement('div');
    userMsg.className = 'user-msg';
    userMsg.textContent = text;
    chatWindow.appendChild(userMsg);
    chatWindow.scrollTop = chatWindow.scrollHeight;
    chatInput.value = '';

    // fake bot reply after small delay
    setTimeout(() => {
      const bot = document.createElement('div');
      bot.className = 'bot-msg';
      bot.textContent = 'Nice question! (This is a demo response.)';
      chatWindow.appendChild(bot);
      chatWindow.scrollTop = chatWindow.scrollHeight;
    }, 700);
  });
}
// Doubt Exchange - Add new doubts + upvote
const doubtForm = document.getElementById('doubt-form');
const doubtInput = document.getElementById('doubt-input');
const doubtList = document.getElementById('doubt-list');

if (doubtForm && doubtInput && doubtList) {
  doubtForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const text = doubtInput.value.trim();
    if (!text) return;

    // Create new doubt card
    const card = document.createElement('div');
    card.className = 'doubt-card';
    card.innerHTML = `
      <p class="question"><strong>Q:</strong> ${text}</p>
      <p class="answer"><strong>A:</strong> (Waiting for peers to answer...)</p>
      <button class="upvote"><i class="fas fa-thumbs-up"></i> <span>0</span></button>
    `;

    // Append to list
    doubtList.prepend(card);
    doubtInput.value = '';

    // Add upvote functionality
    const upvoteBtn = card.querySelector('.upvote');
    const span = upvoteBtn.querySelector('span');
    upvoteBtn.addEventListener('click', () => {
      span.textContent = parseInt(span.textContent) + 1;
    });
  });

  // Enable upvoting on existing doubts
  document.querySelectorAll('.upvote').forEach(btn => {
    btn.addEventListener('click', () => {
      const span = btn.querySelector('span');
      span.textContent = parseInt(span.textContent) + 1;
    });
  });
}
// Dashboard Charts (Chart.js demo)
const progressCtx = document.getElementById('progressChart');
if (progressCtx) {
  new Chart(progressCtx, {
    type: 'line',
    data: {
      labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
      datasets: [{
        label: 'Average Score (%)',
        data: [65, 72, 80, 88],
        borderColor: '#004aad',
        backgroundColor: 'rgba(0,74,173,0.1)',
        fill: true,
        tension: 0.3
      }]
    },
    options: {
      responsive: true,
      plugins: { legend: { position: 'bottom' } }
    }
  });
}

const engagementCtx = document.getElementById('engagementChart');
if (engagementCtx) {
  new Chart(engagementCtx, {
    type: 'bar',
    data: {
      labels: ['Math', 'Science', 'History', 'English'],
      datasets: [{
        label: 'Hours Spent',
        data: [12, 9, 6, 8],
        backgroundColor: ['#004aad','#0099ff','#66ccff','#99e6ff']
      }]
    },
    options: {
      responsive: true,
      plugins: { legend: { display: false } }
    }
  });
}
// Chatbot (frontend demo)
const chatFormPage = document.getElementById('chat-form');
const chatInputPage = document.getElementById('chat-input');
const chatWindowPage = document.getElementById('chat-window');

if (chatFormPage && chatInputPage && chatWindowPage) {
  chatFormPage.addEventListener('submit', (e) => {
    e.preventDefault();
    const text = chatInputPage.value.trim();
    if (!text) return;

    // Show user message
    const userMsg = document.createElement('div');
    userMsg.className = 'user-msg';
    userMsg.textContent = text;
    chatWindowPage.appendChild(userMsg);
    chatWindowPage.scrollTop = chatWindowPage.scrollHeight;
    chatInputPage.value = '';

    // Fake bot reply
    setTimeout(() => {
      const bot = document.createElement('div');
      bot.className = 'bot-msg';
      bot.textContent = "🤖 Thanks for your question! (Demo reply only)";
      chatWindowPage.appendChild(bot);
      chatWindowPage.scrollTop = chatWindowPage.scrollHeight;
    }, 600);
  });
}
