import People from './People'
import React from 'react'

function PeopleList({ personData }) {


    const peopleData = [
        { id: 1, firstName: "Ted", lastName: "Lasso", img: "https://external-preview.redd.it/MMflGblLudSD_tqCefYHx1ei2_BWiT3ZJkBKMVHtXHc.jpg?auto=webp&s=6bedfc7ae24c712ac475eb8b533b46109860b4f7" },
        { id: 2, firstName: "Joe", lastName: "Biden", img: "https://cachedimages.podchaser.com/256x256/aHR0cHM6Ly9jcmVhdG9yLWltYWdlcy5wb2RjaGFzZXIuY29tL2U5MjlmMGE2YjcyMTJhMjA0YWViYWIyOWY5ZDEzZGU1LnBuZw%3D%3D/aHR0cHM6Ly93d3cucG9kY2hhc2VyLmNvbS9pbWFnZXMvbWlzc2luZy1pbWFnZS5wbmc%3D" },
        { id: 3, firstName: "Shiba", lastName: "Inu", img: "https://pbs.twimg.com/profile_images/610150821397987331/qZzryLFn_400x400.jpg" },
        { id: 4, firstName: "Elon", lastName: "Musk", img: "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTc5OTk2ODUyMTMxNzM0ODcy/gettyimages-1229892983-square.jpg" },
    ]
    const finalList = peopleData.concat(personData)


    return (
        finalList.map((person) => <People lastName={person.lastName} img={person.img} firstName={person.firstName} />)
    )



    // maps through the array of people and returns each person and their data in their own module
}
export default PeopleList