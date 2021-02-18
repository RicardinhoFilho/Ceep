// const teste = document.querySelector(".content")
// teste.textContent = "Comprar Morango";

const criarTarefa = (evento) =>{
    
    evento.preventDefault();

    const lista= document.querySelector("[data-list]");//percorrendo até o elemento "ul" de nossa lista
    const input = document.querySelector("[data-form-input]"); //coletando a entrada do nosso usuário com sua nova tarefa
    const valor = input.value;//atribuindo à variavél 'valor' o valor do input que o usuário digitou
    
    const novaTarefa = document.createElement("li");//criando a variavel nova tarefa que nada mais é do que um novo elemento 'li'

    novaTarefa.classList.add("task");//adicionando classe task em nosso novo elemento li para receber os estilos de nosso css com fundo claro

    const conteudo = `<p class="content">${valor}</p>`;//criando constante conteúdo = um paragrafo que recebe a variavél valor que é o valor da entrada de nosso usuário

    novaTarefa.innerHTML=conteudo;//adicionando o html 'conteudo' em nossa 'li'

    lista.appendChild(novaTarefa);//adicionando um novo filho à nossa váriavel "lista" que é nosso elemento ul'lista'
    
    input.value = " "; //zerando nosso input

    //tarefa.innerHTML = conteudo;
}

const novaTarefa = document.querySelector('[data-form-button]')//Seleciona 'ul'


//console.log(input);


novaTarefa.addEventListener("click",criarTarefa) //ao clicar no submit a função criar tarefa é acionada








// Existem outros métodos que podemos utilizar para manipular nós:

// insertBefore(pai, filho): Coloca um nó antes do outro.
// replaceChild( elemento1, elemento2): Substitui o nó elemento 1 pelo nó elemento2.
// removeChild(elemento): Remove um nó da árvore.