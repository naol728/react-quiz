import React from 'react'

export default function Finishscreen({maxpointes,pointes,dispach}) {
    const persentage=(pointes/maxpointes)*100;
  return (
    <>
    <p className='result'>
      you scored <strong>{pointes}</strong>
      out of {maxpointes} ({Math.ceil(persentage)})
    </p>
    <button 
    className='btn btn-ui'
    onClick={()=>dispach({type:"reset"})}>
      restart quiz
    </button>
    </>
  )
}
