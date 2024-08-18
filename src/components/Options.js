export default function Options({quations,dispach,answer}){
    const hasanswer=answer!== null
    return  <div className="options">
    {quations.options.map((option,index)=>(
     <button className={`btn btn-option  ${   answer===index ? 'answer':''} ${hasanswer ? index===quations.correctOption ? 'correct':'wrong' : " "} `} key={option} onClick={()=>dispach({type:"newanswer",payload:index})} disabled={hasanswer}>{option}</button>
    ))}
  </div>
}