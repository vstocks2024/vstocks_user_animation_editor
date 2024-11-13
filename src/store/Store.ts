import { makeAutoObservable } from "mobx";
import { fabric } from "fabric";
import { MenuOption } from "../utils/types";

export class Store{
    canvas: fabric.Canvas | null;
    width:number;
    height:number;
    backgroundColor:string;
    selectedMenuOption: MenuOption;
    constructor(){
        this.canvas=null;
        this.width=775;
        this.height=436;
        this.backgroundColor="#333333";
        this.selectedMenuOption = null;
        makeAutoObservable(this);
    }
    setCanvas(canvas: fabric.Canvas | null) {
        this.canvas = canvas;
        if (canvas) {
          canvas.backgroundColor = this.backgroundColor;
        }
      }
      setSelectedMenuOption(selectedMenuOption: MenuOption) {
        this.selectedMenuOption = selectedMenuOption;
      }
}