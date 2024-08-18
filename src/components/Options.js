export default function Options({quations}){
    return  <div className="options">
    {quations.options.map((option)=>(
     <button className="btn btn-option" key={option} >{option}</button>
    ))}
  </div>
}