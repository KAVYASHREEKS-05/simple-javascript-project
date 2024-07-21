let Hour=document.querySelector('.hr-hand')
let Minute=document.querySelector('.min-hand')
let Second=document.querySelector('.sec-hand')

setInterval(UpdateTime,1000);
function UpdateTime(){
    let date=new Date();
    Second.style.transform=`rotate(${date.getSeconds()*6}deg)`
    Minute.style.transform=`rotate(${date.getMinutes()*6}deg)`
    Hour.style.transform=`rotate(${date.getHours()*30}deg)`
}