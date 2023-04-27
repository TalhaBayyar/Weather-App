import { React, createContext, useEffect, useState } from 'react'
import axios from 'axios'
import data from "../Data/cities.json"

export const WeatherContext = createContext()
  
function WeatherProvider({ children }) {
  const [cities, setCities] = useState(data)
  const [sehir, setSehir] = useState("Eskişehir")
  const [weatherinfo, setWeatherinfo] = useState([])
 

  const API_KEY = '8d23efb8d2549ba8c72cc0243a57f331';
  const API_URL = `https://api.openweathermap.org/data/2.5/forecast?q=${sehir}&cnt=25&units=metric&lang=tr&appid=${API_KEY}`
  
   useEffect(() => {
     axios.get(API_URL)
     .then((res) => {
       setWeatherinfo(res.data.list)
         console.log(res.data.list)
     })
     .catch((error) => console.error(error))
   }, [sehir])

  return (
    <div>
      <WeatherContext.Provider value={{ cities, setCities, sehir, setSehir, weatherinfo, setWeatherinfo }}>
        { children }
      </WeatherContext.Provider>
        
      
    </div>
  )
}

export default WeatherProvider