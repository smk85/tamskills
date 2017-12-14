$(document).ready(function(){
    if(!$("#tasksmenu").hasClass("selectedmenu"))
		{
		$("#tasksmenu").hover(function(){		
			$("#tasksarrow").removeClass("hidden");
			}, function(){
			$("#tasksarrow").addClass("hidden");
			});
		}
		if(!$("#membersmenu").hasClass("selectedmenu"))
		{
			$("#membersmenu").hover(function(){			
			$("#membersarrow").removeClass("hidden");
			}, function(){
			$("#membersarrow").addClass("hidden");
			});
		}
		if(!$("#paysmenu").hasClass("selectedmenu"))
		{
			$("#paysmenu").hover(function(){	
			$("#paysarrow").removeClass("hidden");
			}, function(){
			$("#paysarrow").addClass("hidden");
			});
		}
		if(!$("#settingsmenu").hasClass("selectedmenu"))
		{
			$("#settingsmenu").hover(function(){		
			$("#settingsarrow").removeClass("hidden");
			}, function(){
			$("#settingsarrow").addClass("hidden");
			});
		}
	$("#closenav").click(function(){
		$("#vnav").css("width","1%");
		$("#vnav").css("visibility","hidden");
		$("#navoutput").css("width","99%");
		$("#navoutput").css("float","none");
		$(".imglogosearchdiv").css("visibility","visible");
	});
	$(".imglogosearchdiv").click(function(){
		$("#vnav").css("width","19.5%");
		$("#vnav").css("visibility","visible");
		$("#navoutput").css("width","80.5%");
		$("#navoutput").css("float","left");
		$(".imglogosearchdiv").css("visibility","hidden");
	});
	$( function() {
    $( "#sortable" ).sortable();
    $( "#sortable" ).disableSelection();
  } );
  
});
function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("Text", ev.target.id);
}

function drop(ev) {
    var data = ev.dataTransfer.getData("Text");
    ev.target.appendChild(document.getElementById(data));
    ev.preventDefault();
}