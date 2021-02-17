// const teste = document.querySelector(".content")
// teste.textContent = "Comprar Morango";

const criarTarefa = (evento) =>{
    
    evento.preventDefault();

    const lista= document.querySelector("[data-list]");//percorrendo até o elemento "ul" de nossa lista
    const input = document.querySelector("[data-form-input]");
    const valor = input.value;
    
    
    const tarefa = document.querySelector("[data-task]");

    const novaTarefa = document.createElement("li");

    const conteudo = `<p class="content">${valor}</p>`;

    novaTarefa.innerHTML=conteudo;

    lista.appendChild(novaTarefa);
    
    input.value = " "

    //tarefa.innerHTML = conteudo;
}

const novaTarefa = document.querySelector('[data-form-button]')


//console.log(input);


novaTarefa.addEventListener("click",criarTarefa)