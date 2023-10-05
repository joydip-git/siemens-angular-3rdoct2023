import { Observable } from "rxjs";
import { ApiResponse } from "src/app/models/apiresponse";
import { Product } from "src/app/models/product";

export interface IProductServiceContract {
    getProducts(): Observable<ApiResponse<Product[]>>;
    getProductById(id: number): Observable<ApiResponse<Product>>;
}