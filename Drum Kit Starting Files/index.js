const btns = document.querySelectorAll("button")

// O(n)
btns.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        const letra = btn.innerHTML
        parsion(letra)
    })
})
document.addEventListener("keypress",(event)=>{
    var letra = event.key
    parsion(letra)
})
 const keys = document.querySelectorAll(".drum")


 function parsion(e){
     
     switch(e){
         case 'w':
             var crash = new Audio("./sounds/crash.mp3")
             crash.play()
        case 'a':
            var kick = new Audio("./sounds/kick-bass.mp3")
            kick.play()
        case 's':
            var snare = new Audio("./sounds/snare.mp3")
            snare.play()
        case 'd':
            var tom = new Audio("./sounds/tom-1.mp3")
            tom.play() 
        case 'j':
            var tom = new Audio("./sounds/tom-2.mp3")
            tom.play() 
        case 'k':
            var tom = new Audio("./sounds/tom-3.mp3")
            tom.play() 
        case 'l':
            var tom = new Audio("./sounds/tom-4.mp3")
            tom.play() 
     }
 }