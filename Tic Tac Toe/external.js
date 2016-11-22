var userToken="";
var wins=0,losses=0,draws=0;

$(document).ready(function()
{
	// if x button is clicked
	$("#tokenX").on("click", function()
	{
		userToken="X";
		selectionDisplay();
		setGameArea();
	});
	
	// if o button is clicked
	$("#tokenO").on("click", function()
	{
		userToken="O";
		selectionDisplay();
		setGameArea();
	});
});

function selectionDisplay()
{
	if(userToken==='O')
	{
		$("#tokenX").fadeOut(200,areaOut());
	}
	
	else
	{
		$("#tokenO").fadeOut(200,areaOut());
	}
	
	
	function areaOut()
	{
		$("#tokenSelection").fadeOut(2000, function() // fade out selection area
		{
			$("#tokenSelection").css("display","none"); // set it not to take any screen space
			
			$("#play-area").fadeIn(1000,function() // bring up actual game area
			{
				$("#play-area").css("display","inline-block");
			});
		});
	}
}

function updateStats()
{
	var  html ='<p class="text-center">' + wins + '-' + losses+'-'+draws +'</p>';
	$("#stats-area").html(html);
}

function setGameArea()
{
	updateStats();
}