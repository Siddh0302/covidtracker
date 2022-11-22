import React, { useEffect,useState } from 'react'
import './covid.css';

const Covid = () => {

    const[data,setdata]=useState([]);

    const getCovidData = async ()=>{
    
    try {
        const res =await  fetch('https://data.covid19india.org/data.json');
        const actualData=await res.json();
        console.log(actualData.statewise[0]);
        setdata(actualData.statewise[0]);
    } catch (error) {
        console.log(error);        
    }
} 

useEffect(()=>{
    getCovidData();
}, []);

  return (
    <>
    <section>
    <h1 className='h1'>LIVE</h1>
    <h2 className='h2'>COVID-19 CORONAVIRUS TRACKER</h2>
    <ul>
        <li className='card1'>
            <div className='card__main1'>
                <div className='card__inner'>
                    <p className='card__name'><span> OUR</span> COUNTRY</p>
                    <p className='card_total card__small'>INDIA</p>
                </div>
            </div>
        </li>

        <li className='card2'>
            <div className='card__main2'>
                <div className='card__inner'>
                    <p className='card__name'><span> TOTAL</span> RECOVERED</p>
                    <p className='card_total card__small'>{data.deltarecovered}</p>
                </div>
            </div>
        </li>

        <li className='card3'>
            <div className='card__main3'>
                <div className='card__inner'>
                    <p className='card__name'><span> TOTAL</span> CONFIRMED</p>
                    <p className='card_total card__small'>{data.confirmed}</p>
                </div>
            </div>
        </li>

        <li className='card4'>
            <div className='card__main4'>
                <div className='card__inner'>
                    <p className='card__name'><span> TOTAL</span> DEATH</p>
                    <p className='card_total card__small'>{data.deaths}</p>
                </div>
            </div>
        </li>

        <li className='card5'>
            <div className='card__main5'>
                <div className='card__inner'>
                    <p className='card__name'><span> TOTAL</span> ACTIVE</p>
                    <p className='card_total card__small'>{data.active}</p>
                </div>
            </div>
        </li>

        <li className='card6'>
            <div className='card__main6'>
                <div className='card__inner'>
                    <p className='card__name'><span>LAST</span> UPDATED</p>
                    <p className='card_total card__small'>{data.lastupdatedtime}</p>
                </div>
            </div>
        </li>
    </ul>
    </section>
    </>
  )
}

export default Covid


