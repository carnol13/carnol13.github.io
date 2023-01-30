var firstName = document.getElementById("fname");
var lastName = document.getElementById("lname");
var email = document.getElementById("eaddress");
var year = document.getElementById("year");
var checkOutDate = document.getElementById("checkoutdate");
var returnDate = document.getElementById("returndate");
var checkOutTime = document.getElementById("checkOutTime");
var returnTime = document.getElementById("Return Time");
var equipment1 = document.getElementById("equipment1");
var equipment2 = document.getElementById("equi  pment2");
var equipment3 = document.getElementById("equipment3");
var equipment4 = document.getElementById("equipment4");
var equipment5 = document.getElementById("equipment5");
var equipment6 = document.getElementById("equipment6");
var equipment7 = document.getElementById("equipment7");
var equipment8 = document.getElementById("equipment8");

var form = document.getElementById("CheckOutForm");

function afterSubmit(e){
    e.preventDefault();

    var info = {
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
        year: year.value,
        checkOutDate: checkOutDate.value,
        returnDate: returnDate.value,
        checkOutTime: checkOutTime.value,
        returnTime: returnDate.value,
        equipment1: equipment1.value,
        equipment2: equipment2.value,
        equipment3: equipment3.value,
        equipment4: equipment4.value,
        equipment5: equipment5.value,
        equipment6: equipment6.value,
        equipment7: equipment7.value,
        equipment8: equipment8.value,

    };

    
fetch("https://api.apispreadsheets.com/data/ZlYiYwSMLhwY1gmw/", {
	method: "POST",
	body: JSON.stringify(info),
}).then(res =>{
	if (res.status === 201){
		// SUCCESS
	}
	else{
		// ERROR
	}
})



}

form.addEventListener("submit", afterSubmit);
