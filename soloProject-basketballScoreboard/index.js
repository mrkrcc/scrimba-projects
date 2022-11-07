

let homeEl = document.getElementById("home--score")
let guestEl = document.getElementById("guest--score")
let homeScore = 0
let guestScore = 0
function increment(target){
    if(target.name == "homeBtn"){
        homeScore += Number(target.value)
        homeEl.textContent = homeScore
    } else {
        guestScore += Number(target.value)
        guestEl.textContent = guestScore
    }
}

function reset(){
    guestScore = 0
    homeScore = 0
    homeEl.textContent = homeScore
    guestEl.textContent = guestScore
}