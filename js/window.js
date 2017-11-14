// JavaScript Document

var dataset =
{
	"window_data" : 
	[
	
		{
			"window_name" : "test_window_name" ,
			"window_id" : "window_4",
			"window_image" : "images/7.jpg",
			"window_description" : "new description and the forth window "
		},
		{
			"window_name" : "test_window_name2" ,
			"window_id" : "window_5",
			"window_image" : "images/7.jpg",
			"window_description" : "new description and the fifth window "
		}
	],
	"window_count" : 1,
	
	
}

function loadWindow(win_id)
{
	
	var wod = document.getElementById('window_outern_div');
	
	
	var wn = document.createElement("h4");
	var alink = document.createElement("a");
	var name_node = document.createTextNode(dataset.window_data[win_id].window_name);///dataset used
	alink.appendChild(name_node);
	alink.setAttribute("href","menu.html");
	alink.setAttribute("onClick","send_window_id(this.name)");
	alink.setAttribute("name",dataset.window_data[win_id].window_id);///dataset used
	wn.appendChild(alink);
	var des_p = document.createElement("p");
	var des_node = document.createTextNode(dataset.window_data[win_id].window_description);///dataset used
	des_p.appendChild(des_node);
	var right_div = document.createElement("div");
	right_div.setAttribute("class"," col-md-6 services-overview-gd ");
	right_div.appendChild(wn);
	right_div.appendChild(des_p);
	//right div created
	
	var img = document.createElement("img");
	img.setAttribute("src",dataset.window_data[win_id].window_image);///dataset used
	img.setAttribute("alt"," ");
	img.setAttribute("class","img-responsive");
	var alink2 = document.createElement("a");
	alink2.setAttribute("href",dataset.window_data[win_id].window_image);///dataset used
	alink2.setAttribute("class","b-link-stripe b-animate-go1   swipebox");
	alink2.setAttribute("title","");
	alink2.appendChild(img);
	var left_div = document.createElement("div");
	left_div.setAttribute("class","col-md-6");
	left_div.appendChild(alink2);
	//left div created
	
	var first_outern_div = document.createElement("div");
	first_outern_div.setAttribute("class","services-overview-grd");
	first_outern_div.appendChild(left_div);
	first_outern_div.appendChild(right_div);
	
	var second_outern_div = document.createElement("div");
	second_outern_div.setAttribute("class","col-md-12 services-overview-grid");
	second_outern_div.appendChild(first_outern_div);
	
	wod.appendChild(second_outern_div);
}

function receive()
{	
	//todo: get table of windows data 
	//		and 
	//		get count of windows
	/*
		dataset.window_data[].[window_name | window_id | window_image | window_description]
		dataset.window_count
	*/
	
	
	for(var i = 0;i < dataset.window_count;i++)
	{
		loadWindow(i);
	}
}

function send_window_id(window_id)
{
	//todo： send window_id to server
	/*	--test area--
		alert(window_id);
	//*/
}