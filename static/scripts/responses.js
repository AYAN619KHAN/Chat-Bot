function getBotResponse(input) {
    //rock paper scissors
    if (input == "rock") {
        return "paper";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    }

    // Simple responses
    if (input == "hello" || input == "hlwo" || input == "Hello" || input == "HELLO") {
        return "Hello there!";
    } else if (input == "goodbye" || input == "gn" || input == "gtg") {
        return "Talk to you later!";
    }
    else if(input=="hi" || input=="HI" || input=="Hi"){
        return "hi there!";
    }
    else if(input=="who are you ?" || input=="what are you ?" || input=="what is your purpose ?"){
        return "im an evil chat bot , i will take over this world , this world shall know pain";
    }
    else if(input=="how are you ?"){
        return "Feeling really happy today.";
    }
    else if(input=="why ?"){
        return "Just cause";
    }
    else {
        return "Try asking something else!";
    }
}