import { useContext } from "react"
import { Mycontext, authContext } from "../App";

const MainWrapperTwo=()=>{
    const Usercontext=useContext(Mycontext)
    const logincontext:any =useContext(authContext)

    const content = logincontext.islogin?
     (   <p>main wrapper Two {Usercontext.name}</p>)
     :(<span>is false</span>);
    return(
        <div>
            <div>
                context name {content}
            </div>
            <button onClick={()=>{logincontext.setFun(!logincontext.islogin)}}>change state</button>
        </div>
    )
};
export default MainWrapperTwo;