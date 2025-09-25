/* 
Author: Mos
Date: 2025-09-25
Version: 0.5
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
        }else if(showIndisplay.textContent === "-- 2-long --"){
           showIndisplay.textContent = ""
        }else if(showIndisplay.textContent === "Ops!"){
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
        if (ekvResult.toString().length >= 10) {
            showIndisplay.textContent = "-- 2-long --"
        }
    } catch (error) {
        showIndisplay.textContent = "Ops!"
    }
})

//Slisar den sista siffran
back.addEventListener("click", () => {
    showIndisplay.textContent = showIndisplay.textContent.slice(0, -1)
})

//Leker med Datum
/* const showDateStamp = new Date()
dateStamp.textContent = showDateStamp.toLocaleString("sv-SE") */


//Funktion som hämtar sista push av denna repo

async function getLastPush() {
    const response = await fetch("https://api.github.com/repos/moooshooo/calculator");
    const data = await response.json();

    // "pushed_at" is an ISO timestamp
    const lastPush = new Date(data.pushed_at);

    // Format it for display
    document.getElementById("lastUpdated").textContent =
        "Last push to GitHub: " + lastPush.toLocaleString("sv-SE");
}

getLastPush();