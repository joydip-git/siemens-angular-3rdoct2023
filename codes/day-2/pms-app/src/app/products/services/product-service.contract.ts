import { Product } from "src/app/models/product";

export interface IProductServiceContract {
    getProducts(): Product[];
}