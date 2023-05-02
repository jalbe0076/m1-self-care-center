const affirmationRadio = document.querySelector('.affirmation-message');
const mantraRadio = document.querySelector('.mantra-message');
const createMessageButton = document.querySelector('.create-message');
const favouriteMessageButton = document.querySelector('.save-message');
const viewFavouriteButton = document.querySelector('.view-favourite');
const viewHomeButton = document.querySelector('.home');
const mantraSelectBox = document.querySelector('.mantra-select');
const messageContainer = document.querySelector('.receive-messages');
const subTitle = document.querySelector('.sub-title');
const favouriteBox = document.querySelector('.favourite-box');
const messageHtmlParagraph = document.querySelector('.message');
const imgBuddha = document.querySelector('.img-buddha');
const displayMessage = document.querySelector('.display-message-container')
const createMessageBox = document.querySelector('.display-message');

let currentMessage;

if (localStorage.length) {
    viewFavouriteButton.classList.remove('hidden');
}

// EVENT LISTENERS

createMessageButton.addEventListener('click', selectMessage);

favouriteMessageButton.addEventListener('click', function() {
    favouriteMessage();
    if (localStorage.length) {
        viewFavouriteButton.classList.remove('hidden');
    }
});

viewFavouriteButton.addEventListener('click', function() {
    affirmationRadio.checked = false;
    mantraRadio.checked = false
    toggleHiddenButton(mantraSelectBox);
    toggleHiddenButton(viewHomeButton);
    toggleHiddenButton(viewFavouriteButton);
    toggleHiddenButton(messageContainer);
    toggleHiddenButton(favouriteBox);
    toggleHiddenButton(displayMessage);
    viewFavouriteMessages();
    swapSubTitle();

    if (!messageHtmlParagraph.classList.contains('hidden')) {
        toggleHiddenButton(imgBuddha);
        toggleHiddenButton(messageHtmlParagraph);
        toggleHiddenButton(favouriteMessageButton);
    }
});

viewHomeButton.addEventListener('click', function() {
    toggleHiddenButton(mantraSelectBox);
    toggleHiddenButton(viewHomeButton);
    toggleHiddenButton(messageContainer);
    toggleHiddenButton(favouriteBox);
    toggleHiddenButton(displayMessage); 
    swapSubTitle();

    if (localStorage.length && viewHomeButton.classList.contains('hidden')) {
        viewFavouriteButton.classList.remove('hidden');
    } else if (!localStorage.length) {
        viewFavouriteButton.classList.add('hidden');
    }
});

favouriteBox.addEventListener('click', deleteFavourite);

// FUNCTIONS

function selectMessage() {

    if (affirmationRadio.checked) {
        if (!imgBuddha.classList.contains('hidden')) {
            toggleHiddenButton(imgBuddha);
            toggleHiddenButton(messageHtmlParagraph);
            toggleHiddenButton(favouriteMessageButton);
        }
        
        messageHtmlParagraph.innerText = createMessage(affirmations);

    } else if (mantraRadio.checked) {
        if (!imgBuddha.classList.contains('hidden')) {
            toggleHiddenButton(imgBuddha);
            toggleHiddenButton(messageHtmlParagraph);
            toggleHiddenButton(favouriteMessageButton);
        }
   
        messageHtmlParagraph.innerText = createMessage(mantras);
    }
}

function createMessage(messageType) {
    currentMessage = {
        message: messageType[getRandomMessage(messageType)],
        id: Date.now()
    };
    return currentMessage.message;
}

function getRandomMessage(messageType) {
    return Math.floor(Math.random() * messageType.length);
}

function toggleHiddenButton(button) {
    button.classList.toggle('hidden');
}

function favouriteMessage() {
    if (!Object.values(localStorage).includes(currentMessage.message)) {
        localStorage.setItem(currentMessage.id, currentMessage.message);
    }
}

function viewFavouriteMessages() {
    favouriteBox.innerHTML = '';
    Object.keys(localStorage).forEach(id => {
        favouriteBox.innerHTML += `
            <section class="message-container" id="${id}">
                <p>${localStorage.getItem(id)}</p>
                <button class="delete-message">Delete</button>
            </section>`;
    });
}

function swapSubTitle() {
    if (messageContainer.classList.contains('hidden')) {
        subTitle.innerText = 'Saved messages';
    } else {
        subTitle.innerText = 'Which type of message?'
    }
}

function deleteFavourite(event) {
        Object.keys(localStorage).forEach(id => {
        if (id === event.target.parentNode.id) {
            localStorage.removeItem(id);
        }
    });

    viewFavouriteMessages();

    if (!localStorage.length) {
        subTitle.innerText = "All messages deleted";
    }
}