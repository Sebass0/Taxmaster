//income tax equation script
//establish variables for each input and span
var assessableIncome = document.getElementById('assessableIncome')
let deductions = document.getElementById('deductions')
let taxableIncomeOutput = document.getElementById('taxableIncomeOutput')
let taxableIncome = document.getElementById('taxableIncome')
let ausResident = document.getElementById('ausResident') //checkbox
let taxRatesOutput = document.getElementById('taxRatesOutput')
let basicIncomeTaxOutput = document.getElementById('basicIncomeTaxLiabilityOutput')
let basicIncomeTax = document.getElementById('basicIncomeTaxLiability')
let taxOffsets = document.getElementById('taxOffsets')
let refundableOffsets = document.getElementById('refundableOffsets')
let netIncomeTaxOutput = document.getElementById('netIncomeTaxLiabilityOutput')
let netIncomeTax = document.getElementById('netIncomeTaxLiability')
let leviesCharges = document.getElementById('leviesCharges')
let credits = document.getElementById('credits')
let finalAmount = document.getElementById('finalAmount') //span

//<!-- taxable income = assessable truncated down income - deductions truncated up-->
function TICalc() {
    console.log('TICalcing')
    taxableIncome.value = assessableIncome.value - deductions.value
    taxableIncomeOutput.innerHTML = "Taxable Income = Assessable income - deductions = " + assessableIncome.value + " - " + deductions.value + ' = ' + taxableIncome.value
    console.log('TI calcd')
}

// <!-- Basic income tax liability = taxable income * tax rates (Aus resident has different tax rates)-->
// $18,201 – $45,000 19 cents for each $1 over $18,200

// $45,001 – $120,000 = $5,092 plus 32.5 cents for each $1 over $45,000 

// $120,001 – $180,000 $29,467 plus 37 cents for each $1 over $120,000

// $180,001 and over $51,667 plus 45 cents for each $1 over $180,000
function BITCalc() {
    console.log('BITCALCing')
    let x = taxableIncome.value
    console.log(x)
    if (ausResident.checked) {
        if (x < 18201) {
            console.log('18200 rate confirmed')
            basicIncomeTax.value = 0
            taxRatesOutput.innerHTML = "Tax rates are 0 as taxable income is under the 18200 initial bracket for Australian tax residents"
            basicIncomeTaxOutput.innerHTML = 'Basic income tax liability is 0'
        }
        else if (x > 18200 && x < 45001) {
            basicIncomeTax.value = (x - 18200) * .19
            taxRatesOutput.innerHTML = 'Tax rate for Australian resident with taxable income over 18200 is 19c for every dollar over 18200'
            basicIncomeTaxOutput.innerHTML = 'Basic income tax liability = (' + x + " - 18200) x 0.19" + " = " + basicIncomeTax.value
        }
        else if (x > 45000 && x < 120000) {
            basicIncomeTax.value = 5092 + ((x - 45000) * .325)
            taxRatesOutput.innerHTML = 'Tax rate for Australian resident with taxable income over 45000 is 5092 + 32.5c for every dollar over 45000'
            basicIncomeTaxOutput.innerHTML = 'Basic income tax liability = ' + "5092 + ((" + x + " - 45000) x 0.325" + " = " + basicIncomeTax.value
        }
        else if (x > 120000 && x < 180000) {
            basicIncomeTax.value = 29467 + ((x - 120000) * .37)
            taxRatesOutput.innerHTML = 'Tax rate for Australian resident with taxable income over 120000 is 29467 + 37c for every dollar over 120000'
            basicIncomeTaxOutput.innerHTML = 'Basic income tax liability = ' + "29467 + ((" + x + " - 120000) x 0.37" + " = " + basicIncomeTax.value
        }
        else if (x > 180000) {
            basicIncomeTax.value = 51667 + ((x - 180000) * .45)
            taxRatesOutput.innerHTML = 'Tax rate for Australian resident with taxable income over 180000 is 51667 + 45c for every dollar over 180000'
            basicIncomeTaxOutput.innerHTML = 'Basic income tax liability = ' + "51667 + ((" + x + " - 180000) x 0.45" + " = " + basicIncomeTax.value
        }
        console.log('BITCALCd')
    }
    //foreign tax residents calc
    //0 – $120,000 32.5 cents for each $1
    // $120,001 – $180,000 $39,000 plus 37 cents for each $1 over $120,000
    // $180,001 and over $61,200 plus 45 cents for each $1 over $180,000
    else if (!ausResident.checked) {
        if (x < 120000) {
            console.log('120000 foreign rate confirmed')
            basicIncomeTax.value = x * .325
            taxRatesOutput.innerHTML = "Tax rate for foreign residents with taxable income under 120000 is 32.5c for every dollar, nothing tax-free"
            basicIncomeTaxOutput.innerHTML = 'Basic income tax liability = ' + x + " x 0.325" + " = " + basicIncomeTax.value
        }
        if (x < 180000 && x > 120000) {
            basicIncomeTax.value = 39000 + ((x - 120000) * .37)
            taxRatesOutput.innerHTML = 'Tax rate for foreign residents with taxable income over 120000 is 39000 + 37c for every dollar over 120000'
            basicIncomeTaxOutput.innerHTML = 'Basic income tax liability = ' + "39000 + ((" + x + " - 120000) x 0.37" + " = " + basicIncomeTax.value
        }
        if (x > 180000) {
            basicIncomeTax.value = 61200 + ((x - 180000) * .45)
            taxRatesOutput.innerHTML = 'Tax rate for foreign residents with taxable income over 180000 is 61200 + 45c for every dollar over 180000'
            basicIncomeTaxOutput.innerHTML = 'Basic income tax liability = ' + "61200 + ((" + x + " - 180000) x 0.45" + " = " + basicIncomeTax.value
        }
    }
}

