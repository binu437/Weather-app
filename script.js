 // step 1
 const apiKey ="894255898ade9b113ee3908dca34ab10";
 
//  step 3 create a const to select the input and search icon

 const searchBox = document.querySelector(".search-input");
 const searchButton = document.querySelector(".Search button");


// step 2 1.by using apiKey will get the url weather of partiular city and will add 
// will add a function and will make that data to store as object
async function checkWeather(city){
   
  const response = await fetch(
    "https://api.openweathermap.org/data/2.5/weather?q="+ city +"&appid="
    +apiKey+
    "&units=metric"
  );
  
  // step 5
  if (response.status===404){
    document.querySelector(".error").style.display="block";
    document.querySelector(".Weather").style.display = "none";
   } else{

    var data = await response.json();
   
  
//  data hat we got from above need to be displayed in screen

 document.querySelector(".city").innerHTML = "Weather in "+ data.name;
 document.querySelector(".temperature").innerHTML = Math.round(data.main.temp)+"°C";
 document.querySelector(".description").innerHTML = data.weather[0].description;
 document.querySelector(".humidity").innerHTML= "Humidity:"+ data.main.humidity +"%";
 document.querySelector(".speed").innerHTML = "Wind Speed: "+data.wind.speed + "km/hr";
 document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png";

 
 document.querySelector(".Weather").style.display = "block";
 document.querySelector(".error").style.display="none";

   }


  
}

// step:4
searchButton.addEventListener("click",function(){
 checkWeather(searchBox.value);
})

searchBox.addEventListener("keydown",function(event){
  if(event.key==="Enter"){
    checkWeather(searchBox.value);
  }
})

