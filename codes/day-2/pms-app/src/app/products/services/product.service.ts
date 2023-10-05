import { Product } from "src/app/models/product";
import { products } from "src/app/repository/products";
import { IProductServiceContract } from "./product-service.contract";

export class ProductService implements IProductServiceContract {
    getProducts(): Product[] {
        //spread operator (...)
        return [...products]
    }
}