
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.toggle-abstract');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const abstract = button.nextElementSibling;
            if (abstract.style.display === 'block') {
                abstract.style.display = 'none';
                button.textContent = 'Abstract';
            } else {
                abstract.style.display = 'block';
                button.textContent = 'Abstract';
                // Re-renderiza el contenido LaTeX
                MathJax.typeset();
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const apiKey = '9248181116c7db072f161882d1f945a0'; // Reemplaza con tu clave API de OpenWeatherMap
    const city = 'Barcelona';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=es`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Error en la respuesta de la API');
            }
            return response.json();
        })
        .then(data => {
            const temp = data.main.temp;
            const weatherDescription = data.weather[0].description;
            const weatherElement = document.getElementById('weather-info');
            weatherElement.textContent = `${temp}°C, ${weatherDescription}`;
        })
        .catch(error => {
            console.error('Error al obtener el clima:', error);
            const weatherElement = document.getElementById('weather-info');
            weatherElement.textContent = 'Unable to load the weather.';
        });
});