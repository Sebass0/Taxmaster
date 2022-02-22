//
//Study Equation Code
//
let aArray = []
let bArray = []
let cArray = []
let dArray = []
let eArray = []
let ASum = 0
let BSum = 0
let CSum = 0
let DSum = 0
let ESum = 0
let studyequationinput = document.getElementById('studyequationinput')
studyequationinput.hidden = true
let y = document.getElementsByClassName('initialhide')
console.log(y[0].id)
for (var element of y) {
    document.getElementById(element.id).hidden = true
    console.log('hid ' + element.id)
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

function studyCalculator(key) {
    const reducer = (accumulator, curr) => accumulator + curr;
    let A = parseInt(studyA.value)
    let B = parseInt(studyB.value)
    let C = parseInt(studyC.value)
    let D = parseInt(studyD.value)
    let E = parseInt(studyE.value)
    A = A || 0
    B = B || 0
    C = C || 0
    D = D || 0
    E = E || 0
    switch (key) {
        case 'A':
            aArray.unshift(A)
            document.getElementById('aCollector').innerHTML += aArray[0] + " "
            console.log(aArray)
            console.log(aArray.reduce(reducer));
            ASum = parseInt(aArray.reduce(reducer))
            break;
        case 'B':
            bArray.unshift(B)
            document.getElementById('bCollector').innerHTML += bArray[0] + " "
            console.log(bArray)
            BSum = bArray.reduce(reducer)
            break;
        case 'C':
            cArray.unshift(C)
            document.getElementById('cCollector').innerHTML += cArray[0] + " "
            console.log(cArray)
            CSum = cArray.reduce(reducer)
            break;
        case 'D':
            dArray.unshift(D)
            document.getElementById('dCollector').innerHTML += dArray[0] + " "
            console.log(dArray)
            DSum = dArray.reduce(reducer)
            break;
        case 'E':
            eArray.unshift(E)
            document.getElementById('eCollector').innerHTML += eArray[0] + " "
            console.log(eArray)
            ESum = eArray.reduce(reducer)
            break;
        default:
            break;
    }







    // cArray.unshift(C)
    // document.getElementById('cCollector').innerHTML += cArray[0] + " "
    // console.log(cArray)
    // var CSum = cArray.reduce(reducer)









    let x = 250 - (CSum + DSum + ESum);
    if (x < 0) x = 0
    if (prescribed.checked) {

        document.getElementById('equationText').value = "A – ($250 − (C + D + E)) + B + C + D"
    }
    else { x = 0; document.getElementById('equationText').value = "A + B + C + D" }
    console.log("asum=" + ASum)
    console.log("csum=" + CSum)
    console.log("esum=" + ESum)
    studyOutput.innerHTML = "The total study deductible is "+ (ASum - x + BSum + CSum + DSum)
}

function resetArray(z) {
    switch (z) {
        case 'A':
            console.log('A reset')
            aArray = []
            document.getElementById('aCollector').innerHTML = ''
            ASum = 0
            break;
        case 'B':
            console.log('B reset')
            bArray = []
            document.getElementById('bCollector').innerHTML = ''
            BSum = 0
            break;
        case 'C':
            console.log('C reset')
            cArray = []
            document.getElementById('cCollector').innerHTML = ''
            CSum = 0
            break;
        case 'D':
            console.log('D reset')
            dArray = []
            document.getElementById('dCollector').innerHTML = ''
            DSum = 0
            break;
        case 'E':
            
            eArray = []
            document.getElementById('eCollector').innerHTML = ''
            ESum = 0
            console.log(eArray)
            break;
        default:
            break;
    }
}
    //
    //End study equation Code
    //