// <!-- net income tax liability = basic income tax liability - tax offsets (rounded up) -->
function NITLCalc() {
    let n = parseFloat(taxOffsets.value)
    let b = parseFloat(refundableOffsets.value)
    n = n || 0
    b = b || 0 //sets to 0 if falsey
    taxOffsets.value = Math.round(parseFloat(n + 0.499)) //auto rounds up
    refundableOffsets.value = Math.round(parseFloat(b + 0.499))
    netIncomeTax.value = (basicIncomeTax.value - taxOffsets.value)
    let h = parseFloat(netIncomeTax.value)
    if(h<0){h = 0}
    h = h - refundableOffsets.value 
    netIncomeTax.value = +((h + 0.0001).toFixed(3))
    netIncomeTaxOutput.innerHTML = "Net income tax liability = basic income tax liability - tax offsets (rounded up) = " + basicIncomeTax.value + " - " + taxOffsets.value + " = " + netIncomeTax.value
}
// <!-- amount payable/refundable (rounded to nearest 5c) = net income tax liability + levies and charges (truncated to 2 decimals) - credits -->
function FACalc() {
    console.log(netIncomeTax.value)
    console.log(leviesCharges.value)
    console.log(credits.value)
    leviesCharges.value = leviesCharges.value || 0
    credits.value = credits.value || 0
    let x = parseFloat(netIncomeTax.value) + +(Math.round(leviesCharges.value + "e+2") + "e-2") - parseFloat(credits.value)
    finalAmount.innerHTML = "Final amount (rounded to 5c) = Net income tax liability + levies and charges (rounded to 2dec) - credits = " + netIncomeTax.value + " + " + +(Math.round(leviesCharges.value + "e+2") + "e-2") + " - " + credits.value + " = " + x + ", rounded to nearest 5c = " + (Math.round(x * 20) / 20).toFixed(2)
    if ((Math.round(x * 20) / 20).toFixed(2) > 0) { finalAmount.innerHTML += "<p>Amount payable is " + (Math.round(x * 20) / 20).toFixed(2) + "</p>" }
    else { finalAmount.innerHTML += "<p>Amount refundable is " + ((Math.round(x * 20) / 20).toFixed(2) * -1)  + '</p>' }
    console.log((Math.round(x * 20) / 20).toFixed(2))

}
