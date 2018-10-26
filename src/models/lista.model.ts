import { ListaItem } from "./lista-item.model";

export class Lista{
    id: number;
    title: string;
    dateCreate: Date;
    dateComplete: Date;
    isComplete: boolean;
    items: ListaItem[];

    constructor( title: string ){
        this.title = title;
        this.isComplete = false;
        this.dateCreate = new Date();
        this.items = [];
        this.id = new Date().getTime();
    }
}