const apikey="a07712ad86bb641a2f40b20ac67dee11";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox=document.querySelector(".search input");
const searchbtn=document.querySelector(".search button");
const weathericon=document.querySelector(".weather-icon");

async function checkwheather(city){
    const response=await fetch(apiurl+city+`&appid=${apikey}`);
    // console.log(response.status);
    if(response.status==404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }
    else{
    var data=await response.json();
    document.querySelector(".error").style.display="none";
    console.log("hello");
    console.log(data);
document.querySelector(".city").innerHTML=data.name;
document.querySelector(".wind").innerHTML=data.wind.speed+ "Km/h";
document.querySelector(".tmp").innerHTML=Math.round(data.main.temp)+"°C";
document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
console.log(data.weather[0].main);
if(data.weather[0].main=="Clouds"){
    weathericon.src="image/cloud.jpg"
}
else if(data.weather[0].main=="Clear"){
    weathericon.src="image/clear.png"
}
else if(data.weather[0].main=="Rain"){
    weathericon.src="image/rainfall.jpg"
}
else if(data.weather[0].main=="Drizzle"){
    weathericon.src="image/drizzle.jpg"
}
else if(data.weather[0].main=="Mist"){
    weathericon.src="image/mist.jpg"
}
document.querySelector(".weather").style.display="block";}

}
searchbtn.addEventListener("click",()=>{
    checkwheather(searchbox.value);
})
