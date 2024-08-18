import React from 'react'

export default function Finishscreen({maxpointes,pointes}) {
    const persentage=(pointes/maxpointes)*100;
  return (
    <p className='result'>
      you scored <strong>{pointes}</strong>
      out of {maxpointes} ({Math.ceil(persentage)})
    </p>
  )
}
