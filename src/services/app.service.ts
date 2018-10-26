import { Injectable  } from "@angular/core";
import { Lista } from "../models";

@Injectable()

export class AppService{
    listTask: Lista[] = [];

    constructor(){
        this.loadStorage();
    }

    addNewList( list: Lista){
        this.listTask.push( list );
        this.saveStorage();
    }

    saveStorage(){
        localStorage.setItem('data', JSON.stringify(this.listTask));
    }

    loadStorage(){
        if( localStorage.getItem("data") )
            this.listTask = JSON.parse(localStorage.getItem("data"));
        else
            this.listTask = [];
    }
}