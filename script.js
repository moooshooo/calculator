/* 
Author: Mos
Date: 2025-09-25
Version: 0.4
Project Name: Miniräknare
*/
console.log("Empowered by: MoS")
console.log("=================")

const btnList = document.getElementsByClassName("btnInput")
const showIndisplay = document.getElementById("Display")
const result = document.getElementById("resultBtn")
const back = document.getElementById("back")
const dateStamp = document.getElementById("dateStamp")

for(button of btnList) {
    const btn = button 
    button.onclick = () => {
        if(showIndisplay.textContent === "0"){
            showIndisplay.textContent = ""
        } 
        showIndisplay.textContent += btn.textContent
    }
}
/* 
console.log(showIndisplay.textContent) */

const allClear = document.getElementById("ac")
allClear.onclick = () =>{
    showIndisplay.textContent = 0
}

result.addEventListener("click", () => {
    const toCalculate = showIndisplay.textContent
    try {
        const ekvResult = eval(toCalculate)
        showIndisplay.textContent = ekvResult
    } catch (error) {
        showIndisplay.textContent = "Ops! DetBlevFel"
    }
})

//Slisar den sista siffran
back.addEventListener("click", () => {
    showIndisplay.textContent = showIndisplay.textContent.slice(0, -1)
})

//Leker med Datum
const showDateStamp = new Date()
dateStamp.textContent = showDateStamp.toLocaleString("sv-SE")