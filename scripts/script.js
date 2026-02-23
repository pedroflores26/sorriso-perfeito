// Animação suave ao rolar
const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = "translateY(0)";
    }
  });
});

sections.forEach(section => {
  section.style.opacity = 0;
  section.style.transform = "translateY(30px)";
  section.style.transition = "all 0.6s ease";
  observer.observe(section);
});

// Validação do formulário
document.getElementById("formContato").addEventListener("submit", function(e) {
  e.preventDefault();

  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const mensagem = document.getElementById("mensagem").value.trim();

  if (!nome || !email || !mensagem) {
    alert("Por favor, preencha todos os campos.");
    return;
  }

  alert("Mensagem enviada com sucesso!");
  this.reset();
});// ===============================
// 🌙 MODO ESCURO
// ===============================

const toggleBtn = document.getElementById("toggleDark");

// Verifica se já estava ativado antes
if (localStorage.getItem("darkMode") === "enabled") {
  document.body.classList.add("dark");
  toggleBtn.textContent = "☀";
}

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    toggleBtn.textContent = "☀";
    localStorage.setItem("darkMode", "enabled");
  } else {
    toggleBtn.textContent = "🌙";
    localStorage.setItem("darkMode", "disabled");
  }
});