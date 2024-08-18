import './index.css'
export default function StartScreen({numquations,dispach}){
    return (
        <div className="start">
           <h2>Wellcome to The React Quiz </h2>
           <h3>{numquations} questions to test your react Mastery</h3>

           <button className='btn btn-ui' onClick={()=> dispach({type:'start'})}>Let's Start</button>
        </div>
    )
}