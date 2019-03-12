import React from 'react'
import JustAnotherDayPic from '../../Assets/JustAnotherDay.png'

const JustAnotherDay = () => {
    return (
        <div className = 'just-another-day'>
            <h3>Just Another Day</h3>
            <img src = {JustAnotherDayPic} alt = 'just another day' className = 'just-another-pic'/>
            <p className = 'just-another-day-desc'>My first project! Using HTMl, CSS, and Vanilla JavaScript, collision detection prevents the player from touching the bad guys, but rewards the player for reaching home. Using the arrow keys, ake it from one end of the map to the other without touching the sad faced bullies! <br/>
                <a href = 'https://pages.git.generalassemb.ly/adenney13/Just-Another-Day/code/landing.html'>Play Just Another Day!</a>
            </p>
        </div>
    )
}

export default JustAnotherDay