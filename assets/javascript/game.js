$(document).ready(function(){

// variables

var wins = 0;
var losses = 0;
var totalScore = 0;

$('#wins').text(wins);
$('#losses').text(losses);
$('#score').text(totalScore);

// random number selected at start
var randomNumber = Math.floor(Math.random() * 102) + 19;
console.log(randomNumber);


$('#number-to-guess').text(randomNumber);


//assign random numbers to each photo when clicked

var photo1 = Math.floor(Math.random() * 12) + 1;
console.log(photo1);
var photo2 = Math.floor(Math.random() * 12) + 1;
console.log(photo2);
var photo3 = Math.floor(Math.random() * 12) + 1;
console.log(photo3);
var photo4 = Math.floor(Math.random() * 12) + 1;
console.log(photo4);

//reset the game
function reset() {
    randomNumber = Math.floor(Math.random() * 102) + 19;
    $('#number-to-guess').text(randomNumber);
    photo1 = Math.floor(Math.random() * 12) + 1;
    console.log(photo1);
    photo2 = Math.floor(Math.random() * 12) + 1;
    console.log(photo2);
    photo3 = Math.floor(Math.random() * 12) + 1;
    console.log(photo3);
    photo4 = Math.floor(Math.random() * 12) + 1;
    console.log(photo4);
    totalScore = 0;
    $('#score').text(totalScore);

}

// set wins & losses
function winner(){
    wins++;
    $('#wins').text(wins);
    reset();
}

function loser(){
    losses++;
    $('#losses').text(losses);
    reset();
}

//click function for each image. add amount when image is clicked to total score

$('#image1').click(function(){
    console.log(photo1);
    totalScore = totalScore + photo1;
    $('#score').text(totalScore);

    if (totalScore === randomNumber){
        winner();
    }
    
    else if (totalScore > randomNumber){
        loser();
    }
});

$('#image2').click(function(){
    console.log(photo2)
    totalScore = totalScore + photo2;
    $('#score').text(totalScore);

    if (totalScore === randomNumber){
        winner();
    }
    
    else if (totalScore > randomNumber){
        loser();
    }
});

$('#image3').click(function(){
    console.log(photo3)
    totalScore = totalScore + photo3;
    $('#score').text(totalScore);

    if (totalScore === randomNumber){
        winner();
    }
    
    else if (totalScore > randomNumber){
        loser();
    }
});

$('#image4').click(function(){
    console.log(photo4)
    totalScore = totalScore + photo4;
    $('#score').text(totalScore);

    if (totalScore === randomNumber){
        winner();
    }
    
    else if (totalScore > randomNumber){
        loser();

    }
});

})