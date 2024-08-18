import {useEffect,useReducer} from 'react';
import './index.css';
import Header from './Header'
import Main from './Main'
import Loader from './Loader'
import Error from './Error'
import StartScreen from './StartScreen';
import Question from './Question';

const initalstate={
 quations:[],
//   'loading' 'ready' 'active' 'error'
 status:'loading',
 index:0,

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
    case "error":
      return {
        ...state,
        status:"error"
      }
  default :
   throw new Error("Action unkown")
}
}
function App() {
   const [{quations,status,index},dispach]=useReducer(reducer,initalstate);
   const numquations=quations.length;
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
         {status==="active" && <Question quations={quations[index]}/>}
      </Main>
    </div>
  );
}

export default App;
