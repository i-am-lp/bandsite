const shows = [
    { date: 'Mon Sept 09 2024', venue: "Ronald Lane", location: "San Francisco, CA"},
    { date: 'Tue Sept 17 2024', venue: "Pier 3 East", location:"San Francisco, CA" },
    { date: 'Sat Oct 12 2024', venue: "View Lounge", location:"San Francisco, CA"},
    { date: 'Sat Nov 16 2024', venue: "Hyatt Agency", location:"San Francisco, CA"},
    { date: 'Fri Nov 29 2024', venue: "Moscow Center", location:"San Francisco, CA"},
    { date: 'Wed Dec 18 2024', venue: "Press Club", location:"San Francisco, CA"}
];

// const showsJs = document.querySelector('#shows-js');
// const heading = document.createElement('h2');
// heading.classList.add('shows__title');
// heading.textContent = 'Shows';
// showsJs.appendChild(heading);

function createShowsPage(shows) {
    const showEl = document.createElement('div');
    showEl.classList.add('shows__total');

    const titleDate = document.createElement('p');
    titleDate.classList.add('shows__total--title');
    titleDate.textContent = 'DATE';
    showEl.appendChild(titleDate);

    const dateEl = document.createElement('p');
    dateEl.classList.add('shows__total--date');
    dateEl.textContent = shows.date;
    showEl.appendChild(dateEl);

    const titleVenue = document.createElement('p');
    titleVenue.classList.add('shows__total--title');
    titleVenue.textContent = 'VENUE';
    showEl.appendChild(titleVenue);

    const venueEl = document.createElement('p');
    venueEl.classList.add('shows__total--venue');
    venueEl.textContent = shows.venue;
    showEl.appendChild(venueEl);

    const titleLocation = document.createElement('p');
    titleLocation.classList.add('shows__total--title');
    titleLocation.textContent = 'LOCATION';
    showEl.appendChild(titleLocation);

    const locationEl = document.createElement('p');
    locationEl.classList.add('shows__total--location');
    locationEl.textContent = shows.location;
    showEl.appendChild(locationEl);

    const button = document.createElement('button');
    button.classList.add('shows__total--button');
    button.textContent = 'BUY TICKETS';
    showEl.appendChild(button);

    return showEl;
}

function renderShows() {
    const buildShowsEl = document.querySelector('#shows-js');

    buildShowsEl.innerHTML="";

    for (let i=0; i < shows.length; i++) {
        const card = createShowsPage(shows[i]);
        buildShowsEl.appendChild(card);
    }
}

const showCardEl = document.querySelector('#shows-js');
renderShows();