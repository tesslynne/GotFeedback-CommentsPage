
document.getElementById("theBtn").addEventListener("click", submitForm)

function submitForm() {

	var user = document.getElementById("userName").value //initial user input
	var feedback = document.getElementById("feedbackHere").value //user feedback in form
	var timeStamp = new Date().toDateString()
	var userName = document.createTextNode("on " + timeStamp + "  " + user + " says...")
	var comment = document.createTextNode(feedback)

	var userContent = document.createElement("h4")
	userContent.appendChild(userName)

	var commentBody = document.createElement("p")
	commentBody.appendChild(comment)


	var divWrapper = document.createElement("div") // for wrapping h4 and p in one div

	var listUsers = document.createElement("li")
	
	listUsers.className = "userlist"
	divWrapper.className= "well well-lg"


	divWrapper.appendChild(userContent) //appending h4 and p to div to serve as wrapper
	divWrapper.appendChild(commentBody) 
	listUsers.appendChild(divWrapper) //append to li
	document.getElementById("listAll").appendChild(listUsers)	



}



