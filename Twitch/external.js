$(document).ready(function()
	{
		var apiLink, streamers, fullLink, length;
		apiLink= "https://api.twitch.tv/kraken/streams/";
		streamers=["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas","brunofin"];
		length = streamers.length;
		var html="";
		//loop to run for each streamer
		for(var i=0;i< length;i++)
		{
			html+="";
			//get full link based on current streamer
			link = apiLink+streamers[i]+"?callback=?";
			
			//call the api and pass output to funtion
			$.getJSON(link,function(jsonObject)
				{
					// get channel name
					var channelName, gamePlayed, channelLink;
					
					if(jsonObject.stream === undefined)
					{
						var message;
						message = jsonObject.message;
						//create html elements
						html+='<div class="row data-container undefined"> <h3>';
						html+='<i class="fa fa-bell-slash-o fa-1x status-icon unavailable"></i>'+ message +'</h3></div>';
					}
					
					
					else
					{
						channelName=jsonObject._links.self;
						channelName= channelName.substring(37);
						
						//check if stream is offline
						if(jsonObject.stream===null)
						{
							//create html elements
							html+='<div class="row data-container offline"> <h3>';
							html+='<i class="fa fa-bell-slash-o fa-1x status-icon offline"></i>'+ channelName +'</h3></div>';
						}
						
						
						
						//if stream is online
						else
						{
							// get the name of the game being played
							gamePlayed= jsonObject.stream.game;
							channelLink="https://www.twitch.tv/"+channelName;
							
							//create html elements
							html+='<div class="row data-container online"> <h3>';
							html+='<i class="fa fa-bell-o fa-1x status-icon online"></i> <a href="'+channelLink+'"target="_blank">'+ channelName + '</a><i class="game-title">'+gamePlayed+'</i></h3></div>';
						}
					}
					
					$("#data-area").html(html);
				}
			);
		}
	}
);
