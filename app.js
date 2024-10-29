// let incremet = document.body.querySelector("#Increment");
let count =  document.body.querySelector("#counter");
let i = 0;
function incr(){
    i++;
    count.innerHTML=i;
}
function reset(){
    i = 0;
    count.innerHTML=0;
}
function decr(){
    i--;
    count.innerHTML=i;
}