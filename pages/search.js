import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useRouter } from 'next/dist/client/router'
import { format } from 'date-fns'
import InfoCard from '../components/InfoCard'


function Search({searchResults}) {
    console.log(searchResults)

    const router = useRouter()

    const{location, startdate, endDate, noOfGuests} = router.query;

    const formattedStartDate = format(new Date(startdate), "dd MMMM yy")
    const formattedEndDate = format(new Date(endDate), "dd MMMM yy")
    const range = `${formattedStartDate} - ${formattedEndDate}`


    return (
        <div>
           <Header placeholder = {`${location} | ${range} | ${noOfGuests}` }/>  

            <main className = "flex-grow pt-14 px-6">
                <section>
                    <p className = "text-xs">300+ stays - {range} for {noOfGuests} number of guests</p> 

                    <h1 className = "text-3xl mt-2 mb-5 ">Stays in {location}</h1>

                    <div className = "hidden lg:inline-flex space-x-4 whitespace-nowrap">
                    <p className = "button">Cancellation Flexibility</p>
                    <p className = "button">Type Of Place</p>
                    <p className = "button">Price </p>
                    <p className = "button">Rooms and Beds</p>
                    <p className = "button">More Filters</p>

                    </div>
                    <div className = "flex flex-col">
                    {searchResults.map(({img, location, title, description, star, price, total}) => (
                        <InfoCard
                        key = {img} 
                        img = {img}
                        location = {location}
                        title = {title}
                        description = {description}
                        star = {star}
                        price = {price}
                        total = {total}/>
                    ))}
                    </div>
                </section>
              
            </main>

           <Footer/>
        </div>
    )
}

export default Search

export async function getServerSideProps(){
    const searchResults = await fetch('https://links.papareact.com/isz').then((res) => res.json())
     return {
         props: {
            searchResults,
        }
     }
}