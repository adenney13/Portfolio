import React from 'react'
import CheatMeal from '../CheatMeal/CheatMeal'
import JustAnotherDay from '../JustAnotherDay/JustAnotherDay'
import TornadosFC from '../TorandosFC/TornadosFC'

const Work = () => {
    return (
        <div className = 'work-stuff'>
            <h2>My Work</h2>
            <JustAnotherDay />
            <CheatMeal />
            <TornadosFC />
        </div>
    )
}

export default Work