import React from 'react'
import Image  from 'next/image'
function LargeCard({img, title, description, buttonText}) {
    return (
        <section className = "relative py-16 cursor-pointer">
            <div className = "relative h-96 min-w-[300px]">
                <Image src = {img} layout = "fill" objectFit = "cover" className = "rounded-2xl"/>
                
            </div>


            <div className = "absolute top-32 left-12">
                <h3 className = "text-[40px] mb-3 w-64 text-white font-bold">{title}</h3>
                <p className = "text-[18px] text-white">{description}</p>
                <button className = "bg-white px-4 py-2 mt-10 rounded-lg">{buttonText}</button>
            </div>
            
            
        </section>
    )
}

export default LargeCard
