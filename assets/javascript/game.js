  
//sets up random number user is trying to match
$(document).ready(function () {
    var Random = Math.floor(Math.random() * 121 + 19)
    $('#number').text(Random);
    


    //	setting up four random numbers array, total variable and printing the wins & losses variables	
    var GeneratedNumbers = []
    var total = 0;
    var wins = 0;
    var losses = 0;
    $('#numberWins').text(wins);
    $('#numberLosses').text(losses);

    //sets up random numbers for each TMNT
    function RandomNumbers() {
        for (var i = 0; i < 4; i++) {
            var num = Math.floor(Math.random() * 13 + 1);
            GeneratedNumbers.push(num);
        }
    }
    RandomNumbers();

    //resets the game
    function reset() {
        Random = Math.floor(Math.random()* 69 + 30);
        $('#number').text(Random);
        GeneratedNumbers = [];
        RandomNumbers();
        total = 0;
        $('#combined').text(total);
    }

    //adds the wins to the total
    function good() {
        alert("You won!");
        wins++;
        $('#numberWins').text(wins);
        reset();
    }

    //adds the losses to the total
    function bad() {
        alert("You lose!");
        losses++;
        $('#numberLosses').text(losses);
        reset();
    }

    //sets up click for TNMT
    $('#one').on('click', function () {
        total = total + GeneratedNumbers[0];
        $('#combined').text(total);

        //sets win/lose conditions
        if (total == Random) {
            good();
        }
        else if (total > Random) {
            bad();
        }
    })

    $('#two').on('click', function () {
        total = total + GeneratedNumbers[1];
        $('#combined').text(total);
        
        //sets win/lose conditions
        if (total == Random) {
            good();
        }
        else if (total > Random) {
            bad();
        }
    })

    $('#three').on('click', function () {
        total = total + GeneratedNumbers[2];
        $('#combined').text(total);

        //sets win/lose conditions
        if (total == Random) {
            good();
        }
        else if (total > Random) {
            bad();
        }
    })

    $('#four').on('click', function () {
        total = total + GeneratedNumbers[3];
        $('#combined').text(total);

        //sets win/lose conditions
        if (total == Random) {
            good();
        }
        else if (total > Random) {
            bad();
        }
    });

});