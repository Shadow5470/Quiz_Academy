var newTags = {"Tutoring":"https://bobbyhadz.com/blog/javascript-create-element-with-class","Friv":"https://www.friv.com/","About Me":"aboutme"}
var topLinks = document.getElementsByTagName("a");
var links = document.getElementById("tallLine");
for(var keyTag in newTags){
var keys = Object.keys(newTags);
var newTag = document.createElement("a");
newTag.innerHTML=keyTag;
newTag.setAttribute("href",""+newTags[keyTag]+"");
links.appendChild(newTag);
}
