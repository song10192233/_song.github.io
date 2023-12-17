let myHeading = document.querySelector("h1");
myHeading.textContent = "Hello World";
function setUserName(){
    let myName = prompt("请输入姓名");
    localStorage.setItem('name', myName);
    myHeading.textContent = "Hello World" + myName;
}
if(!localStorage.getItem('name')){
    setUserName();
}else{
    let storeName = localStorage.getItem('name');
    myHeading.textContent = "Hello World" + storeName;
}
let myButton = document.querySelector('button');

myButton.onclick = function(){
    setUserName();
}