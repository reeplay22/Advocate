var React = require('react');

// var WeatherNextMessage = React.createClass({
//   render: function(){
//
//     var {wind, clouds, humidity, weatherMain, weatherDescription} = this.props;
//     return(
//       <div>
//         <ul className="text-center">
//         <li>wind: {wind} mph</li>
//         <li>clouds: {clouds} %</li>
//         <li>humidity: {humidity}</li>
//         <li>weather: {weatherMain} and {weatherDescription}</li>
//         </ul>
//       </div>
//     );
//   }
// });

// this.props.forecast.forEach(function(day) {
    //         dayDate: day.dt_txt,
    //         dayTemp: daymain.temp,
    //         dayTempMax: day.main.temp_max,
    //         dayTempMin: day.main.temp_min,
    //         dayWind: day.wind.speed,
    //         dayClouds: day.clouds.all,
    //         dayHumidity: day.main.humidity,
    //         dayDescription: data.weather.description,
    //         }, this);

var WeatherNextMessage = React.createClass({

 getInitialState: function() {
   return {
     pause: true
   }
    
 },

render: function() {
  
  var {pause} = this.state;
  var {forecast} = this.props;

    
    return(<table>   
        {forecast.map((day, index)=>{  
          console.log(day); 
          var date = new Date(day.dt_txt).toDateString();
          var time;
          //var time = date.getHours() + ":" + date.getMinutes();
         // while(index <= 4){      
          return <div>
            <h6>Date: {date}</h6>
            <h6>Time: {}</h6>
            <div className="text-center">
              <ul className="text-left">
                <li>Temp: {day.main.temp}</li>
                <li  className="temp tempMax">Hi: {day.main.temp_max}</li>
                <li className="temp tempMin">Lo: {day.main.temp_min}</li>
                <li>wind: {day.wind.speed}</li>
                <li>clouds {day.clouds.all}</li>
                <li>humidity: {day.main.humidity}</li>
                <li>description: {day.weather.description}</li>
              </ul>
            </div>
          </div>
        })}
        </table>
        );
      
  }

    });
module.exports = WeatherNextMessage;

 // dayDate: day.dt_txt,
            // dayTemp: day.main.temp,
            // dayTempMax: day.main.temp_max,
            // dayTempMin: day.main.temp_min,
            // dayWind: day.wind.speed,
            // dayClouds: day.clouds.all,
            // dayHumidity: day.main.humidity,
            // dayDescription: data.weather.description,
            // }, this);



  // <div>
  //       <h6>Today: {todayDate}</h6>
  //       <div className="text-center">
  //         <ul className="text-left">
  //           <li>Temp: {todayTemp}</li>
  //           <li  className="temp tempMax">Hi: {todayTempMax}</li>
  //           <li className="temp tempMin">Lo: {todayTempMin}</li>
  //           <li>wind: {todayWind}</li>
  //           <li>clouds {todayClouds}</li>
  //           <li>humidity: {todayHumidity}</li>
  //           <li>description: {todayDescription}</li>
  //         </ul>
  //       </div>
  //     </div>

// todayDate,
// todayTemp,
// todayTempMax,
// todayTempMin,
// todayWind,
// todayClouds,
// todayHumidity,
// todayDescription,

// tommorrowDate,
// tommorrowTemp,
// tommorrowTempMax,
// tommorrowTempMin,
// tommorrowWind,
// tommorrowClouds,
// tommorrowHumidity,
// tommorrowDescription,

// thirdDayDate,
// thirdDayTemp,
// thirdDayTempMax,
// thirdDayTempMin,
// thirdDayWind,
// thirdDayClouds,
// thirdDayHumidity,
// thirdDayDescription,

// fourthDayDate,
// fourthDayTemp,
// fourthDayTempMax,
// fourthDayTempMin,
// fourthDayWind,
// fourthDayClouds,
// fourthDayHumidity,
// fourthDayDescription,

// fifthDayDate,
// fifthDayTemp,
// fifthDayTempMax,
// fifthDayTempMin,
// fifthDayWind,
// fifthDayClouds,
// fifthDayHumidity,
// fifthDayDescription 



// <div>
//       <h6>Tommorrow: {tommorrowDate}</h6>
//         <div>
//           <p>Temp: {tommorrowTemp}</p>
//           <p>Hi: {tommorrowTempMax}</p>
//           <p>Lo: {tommorrowTempMin}</p>
//           <p>wind: {tommorrowWind}</p>
//           <p>clouds {tommorrowClouds}</p>
//           <p>humidity: {tommorrowHumidity}</p>
//           <p>description: {tommorrowDescription}</p>
//         </div>
//     </div>
//     <div>
//       <h6>ThirdDay: {thirdDayDate}</h6>
//         <div>
//           <p>Temp: {thirdDayTemp}</p>
//           <p>Hi: {thirdDayTempMax}</p>
//           <p>Lo: {thirdDayTempMin}</p>
//           <p>wind: {thirdDayWind}</p>
//           <p>clouds {thirdDayClouds}</p>
//           <p>humidity: {thirdDayHumidity}</p>
//           <p>description: {thirdDayDescription}</p>
//         </div>
//     </div>
//     <div>
//       <h6>FourthDay: {fourthDayDate}</h6>
//         <div>
//           <p>Temp: {fourthDayTemp}</p>
//           <p>Hi: {fourthDayTempMax}</p>
//           <p>Lo: {fourthDayTempMin}</p>
//           <p>wind: {fourthDayWind}</p>
//           <p>clouds {fourthDayClouds}</p>
//           <p>humidity: {fourthDayHumidity}</p>
//           <p>description: {fourthDayDescription}</p>
//         </div>
//     </div>
//     <div>
//       <h6>FifthDay: {fifthDayDate}</h6>
//         <div>
//           <p>Temp: {fifthDayTemp}</p>
//           <p>Hi: {fifthDayTempMax}</p>
//           <p>Lo: {fifthDayTempMin}</p>
//           <p>wind: {fifthDayWind}</p>
//           <p>clouds {fifthDayClouds}</p>
//           <p>humidity: {fifthDayHumidity}</p>
//           <p>description: {fifthDayDescription}</p>
//         </div>
//     </div>
