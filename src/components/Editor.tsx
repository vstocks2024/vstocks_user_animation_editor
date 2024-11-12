/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { observer } from 'mobx-react'
import React, { useEffect } from 'react'
import { StoreContext } from '../store';
import { fabric } from 'fabric';
import { MainCanvas } from './MainCanvas';

export const Editor = observer(() => {
    const store = React.useContext(StoreContext);
    document.title = "Editor--VSTOCKS";
    useEffect(() => {
        let canvas = new fabric.Canvas("lower-canvas", {
          height: store.height,
          width: store.width,
          backgroundColor: "#242832",
          preserveObjectStacking:true,
          
        });
        fabric.Object.prototype.transparentCorners = true;
    
        fabric.Object.prototype.cornerStyle = "rect";
    
        fabric.Object.prototype.cornerSize = 14;
    
        store.setCanvas(canvas);
    
        fabric.util.requestAnimFrame(function render() {
          canvas.renderAll();
          fabric.util.requestAnimFrame(render);
        });

        return ()=>{
        
          canvas.dispose();
        }
      }, []);

        
    
  return (
    <main>
    <MainCanvas/>
    </main>
  )
});

