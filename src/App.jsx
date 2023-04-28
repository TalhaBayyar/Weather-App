import {WeatherProvider} from './Context/WeatherProvider';
import Container from './Components/Container'
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  
  return (
    <div className="relative">
      <video
        className="absolute w-full h-full object-cover"
        autoPlay
        muted
        loop
      >
        <source src="/images/background-picture.mp4" type="video/mp4" />
      </video>
      <div className="relative z-10">
        <WeatherProvider>
          <Container />
        </WeatherProvider>
      </div>
    </div>
  )
}
export default App
