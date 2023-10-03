export class Employee {
    private _name: string;
    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }
    private _id: number;
    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }
    private _basicPayment: number;
    public get basicPayment(): number {
        return this._basicPayment;
    }
    public set basicPayment(value: number) {
        this._basicPayment = value;
    }
    private _daPayment: number;
    public get daPayment(): number {
        return this._daPayment;
    }
    public set daPayment(value: number) {
        this._daPayment = value;
    }
    private _hraPayment: number;
    public get hraPayment(): number {
        return this._hraPayment;
    }
    public set hraPayment(value: number) {
        this._hraPayment = value;
    }

    public constructor(name: string, id: number, basic: number, da: number, hra: number) {
        this._name = name
        this._id = id
        this._basicPayment = basic
        this._daPayment = da
        this._hraPayment = hra
    }
    public calcultateSalary(): number {
        return this.basicPayment + this.daPayment + this.hraPayment
    }
}