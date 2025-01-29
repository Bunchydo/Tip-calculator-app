// Selecting Input Fields for Funcitonality
let billInputField = document.getElementById("billInputField")
let numberOfPeopleInputField = document.getElementById("numberOfInputField")


// Selecting Buttons for Funcitonality
let button1_5Percent = document.getElementById("button1")
let button2_10Percent = document.getElementById("button2")
let button3_15Percent = document.getElementById("button3")
let button4_25Percent = document.getElementById("button4")
let button5_50Percent = document.getElementById("button5")
let button6_CustomPercent = document.getElementById("button6")


// Texts to Edit For Rightside of Container
let tipAmountNumberToEdit = document.getElementById("tipAmountNumberToEdit")
let totalPriceNumberToEdit = document.getElementById("totalPriceNumberToEdit")


let secondaryButtonColor = "#26c2ad";
let primaryButtonColor = "#00474b";






//resetButton
resetButton = document.getElementById("resetButton")
resetButton.addEventListener("click",function(){
    tipAmountNumberToEdit.innerText = "$0.00";
    totalPriceNumberToEdit.innerText = "$0.00";
    billInputField.value = "";
    numberOfPeopleInputField.value = "";

    button1_5Percent.style.backgroundColor = primaryButtonColor;
    button2_10Percent.style.backgroundColor = primaryButtonColor;
    button3_15Percent.style.backgroundColor = primaryButtonColor;
    button4_25Percent.style.backgroundColor = primaryButtonColor;
    button5_50Percent.style.backgroundColor = primaryButtonColor;
    
    location.reload(true)
})


// Custom Input Tip Button 
button6_CustomPercent.addEventListener("input", function(){

  let billValueEntered = parseFloat(billInputField.value);
  let numberOfPeople = parseInt(numberOfPeopleInputField.value);
  let inputFieldValueForCustomInput = parseFloat(button6_CustomPercent.value);
  
  let BillValuePerPerson = (billValueEntered/numberOfPeople);
  let tipAmountPercentPerPerson =  (BillValuePerPerson * (inputFieldValueForCustomInput/100) ).toFixed(2) ;

  let totalBillValuePerson = (BillValuePerPerson + parseFloat(tipAmountPercentPerPerson)).toFixed(2);

  tipAmountNumberToEdit.innerText = tipAmountPercentPerPerson;

  totalPriceNumberToEdit.innerText = totalBillValuePerson;

  button1_5Percent.style.backgroundColor = primaryButtonColor;
  button2_10Percent.style.backgroundColor = primaryButtonColor;
  button3_15Percent.style.backgroundColor = primaryButtonColor;
  button4_25Percent.style.backgroundColor = primaryButtonColor;
  button5_50Percent.style.backgroundColor = primaryButtonColor;
  button6_CustomPercent.style.backgroundColor = "white";
  
    // Validate inputs
    if (isNaN(billValueEntered) || isNaN(numberOfPeople) || numberOfPeople <= 0) {
      alert("Please enter valid inputs for bill and number of people.");
      button1_5Percent.style.backgroundColor = primaryButtonColor;
  button2_10Percent.style.backgroundColor = primaryButtonColor;
  button3_15Percent.style.backgroundColor = primaryButtonColor;
  button4_25Percent.style.backgroundColor = primaryButtonColor;
  button5_50Percent.style.backgroundColor = primaryButtonColor;

  numberOfPeopleInputField.style.border = "2px solid #B47C6D";
      return;
    }
})



// 5% Button Functionality 
button1_5Percent.addEventListener("click", function(){

    let billValueEntered = parseFloat(billInputField.value);
    let numberOfPeople = parseInt(numberOfPeopleInputField.value);

    
    let BillValuePerPerson = (billValueEntered/numberOfPeople);
    let tipAmountPercentPerPerson =  (BillValuePerPerson * (5/100)).toFixed(2) ;

    let totalBillValuePerson = (BillValuePerPerson + parseFloat(tipAmountPercentPerPerson)).toFixed(2);

    tipAmountNumberToEdit.innerText = tipAmountPercentPerPerson;

    totalPriceNumberToEdit.innerText = totalBillValuePerson;

    button1_5Percent.style.backgroundColor = secondaryButtonColor;
    button2_10Percent.style.backgroundColor = primaryButtonColor;
    button3_15Percent.style.backgroundColor = primaryButtonColor;
    button4_25Percent.style.backgroundColor = primaryButtonColor;
    button5_50Percent.style.backgroundColor = primaryButtonColor;
    
      // Validate inputs
      if (isNaN(billValueEntered) || isNaN(numberOfPeople) || numberOfPeople <= 0) {
        alert("Please enter valid inputs for bill and number of people.");
        button1_5Percent.style.backgroundColor = primaryButtonColor;
    button2_10Percent.style.backgroundColor = primaryButtonColor;
    button3_15Percent.style.backgroundColor = primaryButtonColor;
    button4_25Percent.style.backgroundColor = primaryButtonColor;
    button5_50Percent.style.backgroundColor = primaryButtonColor;

    numberOfPeopleInputField.style.border = "2px solid #B47C6D";
        return;
      }
})

