const btn=document.querySelector('#rgb');
const h1=document.querySelector('h1');
btn.addEventListener('click',function (){
    let newColor=makeRand();
    document.body.style.backgroundColor=newColor;
    h1.innerText=newColor;

})
let makeRand=()=>{
    const r=Math.floor(Math.random()*255)+1;
    const g=Math.floor(Math.random()*255)+1;
    const b=Math.floor(Math.random()*255)+1;
    return `rgb(${r},${g},${b})`;
}