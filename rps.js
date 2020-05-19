let userScore=0;
let computerScore=0;

const userScore_span=document.getElementById("user-score");
const computerScore_span=document.getElementById("computer-score");
console.log(userScore_span);
console.log(computerScore_span);

const scoreBoard_div=document.querySelector(".score-board");
const result_p=document.querySelector(".result > p");

 
const rock_div=document.getElementById('r');
const paper_div=document.getElementById('p');
const scissor_div=document.getElementById('s');

function getComputerChoice(){
	const choices=['r','p','s'];
	const randomNumber=Math.floor(Math.random()*3);
	return choices[randomNumber];
} 
function convertToWord(letter) {
	if(letter ==="r")return"Rock";
	if(letter ==="p")return"paper";
	return "scissor";

}


function win(userChoice,computerChoice){
	userScore++;
	userScore_span.innerHTML=userScore;
	computerScore_span.innerHTML =computerScore;
	const smallUserWord="user".fontsize(3).sup();
	const smallcompWord="comp".fontsize(3).sup();
	

    result_p.innerHTML=`${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(computerChoice)}${smallcompWord}.You wins!!"`;
    
     }
function lose(userChoice,computerChoice){
	computerScore++;
	userScore_span.innerHTML=userScore;
	computerScore_span.innerHTML =computerScore;
    const smallUserWord="user".fontsize(3).sup();
	const smallcompWord="comp".fontsize(3).sup();
	

    result_p.innerHTML=`${convertToWord(userChoice)}${smallUserWord} loses to ${convertToWord(computerChoice)}${smallcompWord}.You lost..!!
    !!"`;	

}          
function draw(userChoice,computerChoice){

	const smallUserWord="user".fontsize(3).sup();
	const smallcompWord="comp".fontsize(3).sup();
	

    result_p.innerHTML=`${convertToWord(userChoice)}${smallUserWord} equals ${convertToWord(computerChoice)}${smallcompWord}.it's draw!!"`;
}            

function game(userChoice){
	const computerChoice=getComputerChoice();
	switch(userChoice + computerChoice){
	 case"rs":	 
	 case"pr":
	 case"sp":
	 win(userChoice,computerChoice);
	  break;

	 case"rp":
	 case"ps":
	 case"sr":
	 lose(userChoice,computerChoice);
      break;

      case"pp":
      case"rr":
      case"ss":
     draw(userChoice,computerChoice );
     break; 
	}
  
  }

 function main(){
  rock_div.addEventListener('click',function(){
	game("r");
  })

  paper_div.addEventListener('click',function(){
	game("p");
  })

  scissor_div.addEventListener('click',function(){
	game("s");
   })

 }  
 main(); 
