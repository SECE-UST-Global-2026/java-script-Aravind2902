const searchBtn = document.getElementById("searchBtn");
const movieInput = document.getElementById("movieName");
const movieResult = document.getElementById("movieResult");

const API_KEY = "YOUR_API_KEY"; // OMDB API Key

searchBtn.addEventListener("click", searchMovie);

function searchMovie() {
    const movieName = movieInput.value;

    if (movieName === "") {
        alert("Please enter a movie name");
        return;
    }

    fetch(`https://www.omdbapi.com/?t=${movieName}&apikey=${API_KEY}`)
        .then(response => response.json())
        .then(data => {
            if (data.Response === "False") {
                movieResult.innerHTML = "<p>Movie not found</p>";
                return;
            }

            movieResult.innerHTML = `
                <h2>${data.Title}</h2>
                <img src="${data.Poster}" alt="Movie Poster">
                <p><strong>Year:</strong> ${data.Year}</p>
                <p><strong>Genre:</strong> ${data.Genre}</p>
                <p><strong>IMDB Rating:</strong> ${data.imdbRating}</p>
            `;
        })
        .catch(error => {
            movieResult.innerHTML = "<p>Error fetching data</p>";
        });
}
