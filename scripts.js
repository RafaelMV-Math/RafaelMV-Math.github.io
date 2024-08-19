
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
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}&lang=en`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('API response error');
            }
            return response.json();
        })
        .then(data => {
            const temp = data.list[0].main.temp;
            const weatherDescription = data.list[0].weather[0].description;
            const weatherIcon = data.list[0].weather[0].icon;
            const weatherElement = document.getElementById('weather-info');

            const iconUrl = `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`;
            weatherElement.innerHTML = `<img src="${iconUrl}" alt="Weather icon"> ${temp} C, ${weatherDescription}.`;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            const weatherElement = document.getElementById('weather-info');
            weatherElement.textContent = 'Unable to load the weather';
        });
});