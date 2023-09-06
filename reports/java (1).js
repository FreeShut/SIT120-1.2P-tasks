let count = 0;
const countButton = document.getElementById("countButton");
const clickCountDisplay = document.getElementById("clickCount");

countButton.addEventListener("click", function() {
    count++;
    clickCountDisplay.textContent = count;
});