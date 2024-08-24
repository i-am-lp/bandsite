const comments = [
    { name: 'Victor Pinto', date: "11/02/2023", filledComment: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains."},
    { name: 'Christina Cabrera', date: "10/28/2023", filledComment:"I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day." },
    { name: 'Isaac Tadesse', date: "10/20/2023", filledComment:"I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough."}
];

function createCommentSection(comment) {
    const cardEl = document.createElement('div');
    cardEl.classList.add('main__comments__filled');

    if (comments.indexOf(comment) === 0) {
        cardEl.classList.add('main__comments__filled--first');
    } else if (comments.indexOf(comment) === comments.length - 1) {
        cardEl.classList.add('main__comments__filled--last');
    }

    const imageEl = document.createElement('div');
    imageEl.classList.add('main__comments__filled--image');
    cardEl.appendChild(imageEl);

    const textEl = document.createElement('div');
    textEl.classList.add('main__comments__filled--text');

    const nameDateEl = document.createElement('div');
    nameDateEl.classList.add('main__comments__filled--text--name-date');
    
    const heading = document.createElement('p');
    heading.classList.add('main__comments__filled--text--name');
    heading.innerText = comment.name;
    
    const dateEl = document.createElement('span');
    dateEl.classList.add('main__comments__filled--text--date');
    dateEl.innerText = comment.date;
    
    nameDateEl.appendChild(heading);
    nameDateEl.appendChild(dateEl);
    textEl.appendChild(nameDateEl);

    const commentEl = document.createElement('p');
    commentEl.classList.add('main__comments__filled--text--copy');
    commentEl.innerText = comment.filledComment;
    textEl.appendChild(commentEl);

    cardEl.appendChild(textEl);

    return cardEl;
}

function renderComment() {
    const myCommentEl = document.querySelector("#main__comments__filled--blank");

    myCommentEl.innerHTML = "";

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

    const currentDate = new Date().toLocaleDateString();

    const cardData = {
        name: formSubmission.name,
        date: currentDate,
        filledComment: formSubmission.comments,
    };

    
    comments.unshift(cardData); 
    renderComment();
    event.target.reset();
}

const formEl = document.querySelector('#main__comments--form');
formEl.addEventListener('submit', handleFormSubmit);
renderComment();