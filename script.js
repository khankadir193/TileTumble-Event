document.addEventListener("DOMContentLoaded", function(params) {
    console.log('params...???',params);
    const guideButton = document.getElementById("guideButton");
    const leaderBoardBtn = document.getElementById("leaderBoardButton");
    const guidepopup = document.getElementById("guidepopup");
    const leaderpopup = document.getElementById("leaderboardpopup");
    const closeButton = document.getElementById("closeButton");
    const closeLeaderButton = document.getElementById("closeLeaderButton");

    // Function to open the popup
    function openPopup() {
        guidepopup.style.display = "block";
    }

    function openleaderboardPopup() {
        leaderpopup.style.display = "block";
    } 

    // Function to close the popup
    function closePopup() {
        guidepopup.style.display = "none";
    }

    function closeLeaderPopup() {
        leaderpopup.style.display = "none";
    }

    // Event listener for the guidebtn click
    guideButton.addEventListener("click", openPopup);

    // Event listener for the leaderboard button click
    leaderBoardBtn.addEventListener("click", openleaderboardPopup);

    // Event listener for the guide close button click
    closeButton.addEventListener("click", closePopup);
    // Event listener for the leaderboard close button click
    closeLeaderButton.addEventListener("click", closeLeaderPopup);
});
