/*
export class Employee {
    private _name: string;
    private _id: number;
    private _basicPayment: number;
    private _daPayment: number;
    private _hraPayment: number;

 public constructor(name: string, id: number, basic: number, da: number, hra: number) {
        this._name = name
        this._id = id
        this._basicPayment = basic
        this._daPayment = da
        this._hraPayment = hra
    }

    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }
   
    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }
   
    public get basicPayment(): number {
        return this._basicPayment;
    }
    public set basicPayment(value: number) {
        this._basicPayment = value;
    }
   
    public get daPayment(): number {
        return this._daPayment;
    }
    public set daPayment(value: number) {
        this._daPayment = value;
    }

    public get hraPayment(): number {
        return this._hraPayment;
    }
    public set hraPayment(value: number) {
        this._hraPayment = value;
    }
   
    public calcultateSalary(): number {
        return this.basicPayment + this.daPayment + this.hraPayment
    }
}
*/
export class Employee {
    constructor(private _name: string, private _id: number, private _basicPayment: number, private _daPayment: number, private _hraPayment: number) {

    }

    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }

    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }

    public get basicPayment(): number {
        return this._basicPayment;
    }
    public set basicPayment(value: number) {
        this._basicPayment = value;
    }

    public get daPayment(): number {
        return this._daPayment;
    }
    public set daPayment(value: number) {
        this._daPayment = value;
    }

    public get hraPayment(): number {
        return this._hraPayment;
    }
    public set hraPayment(value: number) {
        this._hraPayment = value;
    }

    public calcultateSalary(): number {
        return this._basicPayment + this._daPayment + this._hraPayment
    }
}