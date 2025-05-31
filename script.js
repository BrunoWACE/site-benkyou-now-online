document.addEventListener("DOMContentLoaded", () => {
  // Criar ícones Lucide
  lucide.createIcons();

  // Botão de redirecionamento
  const btn = document.querySelector("button.buy");
  if (btn) {
      btn.addEventListener("click", () => {
          window.location.href = "produto.html";
      });
  }

  // Cálculo de desconto
  const precoAntigoEl = document.getElementById("preco-antigo");
  const precoAtualEl = document.getElementById("preco-atual");

  if (precoAntigoEl && precoAtualEl) {
    const precoAntigo = parseFloat(precoAntigoEl.textContent.replace("R$", "").replace(",", "."));
    const precoAtual = parseFloat(precoAtualEl.textContent.replace("R$", "").replace(",", "."));

    if (!isNaN(precoAntigo) && !isNaN(precoAtual) && precoAntigo > precoAtual) {
      const desconto = ((precoAntigo - precoAtual) / precoAntigo) * 100;
      const descontoFormatado = Math.round(desconto);

      const badge = document.querySelector(".discount-badge");
      if (badge) {
        badge.textContent = `ECONOMIZE ${descontoFormatado}%`;
      }
    }
  }
});

const btn = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');

btn.addEventListener('click', () => {
  nav.classList.toggle('mobile-open');
  btn.textContent = nav.classList.contains('mobile-open') ? '✕' : '☰';
});