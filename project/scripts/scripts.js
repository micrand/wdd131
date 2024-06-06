const mainNav = document.querySelector('.navigation');
const hamburgerButton = document.querySelector('#menu');

hamburgerButton.addEventListener( 'click', () => {
    mainNav.classList.toggle('show');
    hamburgerButton.classList.toggle('show');
});


const year = new Date();
document.querySelector('#current-year').innerHTML = year.getFullYear();
document.querySelector('#last-updated-date').innerHTML = document.lastModified;


let buttonSubmit = document.querySelector('.submit-button');
if(buttonSubmit) {
    buttonSubmit.addEventListener( 'submit', function(e) {
        e.preventDefault();

        let formSubscribe = document.getElementById('#form-subscription');
        
        location = "thankyou.html";

    });
}



let modalBox = document.querySelector('.modal');
let closeButton = document.querySelector('.close-button');
let submitNewsletter = document.querySelector('.submit-newsletter');

if( modalBox )
{
    let userSubscribedNewsletter = localStorage.getItem( 'user_subscribed_newsletter' );

    console.log( userSubscribedNewsletter );

    // load newsletter
    if( !userSubscribedNewsletter )
    {
        setTimeout( () => { displayModalOnLoad() }, 3000 );
    }
    else{
        let notificationUserSubscribed = document.getElementById('newsletter-subscribed-notification');
        notificationUserSubscribed.innerHTML = `<strong class="success-text">Welcome, <strong class="primary-color">${userSubscribedNewsletter}</strong>! thank you for beeing subscribed to GBP weekly newsletter.</strong>`;
    }

    closeButton.addEventListener( 'click', function(){
        hideModalOnClick();
    });

    submitNewsletter.addEventListener( 'click', function(event){
        event.preventDefault();
        let name = document.querySelector('.form-newsletter input[name=name]');
        let email = document.querySelector('.form-newsletter input[name=mail]');
        let subscribeButton = document.getElementById( '#subscribe-newsletter' );
        let nameValue = name.value;
        let emailValue = email.value;
        
        if( nameValue != "" && emailValue != "" )
        {
            let thankBlock = document.getElementById('thank-newsletter');
            thankBlock.innerHTML = `Merci de votre participation ${nameValue}`;   
            thankBlock.style.color = "#4BB543"; 
            thankBlock.style.fontWeight = 700;        
            localStorage.setItem( 'user_subscribed_newsletter', nameValue );
            setTimeout( () => { hideModalOnClick(); }, 2000 );
        }
    });

}




function displayModalOnLoad(){
    modalBox.style.display = "block";
}
function hideModalOnClick(){
    modalBox.style.display = "none";
}