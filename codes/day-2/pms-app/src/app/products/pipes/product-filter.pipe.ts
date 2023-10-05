import { Pipe, PipeTransform } from "@angular/core";
import { Product } from "src/app/models/product";

@Pipe({
    name: 'filterproduct'
})
export class ProductFilterPipe implements PipeTransform {
    //rest operator(...args)
    transform(value: Product[], ...args: string[]): Product[] {
        return value.length > 0 && args.length > 0 && args[0] != '' ?
            value.filter(
                (p) => p
                    .productName
                    .toLocaleLowerCase()
                    .includes(args[0].toLocaleLowerCase())
            )
            : value;
    }
}