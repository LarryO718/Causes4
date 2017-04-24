// submit form with HTML <form> tag function.


function submit_by_tag() {
			  name = document.getElementById("fname").value;
			  email = document.getElementById("lname").value;
			  bday = document.getElementById("bday").value;
			  email = document.getElementById("email").value;
			  gender = document.getElementById("gender").value;
			  	{
			   var x = document.getElementsByTagName("form");
			   x[0].submit_by_tag();
			   	alert ("First Name \n " + fname + "Last Name \n " + lname + "Birthday \n " + bday + "Email " + email + "Gender" + gender + ");
			}
}