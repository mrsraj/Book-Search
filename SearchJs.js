// const books = [
//     { title: 'JavaScript: The Good Parts', author: 'Douglas Crockford' },
//     { title: 'Eloquent JavaScript', author: 'Marijn Haverbeke' },
//     { title: 'You Don\'t Know JS', author: 'Kyle Simpson' },
//     { title: 'JavaScript: The Definitive Guide', author: 'David Flanagan' }
// ];

// function searchBooks() {
//     const keyword = document.getElementById('searchInput').value.toLowerCase();
//     const results = books.filter(book =>
//         book.title.toLowerCase().includes(keyword) ||
//         book.author.toLowerCase().includes(keyword)
//     );
//     console.log(keyword);
//     displayResults(results);
// }

// function displayResults(results) {
//     const resultsList = document.getElementById('results');
//     resultsList.innerHTML = ''; // Clear previous results
//     results.forEach(book => {
//         const listItem = document.createElement('li');
//         listItem.textContent = `${book.title} by ${book.author}`;
//         resultsList.appendChild(listItem);
//     });
// }

const books = [
    { title: 'JavaScript: The Good Parts', author: 'Douglas Crockford', releaseDate: '2008' },
    { title: 'Eloquent JavaScript', author: 'Marijn Haverbeke', releaseDate: '2011' },
    { title: 'You Don\'t Know JS', author: 'Kyle Simpson', releaseDate: '2015' },
    { title: 'JavaScript: The Definitive Guide', author: 'David Flanagan', releaseDate: '2020' }
];

function searchBooks() {
    console.log("Call");
    
    const keyword = document.getElementById('searchInput').value.toLowerCase();
    const results = books.filter(book =>
        book.title.toLowerCase().includes(keyword) ||
        book.author.toLowerCase().includes(keyword) ||
        book.releaseDate.includes(keyword)
    );
    displayResults(results);
}

function displayResults(results) {
    const resultsList = document.getElementById('results');
    resultsList.innerHTML = ''; // Clear previous results
    results.forEach(book => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
        <span class="book-title">${book.title}</span> by 
        <span class="book-author">${book.author}</span>
        <br>
        <span class="book-release-date">Released: ${book.releaseDate}</span>
      `;
        resultsList.appendChild(listItem);
    });
}

displayResults(books)