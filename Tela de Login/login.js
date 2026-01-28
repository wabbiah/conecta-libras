document.addEventListener("DOMContentLoaded", () => {

  // Helper: popup simples
  function popup(mensagem, sucesso = false) {
    const div = document.createElement("div");
    div.textContent = mensagem;
    div.style.position = "fixed";
    div.style.top = "20px";
    div.style.right = "20px";
    div.style.padding = "12px 16px";
    div.style.borderRadius = "8px";
    div.style.color = "#fff";
    div.style.backgroundColor = sucesso ? "#28a745" : "#dc3545";
    div.style.boxShadow = "0 2px 10px rgba(0,0,0,0.2)";
    div.style.zIndex = "9999";
    document.body.appendChild(div);
    setTimeout(() => div.remove(), 3000);
  }

  const storageKey = 'conectaLibrasUser';

  function salvarUsuario(usuario) {
    try {
      localStorage.setItem(storageKey, JSON.stringify(usuario));
    } catch (err) {
      // Sem suporte a localStorage
    }
  }

  // Seletores
  const btnEntrar = document.getElementById("btnEntrar");
  const btnCadastrar = document.getElementById("btnCadastrar");

  // Cadastro
  if (btnCadastrar) {
    btnCadastrar.addEventListener("click", (e) => {
      e.preventDefault();

      const nome_completo = document.querySelector(".completo input").value.trim();
      const nome_usuario = document.querySelector(".usuario input").value.trim();
      const email = document.querySelector(".email input").value.trim();
      const senha = document.querySelector(".senha input").value.trim();

      if (!nome_completo || !nome_usuario || !email || !senha) {
        popup("Preencha todos os campos!");
        return;
      }

      salvarUsuario({
        nome: nome_usuario || nome_completo,
        email: email
      });

      popup("Cadastro realizado com sucesso!", true);
      setTimeout(() => {
        window.location.href = "../index.html";
      }, 1200);
    });
  }

  // Login
  if (btnEntrar) {
    btnEntrar.addEventListener("click", (e) => {
      e.preventDefault();

      const email = document.querySelector(".login input[type='email']").value.trim();
      const senha = document.querySelector(".login input[type='password']").value.trim();

      if (!email || !senha) {
        popup("Preencha todos os campos!");
        return;
      }

      const nome = email.includes('@') ? email.split('@')[0] : email;
      salvarUsuario({ nome, email });

      popup("Login realizado com sucesso!", true);
      setTimeout(() => {
        window.location.href = "../index.html";
      }, 900);
    });
  }

});
