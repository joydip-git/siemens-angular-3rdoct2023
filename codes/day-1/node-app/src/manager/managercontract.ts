export interface Manager<T> {
    add(data: T): boolean;
    remove(id: number): boolean;
    update(id: number, data: T): boolean;
    get(id: number): T;
    getAll(): T[];
}