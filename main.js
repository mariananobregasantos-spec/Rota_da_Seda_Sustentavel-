document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Botão da seção Hero com rolagem suave
    const btnConhecer = document.getElementById("btn-conhecer");
    btnConhecer.addEventListener("click", () => {
        document.getElementById("sobre").scrollIntoView({ behavior: "smooth" });
    });

    // 2. Interatividade dos Cards de Pilares (Exibição de conteúdo dinâmico)
    const cards = document.querySelectorAll(".card");
    const painelDetalhes = document.getElementById("painel-detalhes");
    const textoDetalhe = document.getElementById("texto-detalhe");

    cards.forEach(card => {
        card.addEventListener("click", () => {
            // Pega a informação guardada no atributo 'data-info' do HTML
            const info = card.getAttribute("data-info");
            
            // Atualiza o texto do painel
            textoDetalhe.textContent = info;
            
            // Adiciona efeito visual de ativo
            painelDetalhes.classList.remove("detalhes-oculto");
            painelDetalhes.classList.add("detalhes-ativo");
            
            // Pequeno destaque visual no card selecionado
            cards.forEach(c => c.style.backgroundColor = "#ffffff");
            card.style.backgroundColor = "#f1f8e9";
        });
    });

    // 3. Envio do Formulário de Contato (Simulação)
    const form = document.getElementById("form-contato");
    form.addEventListener("submit", (e) => {
        e.preventDefault(); // Impede a página de recarregar
        
        const nome = document.getElementById("nome").value;
        
        // Mensagem de sucesso estilizada (alerta)
        alert(`Obrigado pelo contato, ${nome}! Juntos construiremos uma rota mais verde. Em breve responderemos.`);
        
        // Limpa o formulário
        form.reset();
    });
});