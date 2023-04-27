import { React, useContext } from 'react'
import { WeatherContext } from '../Context/WeatherProvider';

function DayList() {
  const { weatherinfo } = useContext(WeatherContext)

  const formatDay = (dateStr) => {
    const daysOfWeek = ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'];
    const date = new Date(dateStr);
    return daysOfWeek[date.getDay()]; 
  }
  const formatHours = (hoursStr) => {
    const date = new Date(hoursStr);
    const hours = date.getHours();
    if(hours >= 10){
      return hours + ":00"
    }else{
      return "0" + hours + ":00"
    }
  }

  return (
    <div className='flex justify-center'> 
      <div className="flex flex-wrap">
      {
        weatherinfo.map((data, index) => (
          <div key={index} className="shadow-[120px_55px_100px_-15px_rgba(0,0,0,0.3)] w-1/3 xs:w-2/5 lg:w-1/5 lg:p-12 mt-8">
            <h2 className="text-center font-bold text-base text-[10px] sm:text-[22px] lg:text-2xl">{formatDay(data.dt_txt)} {formatHours(data.dt_txt)}</h2>
            <div className='flex items-center justify-center filter brightness-125'>
              <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt="Hava Durumu" className="w-20 h-20 "/>
            </div>
            <p className='text-center font-bold'>{parseInt(data.main.temp)}&#8451;</p>
            <p className='text-center font-bold'>{data.weather?.[0].description}</p>
          </div> 
        ))
      }  
      </div>
    </div>
  )
}
export default DayList


