
const card = document.querySelectorAll(".card");
window.addEventListener("scroll", animationCards);

function animationCards(){

    const checkingBottom = (window.innerHeight / 2) * (75 / 25);


    card.forEach((singlecard) =>{
        const cardTop = singlecard.getBoundingClientRect().top;

        let toslidIn = cardTop < checkingBottom;
        if(toslidIn){
            singlecard.classList.add("slidingIn");
        }else{
            singlecard.classList.remove("slidingIn");
        }
    });
    }