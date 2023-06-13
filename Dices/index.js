var imgs = "./images/dice"

const player_one = Math.floor(Math.random()*6)+1
const player_two = Math.floor(Math.random()*6)+1

img_one = `${imgs}${player_one}.png`
img_two = `${imgs}${player_two}.png`
// console.
document.querySelector("#playerOne").setAttribute("src",img_one)
document.querySelector("#playerTwo").setAttribute("src",img_two)

if (player_one>player_two){
    document.querySelector('h1').innerHTML = '🚩 Player one wins'
}else if(player_one<player_two){
    document.querySelector('h1').innerHTML = '🚩 Player two wins'
}else{
    document.querySelector('h1').innerHTML = '🚩 Tie'
}