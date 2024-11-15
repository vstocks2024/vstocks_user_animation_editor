/* eslint-disable @typescript-eslint/no-unused-vars */
import  { useContext, useEffect } from "react";
import { observer } from "mobx-react";
import { StoreContext } from "../store";

import {
  MdSave,
  MdFileDownload,
  MdContentCut,
  MdOutlineContentCopy,
  MdContentPaste,
  MdUndo,
  MdRedo,
  MdPlayArrow,
//   MdPause,
  MdFullscreen,
  MdDelete,
  MdLayers,
  MdHistory
} from "react-icons/md";




export const MainPart = observer(() => {
    const store=useContext(StoreContext);
  
    useEffect(()=>{
        console.log(store.canvas);
    })

  return (
    <div className=" bg-[#202020] py-1  dark:bg-[#202020] flex ">
      <div className="justify-between items-center flex-row py-2 flex w-full">
        <div className="inline-flex flex-row px-5  items-center  justify-start w-full">
          <button className="w-10 h-10">
            <span>
              <MdSave
                size={24}
                className="cursor-pointer"
              />
            </span>
          </button>
          <button className="w-10 h-10">
            <span>
              <MdFileDownload
                size={24}
                
                className=" cursor-pointer"
              />
            </span>
          </button>
          <button className="w-10 h-10">
            <span>
              <MdContentCut
                size={24}
               className=" cursor-pointer"
              />
            </span>
          </button>
          <button className="w-10 h-10">
            <span>
              <MdOutlineContentCopy
             className=" cursor-pointer"
             size={24}
              />
            </span>
          </button>
          <button className="w-10 h-10">
            <span>
              <MdContentPaste
              size={24} 
              className=" cursor-pointer" />
            </span>
          </button>
          <button  className="w-10 h-10">
            <span>
              <MdUndo  size={24} className=" cursor-pointer" />
            </span>
          </button>
          <button className="w-10 h-10">
            <span>
              <MdRedo size={24} className=" cursor-pointer" />
            </span>
          </button>
          <button className="w-10 h-10">
            <span>
              <MdHistory  size={24} className="cursor-pointer" />
            </span>
          </button>
        </div>
        <div className="inline-flex flex-row items-center  justify-end  w-full">
          <button className="w-10 h-10">
            <span>
              <MdDelete
                size={24}
                className="cursor-pointer"
              />
            </span>
          </button>
          <button className="w-10 h-10">
            <span>
              <MdPlayArrow
                size={24}
                className="cursor-pointer"
              ></MdPlayArrow>
            </span>
          </button>
          <button className="w-10 h-10">
            <span>
              <MdLayers size={24} className="cursor-pointer" />
            </span>
          </button>  
        </div>
      </div>
    </div>
  );
});