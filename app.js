window.addEventListener('load',()=> {
    let long;
    let lat;
    let temperatureInfo = document.querySelector('.temperature-info');
    let temperatureDegree = document.querySelector('.temperature-degree');
    let locationTimezone = document.querySelector('.location-timezone');

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position =>{
            long=position.coords.longitude;
            lat=position.coords.latitude;

            const proxy='https://cors-anywhere.herokuapp.com/';
            const api=`${proxy}https://api.darksky.net/forecast/226f5a797e220adab17e2f9f99560ee5/${lat},${long}`;
            fetch(api)
                .then(response => {
                    return response.json();
                })
                .then(data=>{
                    console.log(data);
                    const {temperature, summary} = data.currently;
                    // Set DOM Elements from API
                    temperatureDegree.textContent=temperature;
                    temperature
                });
        });

    }else{
        document.getElementById("h1").textContent ="ERROR: No geolocation data";

    }
});
