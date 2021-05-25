import Basket from '../main/shoppingBasket';
import Repository from '../main/repository';

describe('Shopping basket', () => {
    const repository = new Repository();
    const basket = new Basket(repository)
    describe('when 5 items are added', () => {
        it('then it should save it to the repository', () => {
            const item = 'An Item'
            const quantity = 5;
            basket.addItem(item, quantity);

            expect(repository.save).toBeCalledWith({item, quantity})

        });
    })
})