document.addEventListener("DOMContentLoaded", function () {
  const logoutPopup = document.getElementById('logout-popup');
  const loginArea = document.getElementById('botao-login');
  const storageKey = 'conectaLibrasUser';

  function getBasePrefix() {
    const isGhPages = window.location.hostname.endsWith('github.io');
    const parts = window.location.pathname.split('/').filter(Boolean);
    const pathParts = isGhPages ? parts.slice(1) : parts;
    const depth = Math.max(0, pathParts.length - 1);
    return '../'.repeat(depth);
  }

  function getStoredUser() {
    try {
      const raw = localStorage.getItem(storageKey);
      return raw ? JSON.parse(raw) : null;
    } catch (err) {
      return null;
    }
  }

  function setLoginAreaLoggedOut() {
    if (!loginArea) return;
    const basePrefix = getBasePrefix();
    loginArea.innerHTML = `<a href="${basePrefix}Tela de Login/login.html" class="user-section">Faça Login</a>`;
  }

  function setLoginAreaLoggedIn(usuario) {
    if (!loginArea) return;
    const displayName = (usuario && usuario.nome) ? usuario.nome : (usuario && usuario.email ? usuario.email : 'Usuário');
    const initial = displayName.charAt(0).toUpperCase();

    loginArea.innerHTML = `
      <span class="user-name" id="user-name">Logado como <strong>${displayName}</strong></span>
      <div class="user-avatar" id="user-avatar">${initial}</div>
    `;

    const userName = document.getElementById('user-name');
    const userAvatar = document.getElementById('user-avatar');

    if (userName) {
      userName.addEventListener('click', () => {
        if (logoutPopup) logoutPopup.style.display = 'flex';
      });
    }

    if (userAvatar) {
      userAvatar.addEventListener('click', () => {
        if (logoutPopup) logoutPopup.style.display = 'flex';
      });
    }
  }

  // Verifica "sessão" local e atualiza área de login no menu
  function verificarLogin() {
    const usuario = getStoredUser();

    if (!loginArea) return;

    if (usuario) {
      setLoginAreaLoggedIn(usuario);
    } else {
      setLoginAreaLoggedOut();
    }
  }

  // Botão Cancelar no popup
  const cancelBtn = document.getElementById('cancel-btn');
  if (cancelBtn) {
    cancelBtn.addEventListener('click', () => {
      if (logoutPopup) logoutPopup.style.display = 'none';
    });
  }

  // Botão Sair no popup
  const logoutBtn = document.getElementById('logout-btn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      localStorage.removeItem(storageKey);

      if (logoutPopup) {
        const popupContent = logoutPopup.querySelector('.popup-content');
        popupContent.innerHTML = `
          <h3>Você foi deslogado com sucesso!</h3>
          <button id="close-popup-btn">Fechar</button>
        `;

        const closeBtn = document.getElementById('close-popup-btn');
        if (closeBtn) {
          closeBtn.addEventListener('click', () => {
            logoutPopup.style.display = 'none';
            location.reload();
          });
        }
      }
    });
  }

  // Executa verificação de login
  verificarLogin();
});
