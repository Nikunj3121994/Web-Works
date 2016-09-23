$(document).ready(function()
	{
		$("#query").attr("placeholder","Enter Query");
		
		// if search button is clicked
		$("#search-button").on("click", searchClicked);
		
		//if random button is clicked
		$("#random-button").on("click", randomClicked);
		
	}
);

//function that retrieves JSON and displays result


function searchClicked()
{	
	var query;
	query= $("#query").val();
	
	if(query.length>0)
	{
		var apiLink ="https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=info|extracts&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=";
		apiLink = apiLink + query + "&callback=?";
		
		$.getJSON(apiLink,function(json)
			{
				// shift the search bar up from the middle position
				$("#title-area").removeClass("initial-state");
				$("#title-area").addClass("result-state");
				
				var pages= json.query.pages;
				
				var title, pageId, information,html="", pageLink="https://en.wikipedia.org/?curid=", wikiLink;
		
				$.each(pages,function(key,value)
					{
						wikiLink=""
						
						//get all the variables needed
						title= value.title;
						pageId= value.pageid;
						information= value.extract;
						wikiLink = pageLink + pageId;
						
						html+= '<a href='+wikiLink+' target="_blank"><div class="row results text-left"> <h3>' + title + '</h3> <p class="text-justify">'+information+'</p> </div> </a>';
						
						//window.alert(wikiLink);
					}
				);
				
				// insert all combined html elements to page
				$("#result-area").html(html);
			}
		);
	}
	
	else
	{
		$("#query").attr("placeholder","FILL THIS FIELD");
	}
}

// open a random wikipedia entry
function randomClicked()
{
	window.open("https://en.wikipedia.org/wiki/Special:Random")
}


