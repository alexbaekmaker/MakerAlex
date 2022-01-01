import React, { useState } from 'react'
import './ScheduledPayments.css'
import Company from './Company'
import { render } from '@testing-library/react'

function CompanyList({ indexValue }) {

    const companyData = [
        { id: 1, rate: "3.99", img: "https://1000logos.net/wp-content/uploads/2017/05/youtube-symbol.jpg", company: "Youtube" },
        { id: 2, rate: "5.99", img: "https://www.freepnglogos.com/uploads/netflix-logo-circle-png-5.png", company: "Netflix" },
        { id: 3, rate: "2.99", img: "https://www.4kshooters.net/wp-content/uploads/2017/02/Vimeo.png", company: "Vimeo" },
        { id: 4, rate: "15.00", img: "https://www.freepnglogos.com/uploads/spotify-logo-png/spotify-download-logo-30.png", company: "Spotify" },
        { id: 5, rate: "6.99", img: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg", company: "Apple" },
        { id: 6, rate: "10.99", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Crunchyroll_Logo.png/857px-Crunchyroll_Logo.png", company: "Crunchyroll" }
    ]

    var subset = companyData.slice(indexValue, indexValue + 4)

    return (

        subset.map((company) => <Company rate={company.rate} img={company.img} company={company.company} />)

    ) // maps through the array of companies and returns each company printed out in its own module

}

export default CompanyList