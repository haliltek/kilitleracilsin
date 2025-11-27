// Variables
var startTime;
var timerInterval;
var currentUserNickname = "";
var leaderboard = JSON.parse(localStorage.getItem('crackTheCodeLeaderboard')) || [];

// Initialize
window.onload = function () {
    generateNew();
    updateLeaderboardDisplay();
    // Ensure modal is visible on load
    document.getElementById('nicknameModal').style.display = 'flex';
}

function startGame() {
    var input = document.getElementById('nicknameInput');
    var nickname = input.value.trim();

    if (nickname === "") {
        alert("Lütfen bir kullanıcı adı giriniz!");
        return;
    }

    currentUserNickname = nickname;
    document.getElementById('nicknameModal').style.display = 'none';

    // Start Timer
    startTimer();
}

function restartGame() {
    generateNew();
    // Reset UI
    document.getElementById("lockAnimation").style.backgroundPosition = "0px 0px";
    document.getElementById("continueButton").disabled = true;
    document.getElementById("continueButton").style.opacity = 0.0;
    document.getElementById("headerLabel").innerHTML = "Kilitler Açılsın Lütfen...";

    // Start Timer again
    startTimer();
}

function startTimer() {
    startTime = Date.now();
    timerInterval = setInterval(updateTimer, 10);
}

function updateTimer() {
    var elapsedTime = Date.now() - startTime;
    var minutes = Math.floor(elapsedTime / 60000);
    var seconds = Math.floor((elapsedTime % 60000) / 1000);
    var milliseconds = Math.floor((elapsedTime % 1000) / 10);

    document.getElementById('timerDisplay').innerText =
        (minutes < 10 ? "0" + minutes : minutes) + ":" +
        (seconds < 10 ? "0" + seconds : seconds) + ":" +
        (milliseconds < 10 ? "0" + milliseconds : milliseconds);
}

function stopTimer() {
    clearInterval(timerInterval);
    return Date.now() - startTime;
}

function saveScore(timeMs) {
    // Check if user already exists
    var existingUserIndex = leaderboard.findIndex(user => user.name === currentUserNickname);

    if (existingUserIndex !== -1) {
        // Update existing score (overwrite with new score)
        leaderboard[existingUserIndex].time = timeMs;
        leaderboard[existingUserIndex].date = new Date().toISOString();
    } else {
        // Add new score
        var score = {
            name: currentUserNickname,
            time: timeMs,
            date: new Date().toISOString()
        };
        leaderboard.push(score);
    }

    // Sort by time (ascending)
    leaderboard.sort((a, b) => a.time - b.time);
    // Keep top 10
    leaderboard = leaderboard.slice(0, 10);

    localStorage.setItem('crackTheCodeLeaderboard', JSON.stringify(leaderboard));
    updateLeaderboardDisplay();
}

function updateLeaderboardDisplay() {
    var list = document.getElementById('leaderboardList');
    list.innerHTML = "";

    leaderboard.forEach((score, index) => {
        var li = document.createElement('li');

        var minutes = Math.floor(score.time / 60000);
        var seconds = Math.floor((score.time % 60000) / 1000);
        var milliseconds = Math.floor((score.time % 1000) / 10);
        var timeString = (minutes < 10 ? "0" + minutes : minutes) + ":" +
            (seconds < 10 ? "0" + seconds : seconds) + ":" +
            (milliseconds < 10 ? "0" + milliseconds : milliseconds);

        li.innerHTML = `
            <span class="rank-name">${index + 1}. ${score.name}</span>
            <span class="rank-time">${timeString}</span>
        `;
        list.appendChild(li);
    });
}

function onCodeInput(number) {
    var currentText = document.getElementById("guess" + number).value
    if (currentText.length >= 2) {
        document.getElementById("guess" + number).value = currentText.charAt(1)
    }

    //Check If Correct Code
    if (correctCode[0] == guess1.value && correctCode[1] == guess2.value && correctCode[2] == guess3.value) {
        guess1.disabled = true
        guess2.disabled = true
        guess3.disabled = true
        continueButton.disabled = false
        headerLabel.innerHTML = "TEBRİKLER!"

        // Stop Timer and Save Score
        var finalTime = stopTimer();
        saveScore(finalTime);

        //Animations
        document.getElementById("lockAnimation").style.backgroundPosition = "0px -32px"
        animateWithReflow("continueButton", "bounce-in")
    }
}

function revealAnswer() {
    // Hidden functionality
    // document.getElementById("answerLabel").innerHTML = correctCode[0] + "" + correctCode[1] + "" + correctCode[2]
}

function animateWithReflow(element, animation) {
    document.getElementById(element).classList.remove(animation)
    void document.getElementById(element).offsetWidth
    document.getElementById(element).classList.add(animation)
    document.getElementById(element).style.opacity = "1"
}

// v5
