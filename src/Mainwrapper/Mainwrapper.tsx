import { useContext } from "react"
import { Mycontext } from "../App";

const MainWrapper=()=>{
    const Usercontext=useContext(Mycontext)
    return(
        <div>
            <p>main wrapper {Usercontext.name}</p>
        </div>
    )
};
export default MainWrapper;