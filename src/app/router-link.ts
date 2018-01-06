export class RouterLink{
    mUrl:string;
    mText:string;
    sort:number;
    constructor(values:Object = {}){
        Object.assign(this , values);
    }
}