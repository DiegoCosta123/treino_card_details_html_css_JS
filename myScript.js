const payment = document.getElementById("payment_account");
const approved = document.getElementById("approved_payment");

const buttonPayment = document.getElementById("button_conf");
const buttonApproved = document.getElementById("button_content");

const nome = document.getElementById("text_name");
const numberCard = document.getElementById("number_card");
const numMonth = document.getElementById("month");
const numYear = document.getElementById("year");
const cvc = document.getElementById("code_verification_card");

buttonPayment.addEventListener("click", () => {


    if (nome.value == '' || numberCard.value == '' || numMonth.value == '' || numYear.value == '' || cvc.value == '') {
        return;
    }
    else {
        if (payment) {
            payment.style.display = "none";
            approved.style.display = "grid";
        }
        else {
            payment.style.display = "grid";
        }
        console.log("Teste1");
    }


    buttonApproved.addEventListener("click", () => {
        if (approved) {
            approved.style.display = "none";
            payment.style.display = "grid";
        }

    })
})

