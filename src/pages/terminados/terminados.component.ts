import { Component } from "@angular/core";
import { AppService } from "../../services/app.service";
import { Lista } from "../../models";

@Component({
    selector: 'app-terminados',
    templateUrl: 'terminados.component.html'
})

export class TerminadosPage{
    constructor(public _AppService: AppService){
    }

    listSelected(list: Lista){
        console.log(list);
    }
}