// 10% Button Functionality 
button2_10Percent.addEventListener("click", function(){

    let billValueEntered = parseFloat(billInputField.value);
    let numberOfPeople = parseInt(numberOfPeopleInputField.value);

    
    let BillValuePerPerson = (billValueEntered/numberOfPeople);
    let tipAmountPercentPerPerson =  (BillValuePerPerson * (10/100)).toFixed(2) ;

    let totalBillValuePerson = (BillValuePerPerson + parseFloat(tipAmountPercentPerPerson)).toFixed(2);

    tipAmountNumberToEdit.innerText = tipAmountPercentPerPerson;

    totalPriceNumberToEdit.innerText = totalBillValuePerson;
    button1_5Percent.style.backgroundColor = primaryButtonColor;
    button2_10Percent.style.backgroundColor = secondaryButtonColor;
    button3_15Percent.style.backgroundColor = primaryButtonColor;
    button4_25Percent.style.backgroundColor = primaryButtonColor;
    button5_50Percent.style.backgroundColor = primaryButtonColor;
    
    if (isNaN(billValueEntered) || isNaN(numberOfPeople) || numberOfPeople <= 0) {
        alert("Please enter valid inputs for bill and number of people.");
      
        button1_5Percent.style.backgroundColor = primaryButtonColor;
    button2_10Percent.style.backgroundColor = primaryButtonColor;
    button3_15Percent.style.backgroundColor = primaryButtonColor;
    button4_25Percent.style.backgroundColor = primaryButtonColor;
    button5_50Percent.style.backgroundColor = primaryButtonColor;
        return;
        
      }
})

// 15% Button Functionality 
button3_15Percent.addEventListener("click", function(){

    let billValueEntered =  parseFloat(billInputField.value);
    let numberOfPeople = parseInt(numberOfPeopleInputField.value);

    
    let BillValuePerPerson = (billValueEntered/numberOfPeople);
    let tipAmountPercentPerPerson =  (BillValuePerPerson * (15/100)).toFixed(2) ;
    

    let totalBillValuePerson = (BillValuePerPerson + parseFloat(tipAmountPercentPerPerson)).toFixed(2);

    tipAmountNumberToEdit.innerText = tipAmountPercentPerPerson;

    totalPriceNumberToEdit.innerText = totalBillValuePerson;

    button3_15Percent.style.backgroundColor = secondaryButtonColor;
    button1_5Percent.style.backgroundColor = primaryButtonColor;
    button2_10Percent.style.backgroundColor = primaryButtonColor;
    button4_25Percent.style.backgroundColor = primaryButtonColor;
    button5_50Percent.style.backgroundColor = primaryButtonColor;

    if (isNaN(billValueEntered) || isNaN(numberOfPeople) || numberOfPeople <= 0) {
        alert("Please enter valid inputs for bill and number of people.");
        button1_5Percent.style.backgroundColor = primaryButtonColor;
    button2_10Percent.style.backgroundColor = primaryButtonColor;
    button3_15Percent.style.backgroundColor = primaryButtonColor;
    button4_25Percent.style.backgroundColor = primaryButtonColor;
    button5_50Percent.style.backgroundColor = primaryButtonColor;
        return;
      }
})

// 25% Button Functionality 
button4_25Percent.addEventListener("click", function(){

    let billValueEntered = parseFloat(billInputField.value);
    let numberOfPeople = parseInt(numberOfPeopleInputField.value);

    
    let BillValuePerPerson = (billValueEntered/numberOfPeople);
    let tipAmountPercentPerPerson =  (BillValuePerPerson * (25/100)).toFixed(2) ;

    let totalBillValuePerson = (BillValuePerPerson + parseFloat(tipAmountPercentPerPerson)).toFixed(2);

    tipAmountNumberToEdit.innerText = parseFloat(tipAmountPercentPerPerson);

    totalPriceNumberToEdit.innerText = totalBillValuePerson;

    button4_25Percent.style.backgroundColor = secondaryButtonColor;
    button1_5Percent.style.backgroundColor = primaryButtonColor;
    button2_10Percent.style.backgroundColor = primaryButtonColor;
    button3_15Percent.style.backgroundColor = primaryButtonColor;
    button5_50Percent.style.backgroundColor = primaryButtonColor;

    if (isNaN(billValueEntered) || isNaN(numberOfPeople) || numberOfPeople <= 0) {
        alert("Please enter valid inputs for bill and number of people.");
        button1_5Percent.style.backgroundColor = primaryButtonColor;
    button2_10Percent.style.backgroundColor = primaryButtonColor;
    button3_15Percent.style.backgroundColor = primaryButtonColor;
    button4_25Percent.style.backgroundColor = primaryButtonColor;
    button5_50Percent.style.backgroundColor = primaryButtonColor;
        return;
      }
})

// 50% Button Functionality 
button5_50Percent.addEventListener("click", function(){

    let billValueEntered = parseFloat(billInputField.value);
    let numberOfPeople = parseInt(numberOfPeopleInputField.value);

    
    let BillValuePerPerson = (billValueEntered/numberOfPeople);
    let tipAmountPercentPerPerson =  (BillValuePerPerson * (50/100)).toFixed(2) ;

    let totalBillValuePerson = (BillValuePerPerson + parseFloat(tipAmountPercentPerPerson)).toFixed(2);

    tipAmountNumberToEdit.innerText = tipAmountPercentPerPerson;

    totalPriceNumberToEdit.innerText = totalBillValuePerson;

    button5_50Percent.style.backgroundColor = secondaryButtonColor;
    button1_5Percent.style.backgroundColor = primaryButtonColor;
    button2_10Percent.style.backgroundColor = primaryButtonColor;
    button3_15Percent.style.backgroundColor = primaryButtonColor;
    button4_25Percent.style.backgroundColor = primaryButtonColor;

    if (isNaN(billValueEntered) || isNaN(numberOfPeople) || numberOfPeople <= 0) {
        alert("Please enter valid inputs for bill and number of people.");
        button1_5Percent.style.backgroundColor = primaryButtonColor;
    button2_10Percent.style.backgroundColor = primaryButtonColor;
    button3_15Percent.style.backgroundColor = primaryButtonColor;
    button4_25Percent.style.backgroundColor = primaryButtonColor;
    button5_50Percent.style.backgroundColor = primaryButtonColor;
        return;
      }
})

