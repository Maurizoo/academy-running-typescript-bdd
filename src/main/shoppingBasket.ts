import ProductRepository from './repository';
import * as stream from 'stream';

export default class Basket {
    private productRepository: ProductRepository;
    private basketRepository = new BasketRepository();

    constructor(repository: ProductRepository) {
        this.productRepository = repository;
    }

    addItem(item: string, quantity: number) {
        this.basketRepository.set(item, quantity);
        throw new Error('addItem not implemented');
    }
    
    showShoppingBasket() {
        throw new Error('showShoppingBasket not implemented');
    }
}