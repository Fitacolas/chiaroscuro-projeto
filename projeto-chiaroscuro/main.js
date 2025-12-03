/* ============================================================
   CHIAROSCURO DIGITAL
   AUTORES: Ruben Lemos & Miguel Novo
   DESCRIÇÃO: Script principal para interatividade e manipulação do DOM.
   ============================================================ */

document.addEventListener("DOMContentLoaded", function () {
  
  // ------------------------------------------------------------
  // 1. LÓGICA DO FORMULÁRIO (BASEADO NO TEU CÓDIGO)
  // ------------------------------------------------------------
  const form = document.querySelector("form");
  
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault(); // Impede o reload da página

      // Captura dos elementos
      const nome = document.getElementById("nome");
      const instituicao = document.getElementById("instituicao");
      const email = document.getElementById("email");
      const motivo = document.getElementById("motivo");
      const termos = document.getElementById("termos");

      // Validação mínima
      if (
        !nome.value.trim() ||
        !instituicao.value.trim() ||
        !email.value.trim() ||
        !motivo.value ||
        !termos.checked
      ) {
        alert("Por favor, preencha todos os campos obrigatórios antes de enviar.");
        return;
      }

      // Mensagem específica por tipo de dados
      let tipoTexto = "";
      let detalhe = "";

      if (motivo.value === "investigacao") {
        tipoTexto = "Dataset Bruto (CSV/XLS)";
        detalhe = "Irás receber um link seguro para o ficheiro de dados completo.";
      } else if (motivo.value === "auditoria") {
        tipoTexto = "Relatório Completo (PDF)";
        detalhe = "Irás receber o relatório metodológico em formato PDF.";
      } else if (motivo.value === "pessoal") {
        tipoTexto = "Algoritmo de Teste (JS)";
        detalhe = "Irás receber o código-fonte usado nas medições de atenção.";
      }

      // Alerta final
      alert(
        "Pedido enviado com sucesso!\n\n" +
        "Tipo de dados solicitado: " + tipoTexto + ".\n" +
        detalhe + "\n\n" +
        "Obrigado por acreditar no nosso projeto."
      );

      form.reset();
    });
  }

  // ------------------------------------------------------------
  // 2. DATA DINÂMICA (RODAPÉ)
  // ------------------------------------------------------------
  const ano = document.getElementById("ano-atual");
  if(ano) {
      ano.textContent = new Date().getFullYear();
  }

  // ------------------------------------------------------------
  // 3. NAVBAR REATIVA (SCROLL)
  // ------------------------------------------------------------
  const navbar = document.querySelector('.navbar');
  if(navbar) {
      window.addEventListener('scroll', () => {
          if (window.scrollY > 50) {
              navbar.classList.add('navbar-scrolled');
          } else {
              navbar.classList.remove('navbar-scrolled');
          }
      });
  }
});