function initHabilidadesTab(){
    // Adicionado ', .js-tabmenu img' para garantir que os SVGs também sejam selecionados
    const tabMenu = document.querySelectorAll('.js-tabmenu i, .js-tabmenu img') 
    const tabDesc = document.querySelectorAll('.descricao')
    const tabContent = document.querySelectorAll('.js-menudesc article')

    if(tabMenu.length && tabContent.length){
        let msg = 'Passe o mouse por cima de alguma habilidade para ler a descrição'
        if (window.innerWidth <= 800){ // Verifica se está em telas menores para mudar a mensagem
            msg = '/* Clique em alguma habilidade para ler a descrição */'
        }

        tabDesc[0].innerHTML = msg; // Define a mensagem inicial

        activeRemove(); // Garante que todas as descrições estejam inativas antes de ativar a primeira

        // Ativa a descrição da primeira habilidade (HTML) ao carregar a página
        activeTab(0); 
        tabDesc[0].innerHTML = ''; // Limpa a mensagem inicial se uma habilidade já foi ativada

        function activeTab(index) {
            tabContent.forEach(item => {
                item.classList.remove('ativo')
            });

            tabContent[index].classList.add('ativo')
        }

        tabMenu.forEach((itemMenu, index) => {
            itemMenu.addEventListener('mouseover', function(){
                activeTab(index)
                tabDesc[0].innerHTML = '' // Limpa a mensagem ao passar o mouse
            })
            // Adiciona o evento de clique para telas menores, se a mensagem for "Clique"
            if (window.innerWidth <= 800) {
                itemMenu.addEventListener('click', function() {
                    activeTab(index);
                    tabDesc[0].innerHTML = ''; // Limpa a mensagem ao clicar
                });
            }
        })

        tabMenu.forEach((itemMenu, index) => {
            itemMenu.addEventListener('mouseout', function(){
                // No mouseout, só reexibe a mensagem se não for um clique (para mobile)
                if (window.innerWidth > 800) {
                    activeRemove(index) // Remove a classe 'ativo' de todas as descrições
                    tabDesc[0].innerHTML = msg // Restaura a mensagem
                }
            })
        })
        
        function activeRemove() {
            tabContent.forEach(item => {
                item.classList.remove('ativo')
            });
        }
    }
}
initHabilidadesTab()