// js/main.js

document.addEventListener("DOMContentLoaded", function () {
    // Ambil semua card yang memiliki kelas "card-biro"
    const cards = document.querySelectorAll(".card-biro");

    // Iterasi setiap card
    cards.forEach((card) => {
        card.addEventListener("click", function () {
            // Toggle class 'active' pada card yang di-klik
            this.classList.toggle("active");

            // Ambil elemen detail dari card yang di-klik
            const detail = this.querySelector(".detail");

            // Toggle display detail (tampilkan/jangan tampilkan)
            if (detail.style.display === "block") {
                detail.style.display = "none";
            } else {
                detail.style.display = "block";
            }
        });
    });
});
