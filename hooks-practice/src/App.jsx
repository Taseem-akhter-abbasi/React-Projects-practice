import USEstae from './USEstae'
import Problem2 from './Problem2'
import CHaractercounter from './CHaractercounter'
import TODOLIST from './TODOLIST.JSX'
import Colorswitvher from './Colorswitvher'
import Searchfilter from './Searchfilter'
import EFFECT from './EFFECTuse'
import Usecontext from './Usecontext'
import Useref from './Useref'
import Usememo from './Usememo'
import { createContext } from 'react'

const data = createContext();
const data2 = createContext();


function App() {
 
  const name = "taseem";
  const gender = "female";



  return (
    <>
      <USEstae/>
      <Usememo/>
      <Problem2/>
      <CHaractercounter/>
      <TODOLIST/>
      <Colorswitvher/>
      <Searchfilter/>
      <EFFECT/>
      <Useref/>
      <data.Provider value={name}>
        <data2.Provider value={gender}>
          <Usecontext/>

        </data2.Provider>
      </data.Provider>
    </>
  )
}

export default App;
export {data, data2};
