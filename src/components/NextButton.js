import React from 'react'

export default function NextButton({dispach,answer}) {
    if(answer===null) return null ;

  return (
    <button className='btn btn-ui' onClick={()=>dispach({type:"nextquestion"})}>
      Next
    </button>
  )
}
