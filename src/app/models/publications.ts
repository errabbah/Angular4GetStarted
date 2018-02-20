
export interface IPublication{
    status: boolean;
    code:number;
    display:boolean;
    results:IResults;
}

export interface IResults{
    items:IItem[];

}
export interface IItem {
    cover: string;
    price: number;
    label: string;

}
