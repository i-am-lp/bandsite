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

if (showsJs) {
    showsJs.appendChild(headers);
    console.log('Headers appended successfully');
} else {
    console.error("Element with ID 'shows-js' not found in the DOM.");
}

function createShowsPage(show) {
    const showEl = document.createElement('div');
    showEl.classList.add('shows__total');

    const titleDate = document.createElement('p');
    titleDate.classList.add('shows__total--title');
    titleDate.textContent = 'DATE';
    showEl.appendChild(titleDate);

    const dateEl = document.createElement('p');
    dateEl.classList.add('shows__total--date');
    dateEl.textContent = show.date;
    showEl.appendChild(dateEl);

    const titleVenue = document.createElement('p');
    titleVenue.classList.add('shows__total--title');
    titleVenue.textContent = 'VENUE';
    showEl.appendChild(titleVenue);
    

    const venueEl = document.createElement('p');
    venueEl.classList.add('shows__total--venue');
    venueEl.textContent = show.venue;
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
    // button.addEventListener('click', function() {
    //     button.parentElement.classList.add('shows__total--clicked');
        
    // });

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

// const showButton = document.querySelectorAll('.shows__total--button');
// const showLine = document.querySelectorAll('.shows__total');

// showStyling.forEach( (showButton) => {
//     showButton.addEventListener('click', function() {
//         showLine.classList.add('show__total--active');
//     });

//     showButton.addEventListener('blur', function() {
//         showLine.classList.remove('show__total--active');
//     });
// })
