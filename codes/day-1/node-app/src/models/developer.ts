import { Employee } from "./employee";

export class Developer extends Employee {

    //private _incentivePayment: number;
    constructor(_name: string, _id: number, _basic: number, _da: number, _hra: number, private _incentivePayment: number) {
        super(_name, _id, _basic, _da, _hra)
        //this._incentivePayment = _incentivePayment
    }

    public get incentivePayment(): number {
        return this._incentivePayment;
    }
    public set incentivePayment(value: number) {
        this._incentivePayment = value;
    }

    public calcultateSalary(): number {
        return super.calcultateSalary() + this._incentivePayment
    }
}