//selecting popup box popup overlay button
var popupbox= document.querySelector(".popup-box");
var editbutton=document.querySelector(".edit");
var addpopupbutton = document.querySelector(".add-button");
var dltbtn=document.querySelector(".delete-item");
var hd=document.querySelector(".hide");

editbutton.addEventListener("click",function(){
    addpopupbutton.style.display="block";
    dltbtn.style.display="block";
    hd.style.display="block";

})
hd.addEventListener("click", function(){
    addpopupbutton.style.display="none";
    dltbtn.style.display="none";
    hd.style.display="none";
})
addpopupbutton.addEventListener("click",function(){
    popupbox.style.display="block";
})

// select cancel button for give default 

var cancelbutton = document.getElementById("cancel-item");

cancelbutton.addEventListener("click", function(event){
    event.preventDefault()
    popupbox.style.display="none";
})






// select container.add-book,book-title-input,book-author-input,book-description-input

var container=document.querySelector(".menu-content");
var additem = document.getElementById("add-item");

var menutitle=document.getElementById("item-name");
var menudesc=document.getElementById("item-description");
var menurate = document.getElementById("item-rate");
var menuimg= document.getElementsByClassName("")

additem.addEventListener("click", function(event){

    event.preventDefault()
    var div = document.createElement("div");
    div.setAttribute("class","menu-item")

    div.innerHTML=`<h2>${menu.value}</h2>
    <h5>${menurate.value}</h5>
    <p>${menudesc.value}</p>
    <button onclick="deletebook(event)">Delete</button>`
    container.append(div)
    popupbox.style.display="none";
})

function deletebook(event){

    event.target.parentElement.remove()

}