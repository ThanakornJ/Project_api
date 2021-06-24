    // ----------------------------------- Mylist Page -----------------------------------------------------------------------------------------------\\

    fetch('https://se104-project-backend.du.r.appspot.com/movies/632110334')
        .then((response) => {
            return response.json()
        }).then((data => {
            MyList(data)
        }))
        //โหลด html ให้แสดง


    function onLoad() {
        ss.style.display = 'none';

    }
    // movieSearch.style.display = 'none';

    // movieShow.style.display = 'block';




    const movieList = document.querySelector('.movie-list');

    // แสดงข้อมูล ที่กด saerch
    function addMovie(movie) {
        const movieItem = document.createElement('movie-item');
        const movieImg = document.createElement('img');
        movieImg.classList.add('movie-img');
        movieImg.src = movie.image_url;
        const fullnameText = document.createElement('h4');
        fullnameText.classList.add('movie-name');
        fullnameText.innerHTML = movie.title;
        const buttonAdd = document.createElement('button');
        buttonAdd.classList.add('btn');
        buttonAdd.classList.add('btn-secondary')
        buttonAdd.classList.add('mt-4')

        buttonAdd.setAttribute('type', 'button');
        buttonAdd.innerHTML = 'Double Click To Add';
        movieItem.append(fullnameText, movieImg, buttonAdd);
        movieList.append(movieItem);
        buttonAdd.addEventListener('dblclick', () => {
            console.log(data)
            var r = confirm(`Add ${movie.title} to MyList`);
            if (r == true) {
                addtoMylistToDB(data)
            }
        })
    }
    // เพิ่มข้อมูล 


    function addtoMylistToDB(movie) {
        let addDataMovie = `{"url":"${movie.url}","image_url":"${movie.image_url}","title":"${movie.title}","synopsis":"${movie.synopsis}","type":"${movie.type}","episodes":"${movie.episodes}","score":"${movie.score}","rated":"${movie.rated}","id":"${movie.id}"}`
        fetch('https://se104-project-backend.du.r.appspot.com/movies', {
            method: 'POST',
            headers: {
                'content-Type': 'application/json'

            },


            body: `{"id":"632110338","movie":${addDataMovie}}`

        })

        .then((response) => {
            if (response.status === 200) {
                return response.json()
            } else {
                throw Error(response.statusText)
            }
        }).then((data => {
                alert('100%')
            }).catch(error => {

                alert('0%');


            })



        )
    }





    function MyList(dataList) {

        for (data of dataList) {

            myMovie(data)
        }
    }


    // แสดงข้อมูล ในฐานข้อมูล
    const movieListme = document.querySelector('.movie-list-me')

    function myMovie(data) {
        const movieItem = document.createElement('movie-item');
        const movieImg = document.createElement('img');
        movieImg.classList.add('movie-img');
        movieImg.src = data.image_url;
        const fullnameText = document.createElement('h3');
        fullnameText.classList.add('movie-name');
        fullnameText.innerHTML = data.title;

        const buttonAdd = document.createElement('button');
        buttonAdd.classList.add('btn');
        buttonAdd.classList.add('btn-secondary')
        buttonAdd.classList.add('mt-4')
        buttonAdd.setAttribute('type', 'button');
        buttonAdd.innerHTML = 'Detail';

        buttonAdd.addEventListener('click', () => {
            console.log(data)



        })

        const buttonDelete = document.createElement('button');
        buttonDelete.classList.add('btn');
        buttonDelete.classList.add('btn-danger')
        buttonDelete.classList.add('mt-4')
        buttonDelete.setAttribute('type', 'button');
        buttonDelete.innerHTML = 'Delete';
        buttonDelete.addEventListener('dblclick', () => {
            console.log(data)
            var r = confirm(`Delete ${movie.title} to MyList`);
            if (r == true) {
                addtoMylistToDB(data)
            }
        })
        movieItem.append(fullnameText, movieImg, buttonAdd, buttonDelete);
        movieList.append(movieItem);
        tableBodyMe.appendChild(movieItem)
    }







    // Showdata

    // function showdataMovie() {
    //     fetch('https://se104-project-backend.du.r.appspot.com/movies/601232100', {
    //             method: 'GET'
    //         })
    //         .then((response) => {
    //             return response.json()
    //         }).then((data => {
    //             MyList(data)
    //         }))
    // }

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
        // onLoad();
        document.querySelector('.headx').style.display = 'block';
        xx.style.display = 'block';
        movieShow.style.display = 'grid';



    })


    // ----------------------------------- Movie List Page หน้า 2 -----------------------------------------------------------------------------------------------\\
    const movieSearch = document.querySelector('.movie-search')
    const listPage = document.getElementById('listPage');
    listPage.addEventListener('click', () => {
        hideAll();
        xx.style.display = 'none';
        movieSearch.style.display = 'block';
        ss.style.display = 'block';
        document.querySelector('.headx').style.display = 'none';

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
    // delete
    function deleteMovie(id) {
        fetch(`https://se104-project-backend.du.r.appspot.com/movie?id=632110358&&movieId=${id}`, {
            method: 'DELETE'
        }).then(response => {
            if (response.status === 200) {
                return response.json()
            } else {
                throw Error(response.statusText)
            }
        }).then(data => {
            alert(`${data.title} is now delete`)
            onLoad()
        }).catch(error => {
            alert('Error')
        })
    }



    const ss = document.querySelector('.ss');
    const xx = document.querySelector('.xx');

    function hideAll() {
        ss.style.display = 'none';
        movieShow.style.display = 'none';
        movieSearch.style.display = 'none';
        xx.style.display = 'none';
    }

    //