// JavaScript Document
function checksubmit()
{
	var name=F1.txtname.value;
	var user=F1.txtuser.value;
	var pass=F1.txtpass.value;
	var adr=F1.txtaddress.value;
	var phone=F1.txtphone.value;
	
	if(name=="" || user=="" || pass=="" || adr=="" || phone=="")
		{
			alert("You need fill all text box with *");
			F1.txtname.focust();
		}
	else
		{
			alert("sign up success");
			location="Login.html";
		}
}

function checklogin()
{
	var Luser=FL.txtuser.value;
	var Lpass=FL.txtpass.value;
	if(Luser=="FPT" || Lpass=="Greenwich")
		{
			alert("Login successful");
			location="Userindex.html";
		}
	else if(Luser=="Admin" || Lpass=="123456")
		{
			alert("Login successful");
			location="Admin/Admin.html";
		}
	else
		{
			alert("Wrong username and password");
			FL.txtuser.focus();
		}
}
function cksearch()
{
	var S=S1.txtsearch.value;
	if(S=="laptop" || S=="Laptop")
		{
			location="Laptop.html";
		}
	else if(S=="PC" || S=="pc")
		{
			location="PC.html";
		}
	else if(S=="Mouse" || S=="mouse")
		{
			location="Accessories.html";
		}
	else if(S=="Keyboard" || S=="keyboard")
		{
			location="Accessories.html";
		}
	else if(S=="Headphone" || S=="headphone")
		{
			location="Accessories.html";
		}
	else if(S=="Imac" || S=="imac")
		{
			location="Product/Product2.html";
		}
	else if(S=="dell desktop" || S=="desktop dell")
		{
			location="Product/Product.html";
		}
	else if(S=="hp desktop" || S=="desktop hp")
		{
			location="Product/Product3.html";
		}
	else if(S=="laptop dell" || S=="dell laptop")
		{
			location="Product/Product4.html";
		}
	else if(S=="laptop lenovo" || S=="lenovo laptop")
		{
			location="Product/Product5.html";
		}
	else if(S=="Macbook" || S=="macbook")
		{
			location="Product/Product6.html";
		}
	else
		{
			alert("No results");
			S1.txtsearch.focus();
		}
}

function checkfb()
{
	location="Feedback.html"
}

function addcart()
{
	alert("Added to cart successful");
}
				