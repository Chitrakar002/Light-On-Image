const circle = document.querySelector('.circle');


window.addEventListener('mousemove',(e)=>
{
    // console.log(e);    
    circle.style.left = `${(e.clientX)-100}px`;
    circle.style.top = `${(e.clientY)-100}px`;
    

})