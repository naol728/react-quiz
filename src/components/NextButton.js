import React from 'react'

export default function NextButton({dispach,answer,numquations,index}) {

    if(answer===null) return null ;
   if(index <numquations-1) return (
    <button className='btn btn-ui' onClick={()=>dispach({type:"nextquestion"})}>
      Next
    </button>)
   if(index ===numquations-1) return (
    <button className='btn btn-ui' onClick={()=>dispach({type:"finished"})}>
      Finish
    </button>
  )
}
