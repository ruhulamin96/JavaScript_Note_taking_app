
showNotes()
// If user adds a note, add it to the localStorage
let addBtn = document.getElementById("addBtn")
addBtn.addEventListener("click", function(){
    let addTxt = document.getElementById("addTxt")
    let addTitle = document.getElementById("title")


    let notes = localStorage.getItem("notes")
    if(notes==null){
        notesObj=[]
    }
    else{
        // takes a JSON string and transforms it into a JavaScript object.
        notesObj=JSON.parse(notes)
    }
    let newObj = {
        title: addTitle.value,
        addTxt: addTxt.value
    }
    notesObj.push(newObj)
    // takes a JavaScript object and transforms it into a JSON string.
    localStorage.setItem("notes", JSON.stringify(notesObj))
    addTxt.value=" "
    addTitle.value=" "
   showNotes()
})
function showNotes(){
    let notes = localStorage.getItem("notes")
    if(notes==null){
        notesObj=[]
    }
    else{
        notesObj =JSON.parse(notes)
    }
    let html = ""
    notesObj.forEach((element,index) => {
        html +=`<div class="noteCard my-2 mx-2 card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title font-weight-bold">${element.title}</h5>
            <p class="card-text"> ${element.addTxt}</p>
            <button style="background-color: coral;" id="${index}"onclick="deleteNote(this.id)" class="btn">Delete Note</button>
        </div>
    </div>`
    });

    let notesElm = document.getElementById("notes");
  if (notesObj.length != 0) {
    notesElm.innerHTML = html;
  } else {
    notesElm.innerHTML = `Please, Add some note above section`;
  }

}

// This is note delete section

function deleteNote(index){
let notes = localStorage.getItem("notes")
    if(notes==null){
        notesObj=[]
    }
    else{
        notesObj=JSON.parse(notes)
    }
    notesObj.splice(index, 1)
    localStorage.setItem("notes", JSON.stringify(notesObj))
    showNotes()
}