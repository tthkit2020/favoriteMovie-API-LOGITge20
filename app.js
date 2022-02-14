const container = document.querySelector(".container");

//get data from server

const url = "https://api.themoviedb.org/3/movie/550?api_key=6d620ce539a84a1d032d604633df8bbf";

fetch(url)
.then(response => {
    return response.json();
})
.then(data => {
    console.log(data.title);
    console.log(data.overview);
    //format date to get a year
    let year = new Date(data.release_date).getFullYear();
    console.log(year);
    let imagePath = data.poster_path;
    let imageUrl = "https://www.themoviedb.org/t/p/w600_and_h900_bestv2"+imagePath;
    console.log(imageUrl);

    //create heading
    let movieTitle = document.createElement('h1');
    movieTitle.textContent = data.title + ' ' + year;
    container.appendChild(movieTitle);

    //create paragraph
    let overview = document.createElement('p');
    overview.textContent = data.overview;
    container.appendChild(overview);

    //create image
    let moviePoster = document.createElement('img');
    moviePoster.src = imageUrl;
    container.appendChild(moviePoster);


});
