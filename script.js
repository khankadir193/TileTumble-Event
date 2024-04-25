document.addEventListener("DOMContentLoaded", function(params) {
    console.log('params...???',params);
    const guideButton = document.getElementById("guideButton");
    const leaderBoardBtn = document.getElementById("leaderBoardButton");
    const guidepopup = document.getElementById("guidepopup");
    const leaderpopup = document.getElementById("guidepopup");
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
        closeLeaderPopup.style.display = "none";
    }

    // Event listener for the guidebtn click
    guideButton.addEventListener("click", openPopup);

    // Event listener for the guidebtn click
    leaderBoardBtn.addEventListener("click", openleaderboardPopup);

    // Event listener for the close button click
    closeButton.addEventListener("click", closePopup);
    closeLeaderButton.addEventListener("click", closeLeaderPopup);
});
