const comments = [
    { name: 'Victor Pinto', date: "11/02/2023", filledComment: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains."},
    { name: 'Christina Cabrera', date: "10/28/2023", filledComment:"I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day." },
    { name: 'Isaac Tadesse', date: "10/20/2023", filledComment:"I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough."}
];

function createCommentSection(comment) {
    const cardEl = document.createElement('article');
    cardEl.classList.add('comment');

    const heading = document.createElement('p');
    heading.innerText = comment.name;

    const dateEl = document.createElement('span');
    dateEl.innerText = comment.date;

    const commentEl = document.createElement('p');
    commentEl.innerText = comment.filledComment;

    cardEl.appendChild(heading);
    cardEl.appendChild(dateEl);
    cardEl.appendChild(commentEl);

    return cardEl;
}

function renderComment() {
    const myCommentEl = document.querySelector("#my-comments");

    // Clear the appointments div first
    myCommentEl.innerHTML = "";

    // Render all the appointments
    for (let i = 0; i < comments.length; i++) {
        const card = createCommentSection(comments[i]);
        myCommentEl.appendChild(card);
    }
}

function handleFormSubmit(event) {
    event.preventDefault();
    
    const formSubmission = {
        name: event.target.name.value,
        comments: event.target.comments.value,
    };

    const cardData = {
        name: event.target.name.value,
        date: event.target.date.value,
        filledComment: event.target.filledComment.value,
    };

    comments.push(cardData);
    renderComment();
}

const formEl = document.querySelector('#my-comments');
formEl.addEventListener('submit', handleFormSubmit);
renderComment();