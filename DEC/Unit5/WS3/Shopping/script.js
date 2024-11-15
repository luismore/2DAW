window.onload = () =>{
    document.getElementById("btn").addEventListener("click",()=>{

        let contenidoInput = document.getElementById("text").value; 
        document.getElementById("text").value=" ";
    
        let nuevaEntradaLista = document.createElement("li");
        nuevaEntradaLista.className = "list-element";
        

        document.getElementById("list").appendChild(nuevaEntradaLista);


        divElem = document.createElement("p")
        divElem.className = "p-texto";
        nuevaEntradaLista.appendChild(divElem);
        divElem.innerHTML = contenidoInput;
        

        //Boton Editar

        let editBtn = document.createElement("button");
        editBtn.className = "edit-btn";
        editBtn.onclick = edit;
        editBtn.innerHTML = "Editar";

        nuevaEntradaLista.appendChild(editBtn);        

        //Boton Eliminar

        let removeBtn = document.createElement("button");
        removeBtn.className = "remove-btn";
        removeBtn.onclick = remove;
        removeBtn.innerHTML = "Borrar";

        nuevaEntradaLista.appendChild(removeBtn)

    })
}

function edit(elemento){

    const button = elemento.target;
    const listItem = button.parentNode;

    newInput = prompt("Edit", listItem.firstChild.data);
    divElem.innerHTML = newInput;

}

function remove(elemento){ 

    const button = elemento.target;
    const listItem = button.parentNode;
    listItem.remove();

}