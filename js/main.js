// Add event listener for the button click
document.getElementById("askButton").addEventListener("click", function() {

    // 1. Get the user's name (optional)
    let userName = document.getElementById("userName").value.trim();

    // 2. Ternary expression to greet the user
    userName ? console.log(`Hello, ${userName}!`) : console.log("Hello!");

    // 3. Get the user's question
    let userQuestion = document.getElementById("userQuestion").value.trim();
    
    // 4. If the question is empty, ask the user to provide one
    if (userQuestion === "") {
        alert("Please ask a question!");
        return;
    }

    // 5. Log the user's question
    console.log(`${userName ? userName : "User"} asked: ${userQuestion}`);

    // 6. Generate a random number between 0 and 7 (inclusive)
    let randomNumber = Math.floor(Math.random() * 8);

    // 7. Store the magic ball's response
    let eightBall = "";

    // 8. Use if/else statements to assign a response based on the random number
    if (randomNumber === 0) {
        eightBall = "It is certain";
    } else if (randomNumber === 1) {
        eightBall = "It is decidedly so";
    } else if (randomNumber === 2) {
        eightBall = "Reply hazy, try again";
    } else if (randomNumber === 3) {
        eightBall = "Cannot predict now";
    } else if (randomNumber === 4) {
        eightBall = "Do not count on it";
    } else if (randomNumber === 5) {
        eightBall = "My sources say no";
    } else if (randomNumber === 6) {
        eightBall = "Outlook not so good";
    } else if (randomNumber === 7) {
        eightBall = "Signs point to yes";
    }

    // 9. Display the Magic 8 Ball's response
    document.getElementById("magic-ball").innerText = eightBall;

    // 10. Log the result
    console.log(`Magic 8 Ball says: ${eightBall}`);
});
