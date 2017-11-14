var dataset={
	//load 12 dishes once a time
	"dishes":[
	{
		"dishId":1,
		"name":"Voluptate cillum fugiat.",
		"describe":"Lorem Ipsum passages, and more recently with desktop publishing software like Aldus including versions of Lorem Ipsum.",
		"average":4.5,
		"imageUrl":"images/img12.jpg"
	},
	{
		"dishId":2,
		"name":"Voluptate cillum fugiat.",
		"describe":"Lorem Ipsum passages, and more recently with desktop publishing software like Aldus including versions of Lorem Ipsum.",
		"average":4.5,
		"imageUrl":"images/img12.jpg"
	},
	{
		"dishId":3,
		"name":"Voluptate cillum fugiat.",
		"describe":"Lorem Ipsum passages, and more recently with desktop publishing software like Aldus including versions of Lorem Ipsum.",
		"average":4.5,
		"imageUrl":"images/img12.jpg"
	},
	{
		"dishId":4,
		"name":"Voluptate cillum fugiat.",
		"describe":"Lorem Ipsum passages, and more recently with desktop publishing software like Aldus including versions of Lorem Ipsum.",
		"average":4.5,
		"imageUrl":"images/img12.jpg"
	},
	{
		"dishId":5,
		"name":"Voluptate cillum fugiat.",
		"describe":"Lorem Ipsum passages, and more recently with desktop publishing software like Aldus including versions of Lorem Ipsum.",
		"imageUrl":"images/img12.jpg"
	},
	{
		"dishId":6,
		"name":"Voluptate cillum fugiat.",
		"describe":"Lorem Ipsum passages, and more recently with desktop publishing software like Aldus including versions of Lorem Ipsum.",
		"average":4.5,
		"imageUrl":"images/img12.jpg"
	},
	{
		"dishId":1,
		"name":"Voluptate cillum fugiat.",
		"describe":"Lorem Ipsum passages, and more recently with desktop publishing software like Aldus including versions of Lorem Ipsum.",
		"average":4.5,
		"imageUrl":"images/img12.jpg"
	},
	{
		"dishId":2,
		"name":"Voluptate cillum fugiat.",
		"describe":"Lorem Ipsum passages, and more recently with desktop publishing software like Aldus including versions of Lorem Ipsum.",
		"average":4.5,
		"imageUrl":"images/img12.jpg"
	},
	{
		"dishId":3,
		"name":"Voluptate cillum fugiat.",
		"describe":"Lorem Ipsum passages, and more recently with desktop publishing software like Aldus including versions of Lorem Ipsum.",
		"average":4.5,
		"imageUrl":"images/img12.jpg"
	},
	{
		"dishId":4,
		"name":"Voluptate cillum fugiat.",
		"describe":"Lorem Ipsum passages, and more recently with desktop publishing software like Aldus including versions of Lorem Ipsum.",
		"average":4.5,
		"imageUrl":"images/img12.jpg"
	},
	{
		"dishId":5,
		"name":"Voluptate cillum fugiat.",
		"describe":"Lorem Ipsum passages, and more recently with desktop publishing software like Aldus including versions of Lorem Ipsum.",
		"imageUrl":"images/img12.jpg"
	},
	{
		"dishId":6,
		"name":"Voluptate cillum fugiat.",
		"describe":"Lorem Ipsum passages, and more recently with desktop publishing software like Aldus including versions of Lorem Ipsum.",
		"average":4.5,
		"imageUrl":"images/img12.jpg"
	},
	
],
	"dishesNum":12,
	"clickId":0,
	
	}
var ifEmpty=0;
function addNewFood()
{
var div=document.getElementById("mainDish");
for(var i=0;i<dataset.dishesNum;i++)
{
	var newDiv=document.createElement('div');
	newDiv.setAttribute("class","col-md-4 menu-grids-info");
	var img=document.createElement('img');
	img.setAttribute("src",dataset.dishes[i].imageUrl);
	img.setAttribute("id",dataset.dishes[i].dishId);
	newDiv.innerHTML+="<a href='dishes.html'>";
	newDiv.appendChild(img);
	newDiv.innerHTML+="</a>";
	newDiv.innerHTML+="<h4><a href='dishes.html' onclick='herfclick("+dataset.dishes[i].dishId+")'>"+dataset.dishes[i].name+"</a></h4>";
	newDiv.innerHTML+="<p><a href='dishes.html' onclick='herfclick("+dataset.dishes[i].dishId+")'>"+dataset.dishes[i].describe+"</a></p>";
	newDiv.innerHTML+="<div class='menu-rate'><h5>average score "+dataset.dishes[i].average+"</h5></div>"
	div.appendChild(newDiv);
	
}

	
}
	
function herfclick(id)
{
	alert(id);
	clickId=id;
	//console.log(clickId);
}

function pages()
{
	
	addNewFood();
	
	
}

//文档高度
function getDocumentTop() {
    var scrollTop = 0, bodyScrollTop = 0, documentScrollTop = 0;
    if (document.body) {
        bodyScrollTop = document.body.scrollTop;
    }
    if (document.documentElement) {
        documentScrollTop = document.documentElement.scrollTop;
    }
    scrollTop = (bodyScrollTop - documentScrollTop > 0) ? bodyScrollTop : documentScrollTop;
    return scrollTop;
}

//可视窗口高度
function getWindowHeight() {
    var windowHeight = 0;
    if (document.compatMode == "CSS1Compat") {
        windowHeight = document.documentElement.clientHeight;
    } else {
        windowHeight = document.body.clientHeight;
    }
    return windowHeight;
}

//滚动条滚动高度
function getScrollHeight() {
    var scrollHeight = 0, bodyScrollHeight = 0, documentScrollHeight = 0;
    if (document.body) {
        bodyScrollHeight = document.body.scrollHeight;
    }
    if (document.documentElement) {
        documentScrollHeight = document.documentElement.scrollHeight;
    }
    scrollHeight = (bodyScrollHeight - documentScrollHeight > 0) ? bodyScrollHeight : documentScrollHeight;
    return scrollHeight;
}
function reLoadData()
{
	//tell the server to reload dataset to add 6 more dishes
	dataset.dishesNum=12;//input the length of dishes
	
}
var a=10; 
window.onscroll = function () {
    //监听事件内容
	
    if( (1+0.1*a)*getDocumentTop() > getWindowHeight() + getScrollHeight()){
		if(a>2)
		a-=2;
		if(ifEmpty==0)
		{reLoadData();
    	addNewFood();
		}
		
        //ajax_function()
    }
}