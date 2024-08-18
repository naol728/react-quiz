import Options from "./Options"

export default function Question({quations}){
    console.log(quations)
    return <div>
        <h4>{quations.question}</h4>
         <Options quations={quations} />
    </div>
}