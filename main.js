

let logo = document.querySelector(".logo");
logo.addEventListener("click", function() {
    let heroContainer = document.querySelector(".rover-hero-container");
    heroContainer.style.backgroundImage = "url('https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&w=600')"; // Cat image URL







    let heroHeading = document.querySelector(".rover-hero-container h1");
    let heroText = document.querySelector(".rover-hero-container p");
    heroHeading.textContent = "We're the Cat People";
    heroText.textContent = "Book trusted, local pet sitters and walkers who will care for your cat like you would.";










    let facts = document.querySelectorAll(".rover-fact-indiv");
    let newFactsContent = [
        {
            title: "Cat Boarding",
            text: "Perfect if you need overnight pet care."
        },
        {
            title: "House Sitting",
            text: "Great if you need overnight pet or house-sitting services."
        },
        {
            title: "Cat Walking",
            text: "Whenever your cat needs a walk."
        },
        {
            title: "Cat Day Care",
            text: "Daytime pet care in your sitter’s cat-friendly home."
        },
        {
            title: "Drop-In Visits",
            text: "For check-ins and play dates."
        }
    ];

    facts.forEach((fact, index) => {
        let title = fact.querySelector("h3");
        let text = fact.querySelector("p");

        title.textContent = newFactsContent[index].title;
        text.textContent = newFactsContent[index].text;
    });









    let actionShot = document.querySelector(".rover-action-shot");
    actionShot.style.backgroundImage = "url('https://images.pexels.com/photos/57416/cat-sweet-kitty-animals-57416.jpeg?auto=compress&cs=tinysrgb&w=600')"; 



    let quote = document.querySelector(".rover-quote");
    quote.innerHTML = "My Rover sitter sent me updates throughout the day and took care of my cat as if she were her own. <span>– Corinna F.</span>";








    let steps = document.querySelectorAll(".rover-123-item");
    let newStepsContent = [
        {
            img: "https://i.ibb.co/gV5G6x8/cat-search.png",
            title: "Search",
            text: "Read verified reviews and pick the perfect sitter."
        },
        {
            img: "https://i.ibb.co/B4Z1bzT/cat-phone.png",
            title: "Book & pay on Rover",
            text: "Book and pay securely through the website or app."
        },
        {
            img: "https://i.ibb.co/4ZrkTkt/cat-shield.png", 
            title: "Relax",
            text: "Get the Rover Guarantee, 24/7 support, and reservation protection."
        }
    ];

    steps.forEach((step, index) => {
        let img = step.querySelector("img");
        let title = step.querySelector("h3");
        let text = step.querySelector("p");

        img.src = newStepsContent[index].img;
        title.textContent = newStepsContent[index].title;
        text.textContent = newStepsContent[index].text;
    });
});



let dropdownBtn = document.querySelector(".dropdown button");
let dropdown = document.querySelector(".dropdown");

dropdownBtn.addEventListener("click", function() {
    dropdown.classList.toggle("active");
});

