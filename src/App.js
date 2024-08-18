import {useEffect,useReducer} from 'react';
import './index.css';
import Header from './Header'
import Main from './Main'
import Loader from './Loader'
import Error from './Error'
import StartScreen from './StartScreen';

const initalstate={
 quations:[],
//   'loading' 'ready' 'active' 'error'
 status:'loading'

}
function reducer (state,action){
switch(action.type){
  case 'dataRecived':
    return {
      ...state,
       quations:action.payload,
       status:"ready"
    }
    case 'error':
      return {
        ...state,
        status:'error'
      }
  default :
   throw new Error("Action unkown")
}
}
function App() {
   const [{status ,quations},dispach]=useReducer(reducer,initalstate);
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
         {status==="ready" && <StartScreen />}
      </Main>
    </div>
  );
}

export default App;
