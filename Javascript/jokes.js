document.addEventListener('DOMContentLoaded', function () {     // Wait for the DOM to load
    const getJoke = () => {    // Function to get a joke
        fetch('https://api.arwenbot.xyz/jokes')  // Fetch a joke from the API
            .then(response => response.json())  // Convert the response to JSON
            .then(data => {
                const text = data.data.joke;    // Get the joke text
                const textContainer = document.getElementById('jokes'); // Get the element with the ID "jokes"
                textContainer.innerHTML = text; // Set the text of the element to the joke text
            })
            .catch(error => {
                console.error('Error:', error); // Log the error
            });
    }
    getJoke();  // Call the function to get a joke
    const jokeButton = document.getElementById('jokeButton');   // Get the element with the ID "jokeButton"

    jokeButton.addEventListener('click', function () {
        getJoke();  // Call the function to get a joke
    })
})
