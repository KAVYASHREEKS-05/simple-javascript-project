const ListContainer=document.querySelector('.listContainer')
const InputText=document.querySelector('.text')
const AddButton=document.querySelector('.addButton')

AddButton.onclick=()=>{
    if(InputText.value===''){
        alert("You must enter something")
    }
    else{
        let li=document.createElement('li')
        li.innerHTML=InputText.value;
        ListContainer.appendChild(li)
        let Img=document.createElement('img')
        Img.src='crossmark.png';
        li.appendChild(Img)
        saveData()

    }
    InputText.value=''
}
ListContainer.onclick=((e)=>{
     if(e.target.tagName==='LI'){
        e.target.classList.toggle('checked')
        saveData()
     }
     else if(e.target.tagName=='IMG'){
        e.target.parentElement.remove();
        saveData()
     }
})
function saveData(){
    localStorage.setItem('data',ListContainer.innerHTML)
}
function ShowTask(){
    ListContainer.innerHTML=localStorage.getItem('data')
}
ShowTask()