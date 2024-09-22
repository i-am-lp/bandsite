import BandSiteApi from './band-site-api.js';

const apiKey = 'feb0356e-ecdf-49d8-a7bf-d83e8ae70888';
const bandSiteApi = new BandSiteApi(apiKey);

function createCommentSection(comment) {
    const cardEl = document.createElement('div');
    cardEl.classList.add('main__comments__filled');

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
    const formattedDate = new Date(comment.timestamp).toLocaleDateString();
    dateEl.innerText = formattedDate;

    nameDateEl.appendChild(heading);
    nameDateEl.appendChild(dateEl);
    textEl.appendChild(nameDateEl);

    const commentEl = document.createElement('p');
    commentEl.classList.add('main__comments__filled--text--copy');
    commentEl.innerText = comment.comment;
    textEl.appendChild(commentEl);

    cardEl.appendChild(textEl);

    return cardEl;
}

async function renderComment() {
    const myCommentEl = document.querySelector("#main__comments__filled--blank");

    myCommentEl.innerHTML = "";

    try {
        const comments = await bandSiteApi.getComments();

        comments.forEach(comment => {
            const card = createCommentSection(comment);
            myCommentEl.appendChild(card);
        });
    }
    catch (error) {
        console.error('Failed to load comments:', error);
    }
}

async function handleFormSubmit(event) {
    event.preventDefault(); 
    
    const nameVal = event.target.elements.name.value;
    const commentVal = event.target.elements.comments.value;

    const commentData = {
        name: nameVal,
        comment: commentVal
    };

    try {
        await bandSiteApi.postComment(commentData); 
        renderComment(); 
        event.target.reset(); 
    } 
    catch (error) {
        console.error('Failed to submit comment:', error);
    }
}

const formEl = document.querySelector('#main__comments--form');
formEl.addEventListener('submit', handleFormSubmit);
renderComment();


const nameStyling = document.querySelectorAll('.main__comments--form--placeholder');

nameStyling.forEach( (nameComment) => {
    nameComment.addEventListener('click', function() {
        nameComment.classList.add('main__comments--form--placeholder--active');
    });

    nameComment.addEventListener('blur', function() {
        nameComment.classList.remove('main__comments--form--placeholder--active');
    });
});

