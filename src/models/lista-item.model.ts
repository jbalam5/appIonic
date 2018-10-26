export class ListaItem{
    desc: string;
    isComplete: boolean;

    constructor( desc: string ){
        this.desc = desc;
        this.isComplete = false;
    }
}