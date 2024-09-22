import BandSiteApi from './band-site-api.js';

const apiKey = 'feb0356e-ecdf-49d8-a7bf-d83e8ae70888';
const bandSiteApi = new BandSiteApi(apiKey);

function createHeaders() {
    const showsJs = document.querySelector('#headings-js');
    const heading = document.createElement('h2');
    heading.classList.add('shows__title');
    heading.textContent = 'Shows';
    showsJs.appendChild(heading);

    const headingsParent = document.createElement('div');
    headingsParent.classList.add('headings-parent');

    const headingsNonMobileDate = document.createElement('div');
    headingsNonMobileDate.classList.add('headings-non-mobile');
    headingsNonMobileDate.innerText = 'DATE';
    headingsParent.appendChild(headingsNonMobileDate);

    const headingsNonMobileVenue = document.createElement('div');
    headingsNonMobileVenue.classList.add('headings-non-mobile');
    headingsNonMobileVenue.innerText = 'VENUE';
    headingsParent.appendChild(headingsNonMobileVenue);

    const headingsNonMobileLocation = document.createElement('div');
    headingsNonMobileLocation.classList.add('headings-non-mobile');
    headingsNonMobileLocation.innerText = 'LOCATION';
    headingsParent.appendChild(headingsNonMobileLocation);

    return headingsParent;
}

const headers = createHeaders();
const showsJs = document.querySelector('#headings-js');
showsJs.appendChild(headers);



function createShowsPage(show) {
    const showEl = document.createElement('div');
    showEl.classList.add('shows__total');

    const titleDate = document.createElement('p');
    titleDate.classList.add('shows__total--title');
    titleDate.textContent = 'DATE';
    showEl.appendChild(titleDate);

    const dateEl = document.createElement('p');
    dateEl.classList.add('shows__total--date');
    const apiDate = show.date;
    const newDate = new Date(apiDate);
    const formattedDate = newDate.toDateString();
    dateEl.textContent = formattedDate;
    showEl.appendChild(dateEl);

    const titleVenue = document.createElement('p');
    titleVenue.classList.add('shows__total--title');
    titleVenue.textContent = 'VENUE';
    showEl.appendChild(titleVenue);
    

    const venueEl = document.createElement('p');
    venueEl.classList.add('shows__total--venue');
    venueEl.textContent = show.place;
    showEl.appendChild(venueEl);

    const titleLocation = document.createElement('p');
    titleLocation.classList.add('shows__total--title');
    titleLocation.textContent = 'LOCATION';
    showEl.appendChild(titleLocation);

    const locationEl = document.createElement('p');
    locationEl.classList.add('shows__total--location');
    locationEl.textContent = show.location;
    showEl.appendChild(locationEl);

    const button = document.createElement('button');
    button.classList.add('shows__total--button');
    button.textContent = 'BUY TICKETS';
    button.addEventListener('click', function() {
        button.parentElement.classList.add('shows__total--clicked');
        
    });
    button.addEventListener('blur', function() {
        button.parentElement.classList.remove('shows__total--clicked');
    })

    showEl.appendChild(button);

    return showEl;
}

async function renderShows() {
    const buildShowsEl = document.querySelector('#shows-js');

    buildShowsEl.innerHTML="";

    try {
        const showpage = await bandSiteApi.getShows();

        showpage.forEach(show => {
            const showCard = createShowsPage(show);
            buildShowsEl.appendChild(showCard);
        });
    }
    catch (error) {
        console.error('Failed to load shows:', error);
    }
}

const showCardEl = document.querySelector('#shows-js');
renderShows();

