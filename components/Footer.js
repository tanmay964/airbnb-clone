import React from 'react'

function Footer() {
    return (
        <div className = "grid grid-cols-2 md:grid-cols-4 px-20 py-14 gap-y-10 bg-gray-100">
            <div className = "space-y-4 text-xs text-gray-800">
                <h5 className = "font-bold">ABOUT</h5>
                <p>How Airbnb works</p>
                <p>Newsroom</p>
                <p>Investors</p>
                <p>Airbnb Plus</p>
                <p>Airbnb Luxe</p>
            </div>

            <div className = "space-y-4 text-xs text-gray-800">
                <h5 className = "font-bold">COMMUNITY</h5>
                    <p>Diversity & Belonging</p>
                    <p>Accessibility</p>
                    <p>Airbnb Associates</p>
                    <p>Host Afghan Refugees</p>
                    <p>Guest Referrals</p>
            </div>

            <div className = "space-y-4 text-xs text-gray-800">
                <h5 className = "font-bold">HOST</h5>
                    <p>Host Your Home</p>
                    <p>Host An Online Experience</p>
                    <p>Host An Experience</p>
                    <p>Responsible Hosting</p>
                    <p>Resource Centre</p>
            </div>

            <div className = "space-y-4 text-xs text-gray-800">
                <h5 className = "font-bold">SUPPORT</h5>
                    <p>Our COVID-19 Response</p>
                    <p>Help Centre</p>
                    <p>Cancellation Options</p>
                    <p>Neighbourhood Support</p>
                    <p>Trust & Safety</p>
            </div>
            
            <div>
            
            </div>
            
        </div>
    )
}

export default Footer
