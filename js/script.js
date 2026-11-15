// زرار الدارك مود البسيط
const btn = document.getElementById("darkBtn");

btn.addEventListener("click", function(e) {
    e.preventDefault();
    document.body.classList.toggle("dark");
});