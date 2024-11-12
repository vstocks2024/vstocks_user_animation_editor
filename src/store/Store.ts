import { makeAutoObservable } from "mobx";
import { fabric } from "fabric";

export class Store{
    canvas: fabric.Canvas | null;
    width:number;
    height:number;
    backgroundColor:string;
    constructor(){
        this.canvas=null;
        this.width=775;
        this.height=436;
        this.backgroundColor="#333333"
        makeAutoObservable(this);
    }
    setCanvas(canvas: fabric.Canvas | null) {
        this.canvas = canvas;
        if (canvas) {
          canvas.backgroundColor = this.backgroundColor;
        }
      }
}