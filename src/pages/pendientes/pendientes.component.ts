import { Component } from "@angular/core";
import { AppService } from "../../services/app.service";
import { Lista } from "../../models";
import { NavController, AlertController } from "ionic-angular";
import { addList } from "../addList/add-list.component";

@Component({
    selector: 'app-pendientes',
    templateUrl: 'pendientes.component.html'
})

export class PendientesPage{
    constructor(
        public _AppService: AppService,
        private _navCtrl: NavController,
        private _alertCtrl: AlertController
    ) {}

    listSelected(list: Lista){
        console.log(list);
    }

    addNewList(){
        const alert = this._alertCtrl.create({
            title: 'Nueva lista',
            message: 'Nombre de la nueva lista',
            inputs: [{
                name: 'titulo',
                placeholder: 'Nombre de la lista',
            }],
            buttons: [{
                text: 'Cancelar'
            },{
                text: 'Agregar',
                handler: data => {
                    if( data.titulo.length > 0)
                        this._navCtrl.push( addList, { title: data.titulo })
                    else
                        return;
                }
            }]
        })
        alert.present();
    }
}