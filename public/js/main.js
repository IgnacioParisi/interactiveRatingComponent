window.addEventListener("load", function() {
    let ratingButtons = document.querySelectorAll(".rating-btn");

    for (let i = 0; i < ratingButtons.length; i++) {
        ratingButtons[i].addEventListener("click", function() {
            let selectedValue = document.querySelector(".selected-value");

            selectedValue.innerHTML = `You selected ${this.value} out of 5`;
        })
    }

    let submitButton = document.querySelector(".cta-btn");

    submitButton.addEventListener("click", function() {
        let cardContainer = document.querySelector(".card-active");

        cardContainer.style.display = 'none';

        let cardThanks = document.querySelector(".card-thanks");

        cardThanks.style.display = 'block';
    })

})