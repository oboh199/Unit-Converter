let convertBtn = document.getElementById("convert-btn")
let inputCell = document.getElementById("holder")
let lengths = document.getElementById("lengthy")
let volumes= document.getElementById("volumey")
let masses= document.getElementById("massy") 
const meterstofeet = 3.281 
const literstogallons = 0.264 
const kgtopounds = 2.204 
convertBtn.addEventListener("click", function (){
   let inputvalue = inputCell.value
    lengths.textContent = `${inputvalue} meter = ${(inputvalue * meterstofeet).toFixed(3)} feet | 
     ${inputvalue} feet = ${(inputvalue / meterstofeet).toFixed(3)} meters`
     
     volumes.textContent = `${inputvalue} liters = ${(inputvalue * literstogallons).toFixed(3)} gallons |  ${inputvalue} gallons = ${(inputvalue / literstogallons).toFixed(3)}  liters`
    
    masses.textContent = `${inputvalue} pounds = ${(inputvalue * kgtopounds).toFixed(3)} pounds | ${(inputvalue / kgtopounds).toFixed(3)} kilos `
})
