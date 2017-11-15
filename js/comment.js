

var dataset =
{
	"remarks" :
	[
		{
			"rid" 		:	1,
			"remarker"  :	"user 1",
			"score"		:	4.5,
			"content"	:	
			{
				"text"  	: 	"i like so.",	
				"imgurl"	:	"images/img12.jpg"		
			}
		}
	]
}
/*
	<div class="col-md-12 services-overview-grid">
		<div class="services-overview-grd">
			<div class=" col-md-12 services-overview-gd ">
				<h4>User 1:</h4>
				<p>Neque porro quisquam est, qui dolorem ipsum quia dolor 
					sit amet, consectetur, adipisci velit, sed quia non numquam 
					eius modi tempora incidunt ut labore et dolore magnam aliquam 
					quaerat voluptatem.</p>
			</div>
			<div class="col-md-12 services-overview-gd">
			<a href="images/7.jpg" class="b-link-stripe b-animate-go1   swipebox"  title="">
				<img src="images/7.jpg" alt=" " class="img-responsive " style="width:200px; height:165px" />
			</a>
			</div>
		</div>
	</div>
*/

function loadComments(com_id)
{
	var cod = document.getElementById('comment_outern_div');
	
	
	var user_name = document.createElement("h4");
	var node_remarker = document.createTextNode(dataset.remarks[com_id].remarker);///dataset used
	user_name.appendChild(node_remarker);
	
	var des_p = document.createElement("p");
	var des_p1 = document.createElement("p");
	var des_node = document.createTextNode("Score: "+dataset.remarks[com_id].score);///dataset used
	var des_node1 = document.createTextNode("Comment: "+dataset.remarks[com_id].content.text);///dataset used
	des_p.appendChild(des_node);
	des_p1.appendChild(des_node1);
	var above_div = document.createElement("div");
	above_div.setAttribute("class"," col-md-12 services-overview-gd ");
	above_div.appendChild(user_name);
	above_div.appendChild(des_p);
	above_div.appendChild(des_p1);
	//above div created
	
	var img = document.createElement("img");
	img.setAttribute("src",dataset.remarks[com_id].content.imgurl);///dataset used
	img.setAttribute("alt"," ");
	img.setAttribute("class","img-responsive");
	img.setAttribute("style","width:200px; height:165px");
	var alink2 = document.createElement("a");
	alink2.setAttribute("href",dataset.remarks[com_id].content.imgurl);///dataset used
	alink2.setAttribute("class","b-link-stripe b-animate-go1   swipebox");
	alink2.setAttribute("title","");
	alink2.appendChild(img);
	var below_div = document.createElement("div");
	below_div.setAttribute("class","col-md-12 services-overview-gd");
	below_div.appendChild(alink2);
	//below div created
	
	var first_outern_div = document.createElement("div");
	first_outern_div.setAttribute("class","services-overview-grd");
	first_outern_div.appendChild(above_div);
	first_outern_div.appendChild(below_div);
	
	var second_outern_div = document.createElement("div");
	second_outern_div.setAttribute("class","col-md-12 services-overview-grid");
	second_outern_div.appendChild(first_outern_div);
	
	cod.appendChild(second_outern_div);
}
function getParams(key) 
{
	var reg = new RegExp("(^|&)" + key + "=([^&]*)(&|$)");
	var r = window.location.search.substr(1).match(reg);
	if (r != null) {
		return unescape(r[2]);
	}
	return null;
};
function receive_comments()
{
	var dish_id = getParams("DID");
	//alert(dish_id);
	//todo: get remarks of dish No.dish_id
	/*
	data:
		dataset.remarks[].[rid | remarker | score | content | image]
	*/
	
	
	
	for(var i = 0;i < dataset.remarks.length; i++)
	{
			loadComments(i);
	}
	jQuery(function($) 
	{
		$(".swipebox").swipebox();
	});
}


//文档高度
var ifEmpty = 0;
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
	//input the length of dishes
	
}
var a=25; 
window.onscroll = function () {
    //监听事件内容
	
    if( (1.15+a*0.1)*getDocumentTop() > getWindowHeight()+getScrollHeight()){
		if(a>1)
			a-=1;
		if(ifEmpty==0)
		{
			reLoadData();
			for(var i = 0;i < 1;i++)
			{
				loadComments(i);
			}
		}
        //ajax_function()
    }
}
