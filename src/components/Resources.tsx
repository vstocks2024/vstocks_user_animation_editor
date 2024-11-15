

import { StoreContext } from "../store";
import { observer } from "mobx-react";
import { VideoResourcesPanel } from "../panels/VideoResourcePanel";
import { IoMdArrowBack } from "react-icons/io";
import React from "react";


export const Resources = observer(() => {
  const store = React.useContext(StoreContext);
  const selectedMenuOption = store.selectedMenuOption;
  return (<div className=" hidden min-[977px]:flex min-[977px]:flex-col min-[977px]:justify-start w-auto max-w-[250px] h-full  bg-[#303030]" >
      <div className=" inline-flex items-center flex-row h-10 bg-black  justify-between">
        <h3 className="m-1 p-1 font-bold text-[14px]">{store.selectedMenuOption}</h3>
        <button onClick={()=>{store.selectedMenuOption=null}} className=" m-0.5 p-0.5">
          <IoMdArrowBack size={24}/>
        </button>
        </div>
      {selectedMenuOption === "Video" ? <VideoResourcesPanel /> : null}
      
    </div>
  );
});
