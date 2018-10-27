import { Component } from "@angular/core";
import { AppService } from "../../services/app.service";
import { NavParams } from "ionic-angular";
import { Lista, ListaItem } from "../../models";

@Component({
    selector: 'app-add-list',
    templateUrl: 'add-list.component.html'
})

export class addList{
    list: Lista;
    nameItem: string = "";

    constructor(
        public _AppService: AppService,
        private _navParams: NavParams
    ){
        if(this._navParams.get('list')) {
            this.list = this._navParams.get('list')
        }else{
            this.list = new Lista(
                this._navParams.get("title")
            );
            this._AppService.addNewList( this.list );
        }        
    }

    addTask(){
        if(this.nameItem.length <= 0)
            return;

        const newItem = new ListaItem(this.nameItem);
        this.list.items.push( newItem);
        this._AppService.saveStorage();
        this.nameItem = "";
    }

    updateTask( item: ListaItem ){
        item.isComplete = !item.isComplete;
        this._AppService.saveStorage();
    }

    deleteTask( index: number ){
        this.list.items.splice( index, 1);
        this._AppService.saveStorage();
    }
}