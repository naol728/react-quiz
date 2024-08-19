import {useEffect,useReducer} from 'react';
import './index.css';
import Header from './Header'
import Main from './Main'
import Loader from './Loader'
import Error from './Error'
import StartScreen from './StartScreen';
import Question from './Question';
import NextButton from './NextButton';
import Progress from './Progress';
import Finishscreen from './Finishscreen';
const initalstate={
 quations:[],
//   'loading' 'ready' 'active' 'error'
 status:'loading',
 index:0,
 answer:null,
 pointes:0,
}
function reducer (state,action){
switch(action.type){
  case "dataRecived":
    return {
      ...state,
       quations:action.payload,
       status:"ready"
    }
  case "start":
    return{
      ...state,
      status:"active"
    }
  case "newanswer":
    const question=state.quations.at(state.index);
      return{
        ...state,
        answer:action.payload,
        pointes:action.payload===question.correctOption ? state.pointes+question.points: state.pointes,
      }
  case 'nextquestion':
    return {
      ...state,
      index:state.index+1,
      answer:null
    }
  case "finished":
    return {
      ...state,
      status:"finished"
    }
  case "error":
      return {
        ...state,
        status:"error"
      }
  case "reset":
    return {
      ...initalstate,
      status:'ready',
      quations:state.quations
      
    }
  default :
   throw new Error("Action unkown")
}
}
function App() {
   const [{quations,status,index,answer,pointes},dispach]=useReducer(reducer,initalstate);
   const numquations=quations.length;
   const maxpointes=quations.reduce((prev,cur)=> prev+cur.points,0)
  useEffect(
    function (){
      
        async function datafetching(){
      
          try{  const res=await fetch("http://localhost:8000/questions");
        const data=await res.json();
        dispach({type:'dataRecived',payload:data})
      }
       catch(err){
        dispach({type:'error'})
       }
     }
     datafetching();
    },[]
  )

  return (
    <div className="App">
    <Header />
      
      <Main>
         {status==="loading" && <Loader />}
         {status==="error" && <Error />}
         {status==="ready" && <StartScreen numquations={numquations} dispach={dispach}/>}
         {status==="active" && 
         <>
         <Progress index={index} numquations={numquations} pointes={pointes} maxpointes={maxpointes} answer={answer} />
         <Question quations={quations[index]} answer={answer} dispach={dispach}/>
         <NextButton dispach={dispach}  answer={answer} numquations={numquations}  index={index}/>
         </>
         }
         {status==="finished" && <Finishscreen pointes={pointes}  maxpointes={maxpointes} dispach={dispach} />}
      </Main>
    </div>
  );
}

export default App;
