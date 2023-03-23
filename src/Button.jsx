import React from 'react'

function Button(props) {
    const data =()=>{
        props.changeData();
    }
  return (
    <>
 <button onClick={data}>update</button>      
    </>
  )
}

export default Button
