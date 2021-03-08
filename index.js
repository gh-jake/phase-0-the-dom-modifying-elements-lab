// Write your code here!
let node = document.getElementById("main");
node.remove();

const newHeader = document.createElement('h1');
document.body.appendChild(newHeader);
newHeader.setAttribute("id", "victory");
const text = document.createTextNode("Jake is the champion");
newHeader.appendChild(text);