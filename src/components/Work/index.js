import React, {useEffect, useState} from 'react';
import './index.scss'
import Loader from 'react-loaders'
import AnimatedLetters from "../AnimatedLetters";
import workData from "../../data/work.json";

const Work = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  
  console.log(workData);


  useEffect(() => {
      setTimeout(() => {
        setLetterClass('text-animate-hover')
     }, 3000);
   }, [])

   const renderWork = (work) => {
    return (
        <div className="images-container">
            {
                work.map((port, idx) => {
                    return (
                        <div className="image-box" key={idx}>
                            <img 
                            src={port.cover}
                            className="portfolio-image"
                            alt="portfolio" />
                            <div className="content">
                                <p className="title">{port.name}</p>
                                <h4 className="description">{port.description}</h4>
                                <button
                                    className="btn"
                                    onClick={() => window.open(port.url)}
                                >View</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
}

    
        return (
            <>
              <div className="container work-page">
                <h1 className='page-title'>
                <AnimatedLetters
                        letterClass={letterClass}
                        strArray={"Portfolio".split("")}
                        idx={15}
                    />

                </h1>
                <div>{renderWork(workData.work)}</div>

              </div>
              let loader = <Loader type="ball-scale-ripple-multiple" />
              </>
      )

     

            

}

export default Work