import React from 'react'

const main = () => {
  let Time = new Date();
  return (
    <div>
     <p>Now The Time And Date Is : {Time.toLocaleDateString()} : {Time.toLocaleTimeString()}</p>  
    </div>
  )
}

export default main
