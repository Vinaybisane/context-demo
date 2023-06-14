import React, { createContext, useContext, useState } from 'react';

import './App.css';
// import MainWrapper from './Mainwrapper/Mainwrapper';
import MainWrapperTwo from './MainWrapperTwo/MainWrapperTwo';

export const Mycontext = createContext({
  name:'test',
  id:0

});
export const authContext: any= createContext({islogin:false,
setFun:()=>{}
});

function App() {
 const initialvalue={
  name:'vinay',
  id:1
 };

 const [loginstate, setLoginstate]=useState(false);
 

  return (
   
  <authContext.Provider value={{islogin:loginstate, setFun:setLoginstate}}>
    <Mycontext.Provider value={initialvalue}>
    
  <div>
    {/* <MainWrapper /> */}
    <MainWrapperTwo />
    </div>
  
</Mycontext.Provider>

  </authContext.Provider>
  );
}

export default App;
