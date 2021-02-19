// const teste = document.querySelector(".content")
// teste.textContent = "Comprar Morango";

//estamos criando nosso código dentro de uma "IIFE"(Immediately invoked function expression -> '((){}())' )para que no console no navegador, nosso usuário não tenha acesso ao nosso código/regra de negócio 

(() => {

    const criarTarefa = (evento) => {

        evento.preventDefault();//bloqueia o reload da página quando nós adicionarmos uma nova tarefa 

        const lista = document.querySelector("[data-list]");//percorrendo até o elemento "ul" de nossa lista
        const input = document.querySelector("[data-form-input]"); //coletando a entrada do nosso usuário com sua nova tarefa
        const valor = input.value;//atribuindo à variavél 'valor' o valor do input que o usuário digitou

        const novaTarefa = document.createElement("li");//criando a variavel nova tarefa que nada mais é do que um novo elemento 'li'

        novaTarefa.classList.add("task");//adicionando classe task em nosso novo elemento li para receber os estilos de nosso css com fundo claro

        const conteudo = `<p class="content">${valor}</p>`;//criando constante conteúdo = um paragrafo que recebe a variavél valor que é o valor da entrada de nosso usuário

        novaTarefa.innerHTML = conteudo;//adicionando o html 'conteudo' em nossa 'li'

        lista.appendChild(novaTarefa);//adicionando um novo filho à nossa váriavel "lista" que é nosso elemento ul'lista'

        input.value = " "; //zerando nosso input

        novaTarefa.appendChild(BotaoConcluir());//Adicionando um novo filho por meio do método BotãoConcluir()
        novaTarefa.appendChild(BotaoDeletar());//Adicionando o botão deletar

        //tarefa.innerHTML = conteudo;
    }

    const novaTarefa = document.querySelector('[data-form-button]')//Seleciona 'ul'


    //console.log(input);


    novaTarefa.addEventListener("click", criarTarefa) //ao clicar no submit a função criar tarefa é acionada
    
    const BotaoConcluir = () => {

        botaoConcluir = document.createElement('button');//cria um elemento button
    
        botaoConcluir.classList.add('check-button');//adiciona ao novo button a classse check-button - responsável por estiliza-lo
    
        botaoConcluir.innerHTML = "Concluir";//Inserimos dentro do button o texto Concluir
    
        botaoConcluir.addEventListener('click', ConcluirTarefa)//Quando ocorrer o evento de click em cima do botão concluir o mpetodo Concluir tarefa é chamado
    
        return botaoConcluir;//retorna o botão para quem o chamou, neste caso para novaTarefa
    }
    
    //Aplica a ação concluir tarefa
    const ConcluirTarefa = (evento) => {
    
        const botaoAlvo = evento.target;//seleciona o botão que foi clicado(target)
    
        const tarefaCompleta = botaoAlvo.parentElement;//nossa tarefa é um paragrafo dentro de um li, "parentElement" significa que estamos selecionando o elemento pai deste paragrafo, no caso o li
    
        tarefaCompleta.classList.toggle('done')//toggle é o método que utilizamos quando o evento ocorrer, se não estiver adicionada a classe 'done'(responsável por atribuir o estilo na tarefa concluida) estyá classe será adicionada, caso contrário, está classe será removida, consequentemente o estilo de tarefa concluida será removido também
    }

    const BotaoDeletar = () => {

        const botaoDeleta = document.createElement("button");
    
        botaoDeleta.innerHTML = "deletar";
    
        botaoDeleta.addEventListener("click", deletarTarefa)
    
        return botaoDeleta;
    }
    
    const deletarTarefa = (evento)=>{
    
        const botaoAlvo = evento.target;//Seleciona o botão que foi clicado
        const tarefaDeletada = botaoAlvo.parentElement;//seleciona a "li", mãe do paragrafo em que este botão se encontra
        
        //console.log(tarefaDeletada);
    
        tarefaDeletada.remove();//removendo o elemento "Tarefa Deletada"
    
        return botaoAlvo;
    }

})();//fim de nossa IIFE

// Existem outros métodos que podemos utilizar para manipular nós:

// insertBefore(pai, filho): Coloca um nó antes do outro.
// replaceChild( elemento1, elemento2): Substitui o nó elemento 1 pelo nó elemento2.
// removeChild(elemento): Remove um nó da árvore.