function onLoad() {
    hideAll();

}
// เปลื่ยน backgroud
let body = document.body;
let themeButton = document.querySelector('.theme-button');
themeButton.addEventListener('click', () => {

    body.classList.toggle('dark-theme');
});

// menubar 
let homePage = document.getElementById('homePage');
let listPage = document.getElementById('listPage');
let aboutPage = document.getElementById('aboutPage');
// content Page 
let contentHomepage = document.getElementById('');
let contentSelectMovie = document.getElementById('pageSelect');
let contentAboutUs = document.getElementById('pageAboutUs');

// page homepage 
homePage.addEventListener('click', () => {
    hideAll();
})

// page Select Movie
listPage.addEventListener('click', () => {
    hideAll();
    contentSelectMovie.style.display = 'block';
})


// page AboutUs
aboutPage.addEventListener('click', () => {
    contentSelectMovie.style.display = 'none';
    contentAboutUs.style.display = 'block'

})

// ซ่อนข้อมูลหน้าทั้งหมด
function hideAll() {
    contentSelectMovie.style.display = 'none';
    contentAboutUs.style.display = 'none'

}

// เพิ่มข้อมูล postman

function addMovieData(movie) {
    let counter = 1
    document.getElementById('tableBody').innerHTML = '';
    for (movie of movieList) {
        addStudentToTable(counter++, movie)
    }
    id.innerHTML = movie.mal_id;
    title.innerHTML = movie.title;
    ep.innerHTML = movie.episodes;
    score.innerHTML = movie.score;
    image.setAttribute('src', movie.image_url);

}
let searchButton = document.getElementById('SearchButton');
searchButton.addEventListener('click', () => {
    let inputUrl = document.getElementById('inputUrl').value
    fetch(`https://api.jikan.moe/v3/search/anime?q=${inputUrl}`)
        .then((response) => {
            return response.json()
        }).then(movie => {

            addMovieData(movie.results);

        })


})