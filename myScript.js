const payment = document.getElementById("payment_account");
const approved = document.getElementById("approved_payment");

const buttonPayment = document.getElementById("button_conf");
const buttonApproved = document.getElementById("button_content");

const nome = document.getElementById("text_name");
const numberCard = document.getElementById("number_card");
const numMonth = document.getElementById("month");
const numYear = document.getElementById("year");
const cvc = document.getElementById("code_verification_card");

// const error = document.querySelector("mandatory_name_field");



const errorMessage = document.getElementsByClassName("requiredField");

buttonPayment.addEventListener("click", (event) => {

    event.preventDefault();

    if (nome.value == '') {
        document.querySelector(".error-name").textContent = "Nome obrigatório";
        document.querySelector(".error-name").style.display = "block";
        return;
    }

    if (numberCard.value == '') {
        document.querySelector(".error-card-number").textContent = "Numero obrigatório";
        document.querySelector(".error-card-number").style.display = "block";
        return;
    }

    if (numMonth.value == '') {

        document.querySelector(".error-card-month").textContent = "Data obrigatório";
        document.querySelector(".error-card-month").style.display = "block";
        return;
    }

    if (numYear.value == '') {

        document.querySelector(".error-card-year").textContent = "Ano obrigatório";
        document.querySelector(".error-card-year").style.display = "block";
        return;
    }

    if (cvc.value == '') {

        document.querySelector(".error-card-cvc").textContent = "CVC obrigatório";
        document.querySelector(".error-card-cvc").style.display = "block";
        return;
    }


    if (payment) {
        payment.style.display = "none";
        approved.style.display = "grid";
    }
    else {
        payment.style.display = "grid";
    }


    buttonApproved.addEventListener("click", () => {
        if (approved) {
            approved.style.display = "none";
            payment.style.display = "grid";
        }
    })
})

