var newTags = {"Tutoring":"https://bobbyhadz.com/blog/javascript-create-element-with-class","Friv":"https://www.friv.com/","About Us":"https://shadow5470.github.io/Quiz_Academy/aboutUS"}
var topLinks = document.getElementsByTagName("a");
var links = document.getElementById("tallLine");
for(var keyTag in newTags){
var keys = Object.keys(newTags);
var newTag = document.createElement("a");
newTag.innerHTML=keyTag;
newTag.setAttribute("href",""+newTags[keyTag]+"");
links.appendChild(newTag);
}
