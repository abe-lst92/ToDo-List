import React from 'react'





function Widgets() {
    const time = new Date();
    const hours = time.getHours();
    const minutes = time.getMinutes();
    return (

        //Iframes
        //shows the current time
        // links for internal pages
        // search box
        //530
        // think css size placement position best practices.




        <div>
            <iframe scrolling="no" src="http://localhost:3000"></iframe>

            <div className="time">{hours} : {minutes} </div>

            <div className="links">
                <a href="/">Click Me</a>
                <a href="/">Test Me</a>
                <a href="/">Run Me</a>
            </div>

            <input type="search"></input>

        </div>
    )
}

export default Widgets
