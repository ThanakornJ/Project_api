// ----------------------------------- Mylist Page -----------------------------------------------------------------------------------------------\\
//ตัวแปรใน html
const tableBodyx = document.getElementById('tableBodyx'); // html 69
const tableBodyMe = document.getElementById('tableBodyMe'); //html 77
const ss = document.querySelector('.ss'); //html 45
const headx = document.querySelector('.headx'); //html 74
const movieDetailMe = document.querySelector('.movie-detail-me');
//โหลด html ให้แสดง

function onLoad() {
    ss.style.display = 'none';
    fetch('https://se104-project-backend.du.r.appspot.com/movies/632110338')
        .then((response) => {
            return response.json()
        }).then((data => {
            MyList(data)
        }))
}

function hideAll() {
    tableBodyx.style.display = 'none'; // js 3
    tableBodyMe.style.display = 'none'; //js 4

    ss.style.display = 'none'; //js 6
    headx.style.display = 'none' // js 7
}
//


//กดปุ่มค้นหาหนัง
const listPage = document.getElementById('listPage');
listPage.addEventListener('click', () => {
    movieDetailMe.style.display = 'none';
    hideAll();

    tableBodyx.style.display = 'grid'; //js 4
    ss.style.display = 'block'; //js 6



})

//กดปุ่มรายการที่ชอบ
const homePage = document.getElementById('homePage');
homePage.addEventListener('click', () => {

    hideAll();
    headx.style.display = 'block';
    tableBodyMe.style.display = 'grid'; //js 4
    movieDetailMe.style.display = 'block';




})

const movieList = document.querySelector('.movie-list');

// แสดงข้อมูล ที่กด saerch
const id = 632110338;

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
    //ดับเบิ้ลคลิก
    buttonAdd.addEventListener('dblclick', () => {
        console.log(data)
        var x = confirm(`ADD ${movie.title} TO MOVIE-LIST`);
        if (x == true) {
            alldata = { id, movie }
            console.log(alldata)
            hideAll();
            tableBodyMe.innerHTML = '';
            onLoad();
            headx.style.display = 'block';
            tableBodyMe.style.display = 'grid';

            addtoMylistToDB(alldata)




        }
    })
}















// ฟังก์ชั่นเสริม

//เปลื่ยน bg
let body = document.body;
let themeButton = document.getElementById('themesPage');
themeButton.addEventListener('click', () => {

    body.classList.toggle('dark-theme');
});

//top page
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// ----------------------------------- Home Page หน้าที่ 1 -----------------------------------------------------------------------------------------------\\

// แสดงข้อมูลในฐานข้อมูล
const movieListme = document.querySelector('.movie-list-me')


function myMovie(data) {
    const movieItem = document.createElement('div');
    const movieImg = document.createElement('img');
    movieItem.classList.add('movie-img');
    movieImg.src = data.image_url;
    const fullnameText = document.createElement('h4');
    fullnameText.classList.add('movie-name');
    fullnameText.innerHTML = data.title;
    const buttonAdd = document.createElement('button');
    buttonAdd.classList.add('btn');
    buttonAdd.classList.add('btn-secondary')
    buttonAdd.classList.add('mt-4')
    buttonAdd.setAttribute('type', 'button');
    buttonAdd.innerHTML = 'Detail';
    buttonAdd.addEventListener('click', () => {
        topFunction();
        movieDetailMe.innerHTML = '';
        console.log(data)
        movieDetailMe.style.display = "block";
        showDetail(data)
    })
    const buttonDelete = document.createElement('button');
    buttonDelete.classList.add('btn');
    buttonDelete.classList.add('btn-danger')

    buttonDelete.classList.add('mt-4')
    buttonDelete.setAttribute('type', 'button');
    buttonDelete.innerHTML = 'Delete';
    buttonDelete.addEventListener('click', () => {
        console.log(data)
        var r = confirm(`DELETE ${data.title} TO MOVIE-LIST`);
        if (r == true) {
            deleteMovie(data.id)
        }
    })
    movieItem.append(fullnameText, movieImg, buttonAdd, buttonDelete);
    movieList.append(movieItem);
    tableBodyMe.appendChild(movieItem)
}

//แสดงรายละเอียดข้อมูลของหนังแต่่ละเรื่อง กดปุ่ม Detail


function showDetail(data) {

    let overAll = document.createElement('div')
    overAll.classList.add("row")
    let Allmight = document.createElement('div')
    Allmight.classList.add("col-3")

    let one = document.createElement('div')
    one.classList.add("card")

    let img = document.createElement('img')
    img.classList.add("card-img-top")
    let imgname = data.image_url
    img.setAttribute('src', imgname)


    let inone = document.createElement('div')
    inone.classList.add("card-body")




    one.appendChild(img)
    Allmight.appendChild(one)
    let txtName = document.createElement('div')
    txtName.classList.add('col-9')
    let url = data.url
    let title = data.title
    let synopsis = data.synopsis
    let type = data.type
    let episodes = data.episodes
    let score = data.score
    let rated = data.rated
    let row1 = document.createElement('div')
    row1.classList.add('row')
    row1.innerHTML = `<p> Name :${title} <br>
                     Type : ${type} <br>
                     Episodes : ${episodes} <br>
                     Rated : ${rated} <br>
                     Score : ${score} <br>
                     
                     Synopsis : ${synopsis}<br>
                     Type : ${type} <br>
                     episodes : ${episodes} <br>
                     score : ${score} <br>

                     rated : ${rated} <br>
                     Link
                     <a href="${data.url}" target="_blank">${url}</a><br>
                     <p>
                     `

    let row2 = document.createElement('div')
    row2.classList.add('row')
    let col10 = document.createElement('div')
    col10.classList.add('col-10')
    let col2 = document.createElement('div')
    col2.classList.add('col-2')



    row2.appendChild(col10)
    row2.appendChild(col2)
    txtName.appendChild(row1)
    txtName.appendChild(row2)
    overAll.appendChild(Allmight)
    overAll.appendChild(txtName)
    movieDetailMe.appendChild(overAll)
}

function MyList(dataList) {

    for (data of dataList) {

        myMovie(data)
    }
}

// ลบข้อมูล
function deleteMovie(id) {
    fetch(`https://se104-project-backend.du.r.appspot.com/movie?id=632110338&&movieId=${id}`, {
        method: 'DELETE'
    }).then(response => {
        if (response.status === 200) {
            return response.json()
        } else {
            throw Error(response.statusText)
        }
    }).then(data => {
        alert(`${data.title} is now delete`)
        tableBodyMe.innerHTML = ''
        onLoad();


    }).catch(error => {
        alert('Error')
    })
}


// ----------------------------------- Movie List Page หน้า 2 -----------------------------------------------------------------------------------------------\\


//กดปุ่ม search 

document.getElementById('SearchButton').addEventListener('click', function(e) {

    var search = document.getElementById('inputUrl').value
    console.log(search)
    fetch(`https://api.jikan.moe/v3/search/anime?q=${search}`)
        .then((response) => {

            return response.json()
        }).then((data => {
            tableBodyx.innerHTML = ''
            Search(data.results)
        }))
})

function Search(dataList) {


    for (data of dataList) {
        addMovie(data)
    }
}

// เพิ่มหนังไปยังรายการที่ชอบ
function addtoMylistToDB(db) {

    fetch(`https://se104-project-backend.du.r.appspot.com/movies`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(db)
    }).then((response) => {
        if (response.status === 200) {
            return response.json()
        } else {
            throw Error(response.statusText)
        }
    }).then(data => {
        console.log(data)

    })
}