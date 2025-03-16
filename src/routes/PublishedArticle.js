import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Content from "../Content.js";
import "../PublishedArticle.css";

import Data from '../Data-2024.json';
import containerImage from '../images/Container-image.png';
import SecondData from '../Data-2023.json';  // Assuming you have another JSON file for different years
import ThirdData from '../Data-2022.json';
import FourthData from '../Data-2021.json';
import FifthData from '../Data-2020.json';
import SixthData from '../Data-2019.json';

function PublishedArticle() {
    const [activeYear, setActiveYear] = useState('2024'); // Set initial year
    const [data, setData] = useState([]);

    useEffect(() => {
        switch (activeYear) {
            case '2024':
                setData(Data);  // Use the appropriate data for 2024
                break;
            case '2023':
                setData(SecondData);  // Use the appropriate data for 2023
                break;

            case '2022':
                setData(ThirdData);  // Use the appropriate data for 2023
                break;

            case '2021':
                setData(FourthData);  // Use the appropriate data for 2023
                break;

            case '2020':
                setData(FifthData);  // Use the appropriate data for 2023
                break;

            case '2019':
                setData(SixthData);  // Use the appropriate data for 2023
                break;
            // Add more cases for other years and their corresponding data
            default:
                setData([]);
        }
    }, [activeYear]);

    return (
        <>
            <div className="central">
                <img src={containerImage} alt="My Local Image" className="right-image" style={{ height: '35vh' }} />
                <h2>PUBLISHED ARTICLES</h2>
            </div>

            <nav className='second-link'>
                <div><Link to="#" onClick={() => setActiveYear('2024')}>2024</Link></div>
                <div><Link to="#" onClick={() => setActiveYear('2023')}>2023</Link></div>
                <div><Link to="#" onClick={() => setActiveYear('2022')}>2022</Link></div>
                <div><Link to="#" onClick={() => setActiveYear('2021')}>2021</Link></div>
                <div><Link to="#" onClick={() => setActiveYear('2020')}>2020</Link></div>
                <div><Link to="#" onClick={() => setActiveYear('2019')}>2019</Link></div>
            </nav>

            <div className='json-content'>
                <Content data={data} />
            </div>
        </>
    );
}

export default PublishedArticle;
