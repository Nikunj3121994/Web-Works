function print(val) // print out as user is entering a value
{
	if(val.length <=9)
		$("#calculation").html(val);
	
	else
		$("#calculation").html("LNG")
}

function printResult(val) // print out espressions below
{
	$("#result").html(val);
}

function calculate(expression) // called when the equals operator is pressed
{
	var splitExpression = expression.split(" "); // split expression by space
	
	var length = expression.length, iter=0;
	
	var answer=0;
	
	
	while(iter < length) // run trhough array of items
	{
		if(isNaN(splitExpression[iter]))
		{
			if( splitExpression[iter] === '+')
			{
				answer+=Number(splitExpression[iter+1]);
			}
			
			else if ( splitExpression[iter] === '-')
			{
				answer-=Number(splitExpression[iter+1]);
			}
			
			else if ( splitExpression[iter] === '*')
			{
				answer*=Number(splitExpression[iter+1]);
			}
			
			else if ( splitExpression[iter] === '/')
			{
				answer/=Number(splitExpression[iter+1]);
			}
			iter++;
		}
		
		else
		{
			answer+=Number(splitExpression[iter]);
		}
		
		iter++;
	}
	
	return answer;
}

$(document).ready(function()
{
	var calculation="", result="", answer=0, lastEntered= false;
	
	// buttons .on click
	// button 1
	$("#1").on("click", function()
		{
			calculation += "1";
			result += "1";
			print(calculation);
			printResult(result);
			
			lastEntered= false;
		}
	);
	
	// button 2
	$("#2").on("click", function()
		{
			calculation += "2";
			result += "2";
			print(calculation);
			printResult(result);
			
			lastEntered= false;
		}
	);
	
	// button 3
	$("#3").on("click", function()
		{
			calculation += "3";
			result += "3";
			print(calculation);
			printResult(result);
			
			lastEntered= false;
		}
	);
	
	// button 4
	$("#4").on("click", function()
		{
			calculation += "4";
			result += "4";
			print(calculation);
			printResult(result);
			
			lastEntered= false;
		}
	);
	
	// button 5
	$("#5").on("click", function()
		{
			calculation += "5";
			result += "5";
			print(calculation);
			printResult(result);
			
			lastEntered= false;
		}
	);
	
	// button 6
	$("#6").on("click", function()
		{
			calculation += "6";
			result += "6";
			print(calculation);
			printResult(result);
			
			lastEntered= false;
		}
	);
	
	// button 7
	$("#7").on("click", function()
		{
			calculation += "7";
			result += "7";
			print(calculation);
			printResult(result);
			
			lastEntered= false;
		}
	);
	
	// button 8
	$("#8").on("click", function()
		{
			calculation += "8";
			result += "8";
			print(calculation);
			printResult(result);
			
			lastEntered= false;
		}
	);
	
	// button 9
	$("#9").on("click", function()
		{
			calculation += "9";
			result += "9";
			print(calculation);
			printResult(result);
			
			lastEntered= false;
		}
	);
	
	// button 0
	$("#0").on("click", function()
		{
			calculation += "0";
			result += "0";
			print(calculation);
			printResult(result);
			
			lastEntered= false;
		}
	);
	
	// button .
	$("#dot").on("click", function()
		{
			if(!lastEntered)
			{
				calculation += ".";
				result += ".";
				print(calculation);
				printResult(result);
				lastEntered = true;
			}
		}
	);
	
	
	// operator buttons
	// button +
	$("#plus").on("click", function()
		{
			if(!lastEntered)
			{
				calculation = "+";
				result += " + "
				
				print(calculation);
				printResult(result);
				calculation= "";
				
				lastEntered = true;
			}
		}
	);
	
	// button -
	$("#minus").on("click", function()
		{
			if(!lastEntered)
			{
				calculation = "-";
				result += " - "
				
				print(calculation);
				printResult(result);
				calculation= "";
				lastEntered = true;
			}
		}
	);
	
	
	// button *
	$("#multiply").on("click", function()
		{
			if(!lastEntered)
			{
				calculation = "*";
				result += " * "
				
				print(calculation);
				printResult(result);
				calculation= "";
				lastEntered = true;
			}
		}
	);
	
	// button /
	$("#divide").on("click", function()
		{
			if(!lastEntered)
			{
				calculation = "/";
				result += " / "
				
				print(calculation);
				printResult(result);
				calculation= "";
				lastEntered = true;
			}
		}
	);
	
	// button =
	$("#equals").on("click", function()
		{
			var answer = calculate(result);
			result = answer;
			
			printResult(result);
		}
	);
	
	// button CE
	$("#clear").on("click", function()
		{
			calculation="";
			result="";
			$("#calculation").html("0");
			$("#result").html("");
		}
	);
});