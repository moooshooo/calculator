/* 
Author: Mos
Date: 2025-09-25
Version: 0.1
Project Name: Miniräknare
*/
console.log("Empowered by: MoS")
console.log("=================")

const btnList = document.getElementsByClassName("btnInput")
const showIndisplay = document.getElementById("Display")


for(button of btnList) {
    const btn = button 
    button.onclick = () => {
        if(showIndisplay.textContent === "0"){
            showIndisplay.textContent = ""
        } 
        showIndisplay.textContent += btn.textContent
    }
}

const allClear = document.getElementById("ac")
allClear.onclick = () =>{
    showIndisplay.textContent = 0
}

const calculatorresult = document.getElementById("resultbtn")
    result.onclick = () => {
        const ekvation = btn.textContent += btn.textContent
    }