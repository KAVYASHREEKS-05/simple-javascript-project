let buttons=document.getElementsByTagName('button')
let result=document.querySelector('.text')


for(i=0;i<buttons.length;i++){
    buttons[i].onclick=function(){
          let input=this.innerText;
          updateDisplay(input)
    }
}
function updateDisplay(input){
     let currentDisplay=result.innerText;
     if(currentDisplay=='0'){
        if(input!='DE' && input!='AC' && input!='='){
            result.innerText='';
            result.innerText+=input;
        }
     }
     else{
        if(input=='DE'){
            result.innerText=currentDisplay.substring(0,currentDisplay.length-1)

        }
        if(input=='AC'){
            result.innerText='0'
        }
        if(input!='DE' && input!='AC'&&input!='='){
            if (result.innerText.length < 10) {
            result.innerText+=input
            }
        }
        if(input=='='){
            let display=result.innerText;
            result.innerText=eval(display)
        }
     }
}