import { Employee } from "./employee";

export class Hr extends Employee {

    constructor(_name: string, _id: number, _basic: number, _da: number, _hra: number, private _gratuityPayment: number) {
        super(_name, _id, _basic, _da, _hra)
    }

    public get gratuityPayment(): number {
        return this._gratuityPayment;
    }
    public set gratuityPayment(value: number) {
        this._gratuityPayment = value;
    }

    public calcultateSalary(): number {
        return super.calcultateSalary() + this._gratuityPayment
    }
}