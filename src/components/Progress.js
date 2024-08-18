

export default function Progress({index,numquations,pointes,maxpointes,answer}) {
  return (
    <header className='progress'>
       <progress max={numquations} value={index + Number(answer !==null)}/>
      <p>Qustions <strong >{index+1} / {numquations}</strong></p>
      <p> <strong>{pointes}/{maxpointes}</strong> </p>
    </header>
  )
}
