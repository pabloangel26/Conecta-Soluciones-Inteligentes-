// Reemplaza 'TU_CLAVE_API' con tu clave de API de TMDb
const apiKey = '7967740592d15076175bf9bea6376a6e';
const apiUrl = 'https://api.themoviedb.org/3/movie/now_playing';

// Función para obtener las películas más recientes
function getRecentMovies() {
    const url = `${apiUrl}?api_key=${apiKey}`;
    
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const moviesContainer = document.getElementById('movies-container');
            
            data.results.forEach(movie => {
                const movieCard = document.createElement('div');
                movieCard.className = 'movie-card';

                const title = document.createElement('h2');
                title.textContent = movie.title;

                const image = document.createElement('img');
                image.src = `https://image.tmdb.org/t/p/w300${movie.poster_path}`;
                image.alt = movie.title;

                const overview = document.createElement('p');
                overview.textContent = movie.overview;

                movieCard.appendChild(title);
                movieCard.appendChild(image);
                movieCard.appendChild(overview);

                moviesContainer.appendChild(movieCard);
            });
        })
        .catch(error => console.error('Error fetching movies:', error));
}

// Cargar películas al cargar la página
window.addEventListener('load', getRecentMovies);