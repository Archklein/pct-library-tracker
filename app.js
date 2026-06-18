// Prototype Mock Database: 1 Book for each of the 8 slots on Shelf 1
const bookDatabase = [
    { title: "Simply Windows", author: "Mary Campbell/1992", accession: "0056", shelf: 1, slot: 1 },
    { title: "Wordstar Professional Made Easy", author: "Walter A. Ettlin/1988", accession: "0239", shelf: 1, slot: 2 },
    { title: "Hands-On Computer Accounting Using Microsoft Excel 97", author: "Ricardo", accession: "0412", shelf: 1, slot: 3 },
    { title: "Turbo Pascal 7.0", author: "Stephen K. O'Brien", accession: "1102", shelf: 1, slot: 4 },
    { title: "dBase III Plus Instant Reference", author: "Alan Simpson", accession: "0891", shelf: 1, slot: 5 },
    { title: "Mastering Local Area Networks", author: "Christa Anderson", accession: "1440", shelf: 1, slot: 6 },
    { title: "Introduction to Computers", author: "Peter Norton", accession: "2011", shelf: 1, slot: 7 },
    { title: "HTML5 & CSS3 Quickstart Guide", author: "Clyde Bank Technology", accession: "3055", shelf: 1, slot: 8 }
];

// Read URL parameters to find out which shelf QR code was scanned
const urlParams = new URLSearchParams(window.location.search);
const currentShelf = parseInt(urlParams.get('shelf')) || 1; // Default to Shelf 1 if opened directly

// DOM Elements
const shelfIndicator = document.getElementById('shelf-indicator');
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const resultsList = document.getElementById('results-list');

const searchPage = document.getElementById('search-page');
const resultsPage = document.getElementById('results-page');
const mapPage = document.getElementById('map-page');

const backToSearch = document.getElementById('back-to-search');
const backToResults = document.getElementById('back-to-results');

// Set UI Context Header
shelfIndicator.innerText = `You are scanning: Shelf ${currentShelf}`;

// Event Listeners
searchBtn.addEventListener('click', performSearch);
backToSearch.addEventListener('click', () => showPage('search'));
backToResults.addEventListener('click', () => showPage('results'));

function showPage(pageName) {
    searchPage.classList.add('hidden');
    resultsPage.classList.add('hidden');
    mapPage.classList.add('hidden');

    if (pageName === 'search') searchPage.classList.remove('hidden');
    if (pageName === 'results') resultsPage.classList.remove('hidden');
    if (pageName === 'map') mapPage.classList.remove('hidden');
}

function performSearch() {
    const query = searchInput.value.toLowerCase().trim();
    if (!query) return;

    resultsList.innerHTML = ''; // Clear old results
    
    // Filter database based on match
    const matches = bookDatabase.filter(book => 
        book.title.toLowerCase().includes(query) || 
        book.accession.includes(query)
    );

    if (matches.length === 0) {
        resultsList.innerHTML = `<li>No books found matching "${query}".</li>`;
    } else {
        matches.forEach(book => {
            const li = document.createElement('li');
            li.innerHTML = `<strong>${book.title}</strong><br><small>Author: ${book.author} | Accession: ${book.accession}</small>`;
            li.addEventListener('click', () => renderMap(book));
            resultsList.appendChild(li);
        });
    }
    showPage('results');
}

function renderMap(book) {
    document.getElementById('target-book-title').innerText = book.title;
    document.getElementById('target-book-meta').innerText = `Author: ${book.author} | Accession: ${book.accession}`;
    document.getElementById('current-shelf-number').innerText = book.shelf;

    // Reset all slots styling
    document.querySelectorAll('.slot').forEach(slot => {
        slot.classList.remove('active-target');
    });

    // Find the slot element corresponding to the book's slot and highlight it
    const targetSlotElement = document.querySelector(`.slot[data-slot="${book.slot}"]`);
    if (targetSlotElement) {
        targetSlotElement.classList.add('active-target');
    }

    showPage('map');
}