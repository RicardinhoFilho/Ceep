// const teste = document.querySelector(".content")
// teste.textContent = "Comprar Morango";

const criarTarefa = (evento) =>{
    
    evento.preventDefault();
    const input = document.querySelector("[data-form-input]");
    const valor = input.value;
    //document.querySelector("p").textContent = valor;//trocando conteúdo do paragrafo
    const tarefa = document.querySelector("[data-task]");

    const conteudo = `<p class="content">${valor}</p>`;

    tarefa.innerHTML = conteudo;
}

const novaTarefa = document.querySelector('[data-form-button]')


//console.log(input);


novaTarefa.addEventListener("click",criarTarefa)