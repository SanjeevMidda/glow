import React, { useState } from 'react'

function Word({word, left, top, status, fontSize}) {
    
    console.log(status)
    const [wordDisplay, setWordDisplay] = useState(status);

    let styles ={
        left: left,
        top: top,
        fontSize: fontSize,
    }
  return (
    <div className="word" style={styles}>
        <h3>{wordDisplay? word : "hello."}</h3>
    </div>
  )
}

export default Word