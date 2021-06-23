    // ----------------------------------- Mylist Page -----------------------------------------------------------------------------------------------\\

    //โหลด html ให้แสดง
    function onLoad() {

        // movieSearch.style.display = 'none';
        hideAll();
        // movieShow.style.display = 'block';


    }

    const movieList = document.querySelector('.movie-list');

    // แสดงข้อมูล ที่กด saerch
    function addMovie(movie) {
        const movieItem = document.createElement('movie-item');
        const movieImg = document.createElement('img');
        movieImg.classList.add('movie-img');
        movieImg.src = movie.image_url;
        const fullnameText = document.createElement('h3');
        fullnameText.classList.add('movie-name');
        fullnameText.innerHTML = movie.title;
        const buttonAdd = document.createElement('button');
        buttonAdd.classList.add('btn');
        buttonAdd.classList.add('btn-danger')
        buttonAdd.classList.add('mt-4')
        buttonAdd.setAttribute('type', 'button');
        buttonAdd.innerHTML = 'Double Click To Add';
        movieItem.append(fullnameText, movieImg, buttonAdd);
        movieList.append(movieItem);
        buttonAdd.addEventListener('dblclick', function() {
            console.log(data)
            var r = confirm(`Add ${movie.title} to MyList`);
            if (r == true) {
                addtoMylistToDB(data)
            }
        })
    }

    // แสดงข้อมูล ในฐานข้อมูล
    function add2Movie(movie) {
        const movieItem = document.createElement('movie-item');
        const movieImg = document.createElement('img');
        movieImg.classList.add('movie-img');
        movieImg.src = movie.image_url;
        const fullnameText = document.createElement('h3');
        fullnameText.classList.add('movie-name');
        fullnameText.innerHTML = movie.title;
        movieItem.append(fullnameText, movieImg);
        movieList.append(movieItem);
    }
    // เพิ่มข้อมูล 
    function addtoMylistToDB(data) {
        fetch('https://se104-project-backend.du.r.appspot.com/movies', {
                method: 'POST',
                headers: {
                    'movie': {
                        // "url": `${data.url}`,
                        // "image_url": `${data.image_url}`,
                        // "title": `${data.title}`,
                        // "synopsis": `${data.synopsis}`,
                        // "type": `${data.type}`,
                        // "episodes": data.episodes,
                        // "score": data.score,
                        // "rated": `${data.rated}`,




                        'url': `https://myanimelist.net/anime/10396/Ben-To`,
                        'image_url': `https://cdn.myanimelist.net/images/anime/12/73984.jpg?s=fae35d639922f1987b76ef8962779c10`,
                        'title': `Ben-To`,
                        'synopsis': `The supermarket is an important building in any city, for they provide a convenient way to purchase a variety of food in a family-friendly, safe environment. However, these stores changes in the blink...`,
                        'type': `TV`,
                        'episodes': 12,
                        'score': 7.25,
                        'rated': `PG-13`,
                    }

                },
                body: JSON.stringify(data)
            })
            .then((response) => {
                if (response.status === 200) {
                    return response.json()
                } else {
                    throw Error(response.statusText)
                }
            }).then((data => {
                console.log('success', data)
            }))
    }






    function MyList(data) {

        for (data of dataList.results) {
            addMovie(data)
        }
    }
    // Showdata

    function showdataMovie() {
        fetch('https://se104-project-backend.du.r.appspot.com/movies/601232100')
            .then((response) => {
                return response.json()
            }).then((data => {
                MyList(data)
            }))
    }

    // change Themes

    let body = document.body;
    let themeButton = document.getElementById('themesPage');
    themeButton.addEventListener('click', () => {

        body.classList.toggle('dark-theme');
    });

    // ----------------------------------- Home Page หน้าที่ 1 -----------------------------------------------------------------------------------------------\\
    //หนังที่เลือก
    const movieShow = document.querySelector('.movie-list-me')
    const homePage = document.getElementById('homePage');
    homePage.addEventListener('click', () => {
        hideAll();
        movieShow.style.display = 'block';



    })


    // ----------------------------------- Movie List Page หน้า 2 -----------------------------------------------------------------------------------------------\\
    const movieSearch = document.querySelector('.movie-search')
    const listPage = document.getElementById('listPage');
    listPage.addEventListener('click', () => {
        hideAll();
        movieSearch.style.display = 'block';
        ss.style.display = 'block';

    })

    //Search 

    document.getElementById('SearchButton').addEventListener('click', function(e) {

        var search = document.getElementById('inputUrl').value
        console.log(search)
        fetch(`https://api.jikan.moe/v3/search/anime?q=${search}`)
            .then((response) => {

                return response.json()
            }).then((data => {
                Search(data)
            }))
    })

    function Search(dataList) {
        const tableBody = document.getElementById('tableBody');
        tableBody.innerHTML = '';
        for (data of dataList.results) {
            addMovie(data)
        }
    }




    const ss = document.querySelector('.ss');

    function hideAll() {
        ss.style.display = 'none';
        movieShow.style.display = 'none';
        movieSearch.style.display = 'none';
    }

    //