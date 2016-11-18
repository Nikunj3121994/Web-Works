var start = false, newClock = true;
var startTime= 25, breakTime = 5, pomodroChange=1, breakChange=1;
var totalPomodroTime, totalBreakTime;
var currentTimerType="pomodro";
var myVar = null;

function displayMinutes(minutes)
{
	$("#minutes").html(minutes);
}

function displaySeconds(secondsValue)
{
	$("#seconds").html(secondsValue);
}

function displayBreak(breakValue)
{
	$("#break-time").html(breakValue);
}

$(document).ready(function()
{
	
	// start button
	$("#control").on("click", function()
	{
		// if it's a new clock and first time play is pressed
		if(start === false && newClock)
		{
			start = true;
			$("#control").html('<i class="fa fa-pause fa-2x"> </i>');
			totalPomodroTime = startTime * 60;
			totalBreakTime = breakTime * 60;
			newClock = false;
			
			myVar = setInterval(countdown, 1000)
		}
		
		// if play is pressed after a pause continue from where you stopped
		else if( start == false && !newClock)
		{
			// if changes are made to time 
			totalPomodroTime+=(pomodroChange * 60);
			totalBreakTime+=(breakChange *60);
			
			myVar = setInterval(countdown, 1000);
			start = true;
			$("#control").html('<i class="fa fa-pause fa-2x"> </i>');
			pomodroChange =0;
		}
		
		// if pause is pressed
		else
		{
			start = false;
			$("#control").html('<i class="fa fa-play fa-2x"> </i>');
			clearInterval(myVar);
		}
	});
	
	// refresh button
	$("#reset").on("click", function()
	{
		startTime = 25;
		breakTime = 5;
		displayMinutes(startTime);
		displaySeconds("00");
		displayBreak(breakTime);
		
		newClock = true;
		start = false;
		$("#control").html('<i class="fa fa-play fa-2x"> </i>');
		
		clearInterval(myVar);
	});
	
	// time increase button
	$("#timer-increase").on("click", function()
	{
		if(start != true)
		{
			startTime++;
			pomodroChange+=1;;
			
			if(startTime<10)
			{
				startTime = "0" + startTime;
			}
			
			displayMinutes(startTime);
		}
	});
	
	// time decrease button
	$("#timer-decrease").on("click", function()
	{
		if(start != true)
		{
			startTime--;
			--pomodroChange;
			if(startTime<1)
			{
				startTime=1;
			}
			
			if(startTime<10)
			{
				startTime = "0" + startTime;
			}
			displayMinutes(startTime);
		}
	});
	
	// break increase button
	$("#break-increase").on("click", function()
	{
		if(start != true)
		{
			breakTime++;
			breakChange+=1;
			displayBreak(breakTime);
		}
	});
	
	// break decrease button
	$("#break-decrease").on("click", function()
	{
		if(start != true)
		{
			breakTime--;
			--breakChange;
			if(breakTime<1)
			{
				breakTime=1;
			}
			displayBreak(breakTime);
		}
	});
	
	// function to countdown
	function countdown()
	{
		if(totalPomodroTime >= 1)
		{
			totalPomodroTime--;
			var minutes, seconds;
			
			// calculate minutes and seconds
			minutes = Math.floor(totalPomodroTime/60);
			seconds = Math.floor(totalPomodroTime % 60);
			
			// enforce two digits display
			if(seconds < 10)
			{
				seconds = "0" + seconds;
			}
			
			if(minutes < 10)
			{
				minutes = "0" + minutes;
			}
			
			displayMinutes(minutes);
			displaySeconds(seconds);
		}
		
		else if (totalPomodroTime == 0 && totalBreakTime >= 1)
		{
			clearInterval(myVar);
			
			$("#minutes").css("color","red");
			$("#seconds").css("color","red");
			$("#separator").css("color","red");
			
			myVar = setInterval(countdown, 1000)
			
			totalBreakTime --;
			
			// calculate minutes and seconds
			minutes = Math.floor(totalBreakTime/60);
			seconds = Math.floor(totalBreakTime % 60);
			
			// enforce two digits display
			if(seconds < 10)
			{
				seconds = "0" + seconds;
			}
			
			if(minutes < 10)
			{
				minutes = "0" + minutes;
			}
			
			displayMinutes(minutes);
			displaySeconds(seconds);
		}
		
		else if(totalPomodroTime == 0 && totalBreakTime == 0)
		{
			clearInterval(myVar);
			
			totalPomodroTime = startTime * 60;
			totalBreakTime = breakTime * 60;
			
			$("#minutes").css("color","black");
			$("#seconds").css("color","black");
			$("#separator").css("color","black");
			
			myVar = setInterval(countdown, 1000)
		}
		
	}
});