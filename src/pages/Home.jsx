import React,{useState,useEffect} from 'react'
import axios from 'axios';
import './Home.css';

// rafce 기본 함수 생성
const Home = () => {
    const images = [
        {src: 'tree1.jpg', title:'treeHi1'},
        {src: 'tree2.jpg', title:'treeHi2'},
        {src: 'tree3.jpg', title:'treeHi3'}
    ];
    const [inx,setInx] = useState(0);
    const [weather,setWeather] = useState(true);

    useEffect(()=>{
        const timer = setInterval(() => {
            setInx(prev => prev === images.length - 1 ? 0 : prev + 1);
        }, 5000);
        return () => clearInterval(timer); // return 다른 페이지로 넘어갈때 씀
    },[images.length]);

    useEffect(()=>{
        const API_KEY = 'a77dc0b837bf3d059de62157c5c63322';
        const CITY = 'ansan';
        const URL = `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=metric&lang=kr`;

        const fetchWeather = async () =>{
            try {
                const res = await axios.get(URL);
                setWeather(
                    {
                        temp : res.data.main.temp,
                        description : res.data.weather[0].description,
                        icon : res.data.weather[0].icon
                    }
                );
            } catch (error) {
                console.error('Error',error);
            }
        };
        fetchWeather();
    },[]);


  return (
    <div className='home-container'>
        {
            images.map((img,idx)=>(
                <div key = {idx}
                className={`slide ${inx === idx ? 'active' : ''}`}
                style={{backgroundImage: `url(${process.env.PUBLIC_URL}/rootImages/${img.src})`}} // 중괄호 안에 중괄호가 들어가는 이유는 js사용한다 그랬는데 중괄호 하나면 css를 못읽음.
                >
                <h1 className={`slide-title ${inx === idx ? 'on' : ''}`}>{img.title}</h1>
                </div>    
            ))
        }

        {
            weather && (
                <div className='weather'>
                    <img 
                    src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`}
                    alt={weather.description}
                    referrerPolicy='no-referrer' />
                    <div>{weather.temp} ℃</div>
                    <div>{weather.description}</div>
                </div>
            )
        }
    </div>
  )
}

export default Home