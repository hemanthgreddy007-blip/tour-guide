// Search destinations

const searchInput = document.getElementById("searchInput");
const placeCards = document.querySelectorAll(".place-card");

searchInput.addEventListener("input", function () {

    const searchText = searchInput.value.toLowerCase();

    placeCards.forEach(function (card) {

        const placeName = card
            .querySelector("h3")
            .textContent
            .toLowerCase();

        const placeDescription = card
            .querySelector("p")
            .textContent
            .toLowerCase();

        if (
            placeName.includes(searchText) ||
            placeDescription.includes(searchText)
        ) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }

    });

});


// View destination details

function showDetails(place) {

    let message = "";

    if (place === "Taj Mahal") {

        message =
            "Taj Mahal is located in Agra, India. " +
            "It is one of the most famous monuments in the world.";

    } else if (place === "Goa") {

        message =
            "Goa is famous for its beautiful beaches, " +
            "nightlife, food and water activities.";

    } else if (place === "Kerala") {

        message =
            "Kerala is famous for backwaters, greenery, " +
            "hill stations and beautiful landscapes.";

    } else if (place === "Manali") {

        message =
            "Manali is a beautiful Himalayan destination " +
            "famous for mountains, snow and adventure activities.";

    } else if (place === "Jaipur") {

        message =
            "Jaipur is known as the Pink City and is famous " +
            "for forts, palaces and royal history.";

    } else if (place === "Kashmir") {

        message =
            "Kashmir is famous for mountains, lakes, " +
            "beautiful valleys and natural scenery.";

    }

    alert(message);
}


// Package booking

function bookPackage(packageName) {

    alert(
        "Thank you for choosing " +
        packageName +
        "!\n\nOur travel team will contact you soon."
    );

}


// Contact form

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value;

    alert(
        "Thank you, " +
        name +
        "!\n\nYour message has been submitted successfully."
    );

    contactForm.reset();

});