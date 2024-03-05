import { observer } from "mobx-react";
import { useEffect, useState } from "react";
import GlobalState from "../store/GlobalState";
import Detailsview from "./Detailsview";
import Service from "./Service";

const User=observer((store)=>{
    return(
<>

<div style={{position: 'fixed', top: '2px',marginLeft: '301px'}}>
    <Detailsview/>
    </div>
<div  style={{ position: 'relative', top: '25px'}}>
    <Service/>
</div>
</>)
})
export default User