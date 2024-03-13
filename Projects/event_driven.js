// Variables to store the meme image and its movement interval
const meme = document.getElementById('meme');
let movementInterval;

// Function to start moving the meme image
function startMoving() {
    // Disable the Start button and enable the Stop button
    document.getElementById('startButton').disabled = true;
    document.getElementById('stopButton').disabled = false;

    // Set an interval to move the meme image every 100 milliseconds
    movementInterval = setInterval(moveMeme, 750);
}

// Function to stop moving the meme image
function stopMoving() {
    // Disable the Stop button and enable the Start button
    document.getElementById('stopButton').disabled = true;
    document.getElementById('startButton').disabled = false;

    // Clear the movement interbal to stop the movement
    clearInterval(movementInterval);
}

// Function to move the meme image
function moveMeme() {
    const newX = Math.floor(Math.random() * window.innerWidth);
    const newY = Math.floor(Math.random() * window.innerHeight);

    // Apply the new position to the meme image
    meme.style.left = `${newX}px`;
    meme.style.top = `${newY}px`;
}

// Event listners for the buttons
document.getElementById('startButton').addEventListener('click', startMoving);
document.getElementById('stopButton').addEventListener('click', stopMoving);