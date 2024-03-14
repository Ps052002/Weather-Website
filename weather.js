async function getWeather() {
	var city = document.getElementById("temp").value;
	var data;
	var cond;
	const url = 'https://yahoo-weather5.p.rapidapi.com/weather?location=' + city + '&format=json&u=c';
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '87a4a2f60dmsh69b7509a7714c5bp1f4bd2jsnde7455efb23c',
			'X-RapidAPI-Host': 'yahoo-weather5.p.rapidapi.com'
		}
	};

	try {
		const response = await fetch(url, options);
		const result = await response.text();
		data = JSON.parse(result)
		cond = data.current_observation.condition.text
		console.log(cond)
		console.log(data)
	}
	catch (error) {
		console.error(error);
	}
	document.getElementById("ccity").innerText = data.location.city
	document.getElementById("ctemp").innerText = data.current_observation.condition.temperature + '°C'
	document.getElementById("chumidity").innerText = data.current_observation.atmosphere.humidity + '%'
	document.getElementById("cwind").innerText = data.current_observation.wind.speed + 'km/hr'
	if (cond === 'Cloudy') {
		document.getElementById("cimage").src = "clouds.png"
	}
	else if (cond === 'drizzling') {
		document.getElementById("cimage").src = "drizzle.png"
	}
	else if (cond === 'rainy') {
		document.getElementById("cimage").src = "rain.png"
	}
	else if (cond === 'snow') {
		document.getElementById("cimage").src = "snow.png"
	}
	else if (cond === 'Foggy') {
		document.getElementById("cimage").src = "mist.png"
	}
	else if (cond === 'Sunny') {
		document.getElementById("cimage").src = "clear.png"
	}
	else if (cond === 'Fair') {
		document.getElementById("cimage").src = "clear.png"
	}
}

