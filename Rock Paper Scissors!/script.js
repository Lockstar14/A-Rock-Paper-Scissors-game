const rps = (p1, p2) => {
return turns(p1,p2)
};

let paper = "Paper";
let scissors = "Scissors";
let rock = "Rock"

function turns(p1Choice,p2Choice){
    if(p1Choice === scissors && p2Choice === paper){
        return "Player 1 won!";
    }
    else if(p1Choice === scissors && p2Choice === rock){
       return "Player 2 won!";
    }
    else if(p1Choice === scissors && p2Choice === scissors){
         return "Draw!"
    }
    else if (p1Choice === paper && p2Choice === scissors){
        return "Player 2 won!";
    }
    else if(p1Choice === paper && p2Choice === rock){
        return "Player 2 won!";
    }
    else if(p1Choice === paper && p2Choice === paper){
        return "Draw!"
    }
    else if(p1Choice === rock && p2Choice === scissors){
        return "Player 1 won!";
    }
    else if(p1Choice === rock && p2Choice === paper){
        return "Player 2 won!";
    }
    else if(p1Choice === rock && p2Choice === rock){
        return "Draw!"
    }
}

console.log(p1Turn(rock,paper))