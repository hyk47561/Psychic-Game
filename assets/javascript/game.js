

        var randomLetter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];

        var wins = 0;
        var losses = 0;
        var numberGuesses = 9;
        var guessChoice = [];

        document.onkeyup = function (event) {

            var userGuess = event.key;

            var computerGuess = randomLetter[Math.floor(Math.random() * randomLetter.length)];

            var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];


            if (options.indexOf(userGuess) > -1) {

                if (userGuess === computerGuess) {
                    wins++;
                    numberGuesses = 9;
                    guessChoice = [];
                }

                if (userGuess != computerGuess) {
                    numberGuesses--;
                    guessChoice.push(userGuess);
                }

                if (numberGuesses === 0) {

                    numberGuesses = 9;
                    losses++;
                    guessChoice = [];


                }

                var html =
                    "<h1> The Psychic Game </h1>" +
                    "<p>Guess what letter I'm thinking of!</p>" +
                    "<p>Wins: " + wins + "</p>" +
                    "<p>Losses: " + losses + "</p>" +
                    "<p>Guesses Left: " + numberGuesses + "</p>" +
                    "<p>Your Guesses so far: " + guessChoice.join(", ") + "</p>";

                document.querySelector("#game").innerHTML = html;


            }
        };
       