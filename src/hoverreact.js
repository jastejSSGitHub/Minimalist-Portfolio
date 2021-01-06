//variable declarations:
//Main tabs to switch project type:
let title= document.getElementsByClassName("heading");

let uxproject1=document.getElementById("ux-project1");
let projectlist=document.getElementsByClassName("project-list")

uxproject1.addEventListener('mouseover', () =>{
    projectlist.style.display="none"
    document.getElementById("list-item-container-inactive").style.display="black";
})