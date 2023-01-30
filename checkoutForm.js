var firstName = document.getElementById("fname");
var lastName = document.getElementById("lname");
var email = document.getElementById("eaddress");
var year = document.getElementById("year");
var checkOutDate = document.getElementById("checkoutdate");
var returnDate = document.getElementById("returndate");
var checkOutTime = document.getElementById("checkOutTime");
var returnTime = document.getElementById("Return Time");
var equipment = document.getElementById("equipment");
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
        equipment: equipment.value
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