document.addEventListener('DOMContentLoaded', function () {
    const getJoke = () => {
        fetch('https://api.arwenbot.xyz/jokes')
            .then(response => response.json())
            .then(data => {
                const text = data.data.joke;
                const textContainer = document.getElementById('jokes');
                textContainer.innerHTML = text;
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }
    getJoke();
    const jokeButton = document.getElementById('jokeButton');

    jokeButton.addEventListener('click', function () {
        getJoke();
    })
})
