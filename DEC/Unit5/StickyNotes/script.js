const notesContainer = document.getElementById("app");
const addNoteButton = notesContainer.querySelector(".add-note");

getNotes().forEach((note) =>{
    const noteElement = createNoteElements(note.id, note.content);
    notesContainer.insertBefore(noteElement, addNoteButton);
});

addNoteButton.addEventListener("click", () => addNote());


//Funciones

function getNotes(){
    return JSON.parse(localStorage.getItem("stickynotes-notes") || "[]");

}

function saveNotes(notes){
    localStorage.setItem("stickynotes-notes", JSON.stringify(notes));
}

function createNoteElements(id, content){
    const element = document.createElement("textarea");

    element.classList.add("notes");
    element.value = content;
    element.placeholder = "Empty Sticky Note";

    element.addEventListener("change", () =>{
        updateNotes(id, element.value);
    });

    element.addEventListener("dblclick", ()=>{
        const doDelete = confirm("Are you sure you want to delete this note?");
        
        if (doDelete) {
            deleteNote(id, element);
        }
    });

    return element;
}

function addNote(){
    const notes = getNotes();
    const noteObject = {
        id: Math.floor(Math.random() * 100000),
        content: "",
    };

    const noteElement = createNoteElements(noteObject.id, noteObject.content);
    notesContainer.insertBefore(noteElement, addNoteButton);

    notes.push(noteObject);
    saveNotes(notes);

}
 
function updateNotes(id, newContent){
    const notes = getNotes();
    const targetNote = notes.filter((note) => note.id == id)[0];

    targetNote.content = newContent;
    saveNotes(notes);
}

function deleteNote(id, element){
    const notes = getNotes().filter((note) => note.id != id);


    saveNotes(notes);
    notesContainer.removeChild(element);
}
