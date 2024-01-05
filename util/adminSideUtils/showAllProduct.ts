import { IProduct } from '../../models/products';

export function showAllProducts(products: IProduct[]): Omit<IProduct, 'description'>[] {
    return products.map(product => {
        const { description, ...productWithoutDescription } = product;
        return productWithoutDescription as Omit<IProduct, 'description'>;
    });
}
