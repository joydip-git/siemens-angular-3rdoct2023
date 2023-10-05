import { Product } from "src/app/models/product";
import { products } from "src/app/repository/products";
import { IProductServiceContract } from "./product-service.contract";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { API_URL } from "src/app/constants/app-constants";
import { Observable, map } from "rxjs";
import { ApiResponse } from "src/app/models/apiresponse";

//providedIn:'root' helps to register the service with the root module
//in that case yu don't need to use providers:[] property in the root module file for registration of this service
//@Injectable({ providedIn: 'root' })

@Injectable()
export class ProductService implements IProductServiceContract {

    constructor(private http: HttpClient) {

    }
    getProductById(id: number): Observable<ApiResponse<Product>> {
        return this.http.get<ApiResponse<Product>>(API_URL + '/' + id.toString())
    }
    getProducts(): Observable<ApiResponse<Product[]>> {
        //spread operator (...)
        //return [...products]

        const obsResponse: Observable<ApiResponse<Product[]>> = this.http.get<ApiResponse<Product[]>>(API_URL)
        return obsResponse

        /*
        const responseObs = this.http.get(API_URL)
        const apiResponseObs = responseObs
            .pipe(
                map(
                    (resp: any): ApiResponse<Product[]> => {
                        let mappedResp: ApiResponse<Product[]> = {
                            message: resp.message,
                            data: resp.data.map(
                                (p: any): Product => {
                                    return {
                                        productId: p.productId,
                                        productName: p.productName,
                                        productCode: p.productCode,
                                        price: p.price,
                                        description: p.description,
                                        releaseDate: p.releaseDate,
                                        imageUrl: p.imageUrl,
                                        starRating: p.starRating
                                    }
                                }
                            )
                        }
                        return mappedResp;
                    }
                )
            )
            */
    }
}