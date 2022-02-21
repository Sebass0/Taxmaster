
let studyequationinput = document.getElementById('studyequationinput')
studyequationinput.hidden = true
let y = document.getElementsByClassName('initialhide')
console.log(y[0].id)
for(var element of y) {
    document.getElementById(element.id).hidden = true
    console.log('hid '+ element.id)
}
// y.forEach(element => {
//     document.getElementById(element.id).hidden = true
// });
function toggleStudy() {
studyequationinput.hidden = !studyequationinput.hidden
}
function toggleView(x) {
    document.getElementById(x).hidden = !document.getElementById(x).hidden 
}
//A – ($250 − (C + D + E)) + B + C + D
let studyA = document.getElementById('studyA')
let studyB = document.getElementById('studyB')
let studyC = document.getElementById('studyC')
let studyD = document.getElementById('studyD')
let studyE = document.getElementById('studyE')
let prescribed = document.getElementById('prescribed')
let studyOutput = document.getElementById('studyOutput')

function studyCalculator() {
    let A = parseInt(studyA.value)
    let B = parseInt(studyB.value)
    let C = parseInt(studyC.value)
    let D = parseInt(studyD.value)
    let E = parseInt(studyE.value)
    let x = 250 - (C+D+E);
    if(x<0) x = 0
    if(prescribed.checked){
        
        document.getElementById('equationText').value = "A – ($250 − (C + D + E)) + B + C + D"
    }
    else {x=0; document.getElementById('equationText').value = "A + B + C + D"}

    studyOutput.innerHTML = A - x + B + C + D}