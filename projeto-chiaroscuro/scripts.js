/* ============================================================
   SCRIPT.JS - LÓGICA DO PROJETO CHIAROSCURO
   Autores: Ruben Lemos & Miguel Novo
   Descrição: Gestão de eventos de scroll, validação de formulários
   e manipulação do DOM.
   ============================================================ */

document.addEventListener('DOMContentLoaded', function() {
    console.log("Sistema Chiaroscuro iniciado. Monitorização ativa.");

    // 1. ATUALIZAÇÃO AUTOMÁTICA DO ANO (RODAPÉ)
    // Procura o elemento com o ID 'ano-atual' e insere o ano do sistema
    const anoElement = document.getElementById('ano-atual');
    if (anoElement) {
        anoElement.textContent = new Date().getFullYear();
    }

    // 2. NAVBAR REATIVA AO SCROLL (EFEITO CHIAROSCURO)
    // Quando o utilizador faz scroll, a navbar fica mais escura
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            // Se desceu mais de 50px, adiciona a classe de fundo sólido
            navbar.classList.add('navbar-scrolled');
        } else {
            // Se voltou ao topo, remove a classe (fica transparente/vidro)
            navbar.classList.remove('navbar-scrolled');
        }
    });

    // 3. SIMULAÇÃO DE SUBMISSÃO DE FORMULÁRIO (Página Contactos)
    const form = document.querySelector('form');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault(); // Impede a página de recarregar (o comportamento padrão)

            const btnSubmit = form.querySelector('button[type="submit"]');
            const originalText = btnSubmit.innerHTML;

            // Muda o botão para estado de "A carregar..."
            btnSubmit.innerHTML = '<i class="fas fa-spinner fa-spin"></i> A PROCESSAR...';
            btnSubmit.disabled = true;

            // Simula um atraso de rede de 2 segundos (como se fosse ao servidor Azure)
            setTimeout(function() {
                // Mostra alerta de sucesso
                alert("PEDIDO REGISTADO COM SUCESSO!\n\nOs dados foram encriptados e enviados para o servidor do ISLA Gaia.\nEntraremos em contacto brevemente.");
                
                // Reseta o formulário e o botão
                form.reset();
                btnSubmit.innerHTML = originalText;
                btnSubmit.disabled = false;
            }, 2000);
        });
    }
});