import React from 'react'
import { useEffect,useState } from 'react'
import { motion } from 'framer-motion'
import './Gallery.css'


const Gallery = () => {
  const [dataImg, setDataImg] = useState([]);


  useEffect(()=>{

    const fetchImg = async () =>{
      try {
        const res = await fetch(process.env.PUBLIC_URL+'/data/data.json');
        const data = await res.json();
        setDataImg(data);

      } catch (error) {
        console.error('Faild',error);
      }
    }
    fetchImg();
  },[]);

  return (
    <div className='gallery-outbox'>
      {/* 흐르는 이미지 시작 */}
      <div className='scroll-img'>
        <div className='scroll-track'>
          {
            dataImg.concat(dataImg).map((item, idx)=>(
              <div className='scroll-inbox' key={idx}>
                <div>{item.title}</div>
                <img src={process.env.PUBLIC_URL + item.src} alt={item.title} />
                <div>{item.dis}</div>
              </div>
            ))
          }
          </div>
        </div>
          {/* 페이드 이미지 */}
          <motion.div
            className='fade-section'
            initial={{opacity:0, y:60}}
            whileInView={{opacity:1, y:0}}
            transition={{duration:1.5, ease:'easeOut'}}
            viewport={{once:true, amount:0.4}}
          >
            <div className='img-box'>
              <img src={process.env.PUBLIC_URL + '/rootImages/tree1.jpg'}
                alt='img'/>
            </div>
            <div className='text-box'>
              <h2>hello</h2>
              <h4>hello, hello</h4>
            </div>
          </motion.div>
          <motion.div
            className='fade-section'
            initial={{opacity:1, y:30}}
            whileInView={{opacity:2, y:0}}
            transition={{duration:2, ease:'easeOut'}}
            viewport={{once:true, amount:1}}
          >
            <div className='img-box'>
              <img src={process.env.PUBLIC_URL + '/rootImages/tree2.jpg'}
                alt='img'/>
            </div>
            <div className='text-box'>
              <h2>hello</h2>
              <h4>hello, hello</h4>
            </div>
          </motion.div>

          {/* 모아지는 이미지 */}
          <div className='group-img'>
            {
              [0,1,2,3].map((i)=>(
                <motion.img 
                  key={i}
                  src={process.env.PUBLIC_URL + `/rootImages/tree${i+1}.jpg`}
                  initial={{opacity:0,y:100}}
                  whileInView={{opacity:1, y:0}}
                  transition={{duration:1, delay: i*0.5}}
                  viewport={{once:true, amount:0.5}}
                />
              ))
            }
          </div>
    </div>
  )
}

export default Gallery