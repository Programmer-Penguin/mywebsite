var visitCount = localStorage.getItem("page_view") || 1;

// Increment the count on each visit
visitCount = Number(visitCount) + 1;
localStorage.setItem("page_view", visitCount);

// Display the count
document.getElementById("counter-value").innerHTML = visitCount;

// Reset the counter
function resetCounter() {
    localStorage.removeItem("page_view");
    document.getElementById("counter-value").innerHTML = 1;
}
