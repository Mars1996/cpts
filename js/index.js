var url="http://dap.apiblueprint.org/"
function Login()
{
		var sign_in_username = document.getElementById("sign_in_username").value;
		var sign_in_password = document.getElementById("sign_in_password").value;
		
		if(sign_in_username== "")
		{
			alert ("Please Enter your username!");
		}
		else if (sign_in_password == "")
		{
			alert ("Please Enter your password!");
		}
		else
		{
			var request = new XMLHttpRequest();

			request.open('POST', url+'users/auth');

			request.setRequestHeader('Content-Type', 'application/json');

			request.onreadystatechange = function () {
			  if (this.readyState === 4) {
				console.log('Status:', this.status);
				console.log('Headers:', this.getAllResponseHeaders());
				console.log('Body:', this.responseText);
				if((this.status == 200 ) ) {
					//登陆成功
					var uid=this.responseText.uid;
					window.sessionStorage.setItem('uid', uid)
				}else {
					alert("Request was unsuccessful : " + this.status + " " + this.statusText);
				}
			  }
			};

			var body = {
			  'username': sign_in_username,
			  'password': sign_in_password
			};

			request.send(JSON.stringify(body));
		}
	
}


function Sign_up()
{
	
	var sign_up_username = document.getElementById("sign_up_username").value;
	var sign_up_password = document.getElementById("sign_up_password").value;
	var sign_up_email = document.getElementById("sign_up_email").value;
	
	if (sign_up_username == "")
	{
		alert ("Please Enter your username!");
	}
	else if (sign_up_email == "")
	{
		alert("Please Enter your email!");
	}
	else if (sign_up_password == "")
	{
		alert ("Please Enter your password!");
	}
	else
	{
		var request = new XMLHttpRequest();

		request.open('POST', url+'users');

		request.setRequestHeader('Content-Type', 'application/json');

		request.onreadystatechange = function () {
		  if (this.readyState === 4) {
			console.log('Status:', this.status);
			console.log('Headers:', this.getAllResponseHeaders());
			console.log('Body:', this.responseText);
			window.location.href="index.html"
			if((this.status == 200 ) ) {
					//创建成功
					window.navigate("index.html")
				}else {
					alert("Request was unsuccessful : " + this.status + " " + this.statusText);
				}
		  }
		};

		var body = {
		  'username': sign_up_username,
		  'password': sign_up_password,
		  'email': sign_up_email
		};

		request.send(JSON.stringify(body));
	}
}

function pages()
{
	var tempData = window.sessionStorage.getItem('uid');
	if (tempData) {
		
		console.log(tempData);
	}
	else{
		console.log("Not login");
	}
}
