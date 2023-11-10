function showQuote() {
    const quotes = [
        "I am going to be the Pirate King!",
        "It's not the face that makes someone a monster; it's the choices they make with their lives.",
        "I don't want to conquer anything. I just think the guy with the most freedom in this whole ocean... is the Pirate King!",
        // Add more One Piece quotes as needed
    ];

    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];

    document.getElementById("quote").innerText = randomQuote;
}
