let FTRCheck = document.getElementById('ftrCheck')
let taxableIncomeML = document.getElementById('taxableIncomeML')
let partner = document.getElementById("partner")
let taxableIncomeMLP = document.getElementById('taxableIncomeMLP')
let dependents = document.getElementById('dependents')
let MLOutput = document.getElementById('MLOutput')
let MLSOutput = document.getElementById('MLSOutput')

if (partner.checked) { taxableIncomeMLP.hidden = false }

function MLCalc() {
    if (taxableIncomeMLP.hidden) { taxableIncomeMLP.value = 0 }
    let x = taxableIncomeML.value
    let y = taxableIncomeMLP.value
    console.log(y)
    let z = dependents.value
    if (FTRCheck.checked) {
        MLOutput.innerHTML = "Foreign Tax Residents are not liable to pay the Medicare levy"
        MLSOutput.innerHTML = "Total Medicare levy and surcharge = 0"
    }
    else if (taxableIncomeMLP.hidden && z == 0 && x < 23226) {
        MLOutput.innerHTML = "Taxable income under the minimum income threshold (23226) for singles to pay the Medicare levy"
        MLSOutput.innerHTML = "Total Medicare levy and surcharge = 0"
    }
    else if (taxableIncomeMLP.hidden && z == 0 && x > 23226 && x < 29033) {
        console.log('firing')
        i = (x - 23226) * .1
        MLOutput.innerHTML = "Taxable income is under the $29033 singles threshold to pay the full 2% levy, instead paying 10% of taxable income over the 23226 initial threshold = (" + x + " - 23226) * .1 = " + i

        MLSOutput.innerHTML = "Surcharge = 0 as taxable single income is under the 90000 threshold"
    }
    else if (taxableIncomeMLP.hidden && z == 0 && x > 29033 && x < 90000) {
        i = x * .02
        MLOutput.innerHTML = "Taxable income is over the $29033 singles threshold to pay the full 2% levy, thus the levy = " + x + " * 0.02 = " + i

        MLSOutput.innerHTML = "Surcharge = 0 as taxable single income is under the 90000 Medicare levy surcharge threshold"
    }
    else if (taxableIncomeMLP.hidden && z == 0 && x > 90000 && x < 105000) {
        i = x * .02
        h = x * .01
        MLOutput.innerHTML = "Taxable income is over the $29033 singles threshold to pay the full 2% levy, thus the levy = " + x + " * 0.02 = " + i

        MLSOutput.innerHTML = "Taxable single income is over the lowest 90000 Medicare levy surcharge threshold so the surcharge = " + x + " * 0.01 = " + h
    }
    else if (taxableIncomeMLP.hidden && z == 0 && x > 105000 && x < 140000) {
        i = x * .02
        h = x * .0125
        MLOutput.innerHTML = "Taxable income is over the $29033 singles threshold to pay the full 2% levy, thus the levy = " + x + " * 0.02 = " + i

        MLSOutput.innerHTML = "Taxable single income is over the middle 105000 Medicare levy surcharge threshold so the surcharge = " + x + " * 0.0125 = " + h
    }

    else if (taxableIncomeMLP.hidden && z == 0 && x > 140000) {
        i = x * .02
        h = x * .015
        MLOutput.innerHTML = "Taxable income is over the $29033 singles threshold to pay the full 2% levy, thus the levy = " + x + " * 0.02 = " + i

        MLSOutput.innerHTML = "Taxable single income is over the highest 140000 Medicare levy surcharge threshold so the surcharge = " + x + " * 0.015 = " + h
    }
    
    //family equations
   else if (z == 0) { z = 1} //fixes the Z problem
    console.log('z = ' + z)
    if ((!taxableIncomeMLP.hidden || z > 0) && x < 23226) {
        if (z == 0) { z = 1}
        MLOutput.innerHTML = "Taxable income under the minimum income threshold (23226) to pay the Medicare levy or the family $180000 + " + (z-1) * 1500 + " (+1500 for each dependent after 1) threshold to pay the surcharge"
        MLSOutput.innerHTML = "Total Medicare levy and surcharge = 0"
    }
    else if ((!taxableIncomeMLP.hidden || z > 0) && x > 23226 && x < 29033) {
        console.log('firing')
        i = (x - 23226) * .1
        if (z == 0) { z = 1}
        MLOutput.innerHTML = "Taxable income is under the $29033 threshold to pay the full 2% levy, instead paying 10% of taxable income over the 23226 initial threshold = (" + x + " - 23226) * .1 = " + i

        MLSOutput.innerHTML = "Surcharge = 0 as taxable family income is under the 180000 + " + (z-1) * 1500 + " (+1500 for each dependent after 1) minimum threshold"
    }
    else if ((!taxableIncomeMLP.hidden || z > 0) && x > 29033 && x < (180000 + (1500 * (z - 1)))) {
        i = x * .02
        if (z == 0) { z = 1}
        MLOutput.innerHTML = "Taxable income is over the $29033 threshold to pay the full 2% levy, thus the levy = " + x + " * 0.02 = " + i

        MLSOutput.innerHTML = "Surcharge = 0 as taxable family income is under the 180000 + " + (z-1) * 1500 + " (+1500 for each dependent after 1) Medicare levy surcharge minimum threshold"
    }
    else if ((!taxableIncomeMLP.hidden || z > 0) && x >= (180000 + (1500 * (z - 1))) && x < (210000 + (1500 * (z - 1)))) {
        i = x * .02
        h = x * .01
        if (z == 0) { z = 1}
        MLOutput.innerHTML = "Taxable income is over the $29033 threshold to pay the full 2% levy, thus the levy = " + x + " * 0.02 = " + i

        MLSOutput.innerHTML = "Taxable family income is over the lowest 180000 + " + (z-1) * 1500 + " (+1500 for each dependent after 1) Medicare levy surcharge threshold so the surcharge = " + x + " * 0.01 = " + h

    }

    else if ((!taxableIncomeMLP.hidden || z > 0) && x >= (210000 + (1500 * (z - 1))) && x < (280000 + (1500 * (z - 1))) ) {
        i = x * .02
        h = (x * .0125).toFixed(4)
        if (z == 0) { z = 1}
        MLOutput.innerHTML = "Taxable income is over the $29033 threshold to pay the full 2% levy, thus the levy = " + x + " * 0.02 = " + i

        MLSOutput.innerHTML = "Taxable family income is over the middle 210000 + " + (z-1) * 1500 + " (+1500 for each dependent after 1) Medicare levy surcharge threshold so the surcharge = " + x + " * 0.0125 = " + h

    }
    else if ((!taxableIncomeMLP.hidden || z > 0) && x >= (280000 + (1500 * (z - 1)))) {
        i = x * .02
        h = (x * .015).toFixed(3)
        
        MLOutput.innerHTML = "Taxable income is over the $29033 threshold to pay the full 2% levy, thus the levy = " + x + " * 0.02 = " + i

        MLSOutput.innerHTML = "Taxable family income is over the highest $280000 + " + (z-1) * 1500 + " (+1500 for each dependent after 1) Medicare levy surcharge threshold so the surcharge = " + x + " * 0.015 = " + h

    }



}