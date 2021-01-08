import React from 'react'

function Hoc(Wrappedcomponent) {

    const colors = ["blue","red", "yellow", "orange", "pink", "green", "indigo", "purple", "white"]
    const randomColor = colors[Math.floor(Math.random() * 9)]
    const className = randomColor + "-text"
    return (props) => {
        return (
            <div className={className}>
                <Wrappedcomponent {...props}/>
            </div>
        )
    }

}

export default Hoc