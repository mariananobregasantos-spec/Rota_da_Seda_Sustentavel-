/**
 * Rota da Seda Sustentável - Script Oficial
 * Desenvolvido com foco em acessibilidade, usabilidade e performance.
 */

document.addEventListener("DOMContentLoaded", () => {
    
    // ==========================================================================
    // 1. CONTROLE DO MENU HAMBÚRGUER (UX / ACESSIBILIDADE)
    // ==========================================================================
    const btnHamburger = document.getElementById("btn-hamburger");
    const navMenu = document.getElementById("nav-menu");
    const navLinks = document.querySelectorAll(".nav-link");

    /**
     * Alterna o estado de abertura do menu lateral no mobile
     */
    const toggleMenu = () => {
        const isMenuOpen = btnHamburger.classList.contains("active");
        
        // Alterna as classes CSS para animação
        btnHamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
        
        // Regra de Acessibilidade: Atualiza leitores de tela se o menu está expandido
        btnHamburger.setAttribute("aria-expanded", !isMenuOpen);
        
        // Bloqueia a rolagem do fundo quando o menu estiver aberto no celular
        document.body.style.overflow = isMenuOpen ? "auto" : "hidden";
    };

    // Ouvinte de clique para o botão hambúrguer
    if (btnHamburger && navMenu) {
        btnHamburger.addEventListener("click", toggleMenu);
    }

    // Fecha o menu automaticamente e restaura a rolagem ao clicar em um link
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            if (navMenu.classList.contains("active")) {
                toggleMenu();
            }
        });
    });

    // ==========================================================================
    // 2. NAVEGAÇÃO SUAVE (SMOOTH SCROLL)
    // ==========================================================================
    const btnConhecer = document.getElementById("btn-conhecer");
    const secaoSobre = document.getElementById("sobre");

    if (btnConhecer && secaoSobre) {
        btnConhecer.addEventListener("click", () => {
            secaoSobre.scrollIntoView({ 
                behavior: "smooth", 
                block: "start" 
            });
        });
    }

    // ==========================================================================
    // 3. INTERATIVIDADE DOS CARDS (CONTEÚDO DINÂMICO)
    // ==========================================================================
    const cards = document.querySelectorAll(".card");
    const painelDetalhes = document.getElementById("painel-detalhes");
    const textoDetalhe = document.getElementById("texto-detalhe");

    cards.forEach(card => {
        card.addEventListener("click", () => {
            const infoDoCard = card.getAttribute("data-info");

            if (painelDetalhes && textoDetalhe && infoDoCard) {
                // Remove animações anteriores para resetar o efeito visual
                painelDetalhes.classList.remove("detalhes-ativo");
                
                // Força o navegador a recalcular o layout (permite reiniciar a animação CSS)
                void painelDetalhes.offsetWidth; 
                
                // Atualiza o texto interno com segurança contra ataques XSS
                textoDetalhe.textContent = infoDoCard;
                
                // Ativa as classes de estilo e animação de surgimento
                painelDetalhes.classList.remove("detalhes-oculto");
                painelDetalhes.classList.add("detalhes-ativo");
                
                // Destaca visualmente o card selecionado limpando os outros
                cards.forEach(c => c.style.backgroundColor = "var(--cor-fundo-card)");
                card.style.backgroundColor = "#f1f8e9"; // Tom leve de verde para foco
            }
        });
    });

    // ==========================================================================
    // 4. VALIDAÇÃO E ENVIO DE FORMULÁRIO (SIMULAÇÃO SEGURA)
    // ==========================================================================
    const formContato = document.getElementById("form-contato");

    if (formContato) {
        formContato.addEventListener("submit", (evento) => {
            evento.preventDefault(); // Impede o recarregamento padrão da página
            
            // Coleta e limpa espaços extras dos inputs (Sanitização básica)
            const nome = document.getElementById("nome").value.trim();
            const email = document.getElementById("email").value.trim();
            const mensagem = document.getElementById("mensagem").value.trim();

            // Validação extra caso o HTML falhe
            if (!nome || !email || !mensagem) {
                alert("Por favor, preencha todos os campos corretamente.");
                return;
            }

            // Simulação de envio bem-sucedido
            alert(`Obrigado pelo contato, ${nome}!\nSua mensagem sobre a Rota da Seda Sustentável foi enviada com sucesso para a nossa base de dados.`);
            
            // Reseta todos os campos do formulário
            formContato.reset();
            
            // Garante que o fundo da página volte ao normal se o envio ocorrer de telas menores
            document.body.style.overflow = "auto";
        });
    }
});