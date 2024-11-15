import { observer } from "mobx-react";
import React from "react";
import { StoreContext } from "../store";

export const VideoResource=observer(()=>{
    const store = React.useContext(StoreContext);
    console.log(store);
    return (<></>);
});