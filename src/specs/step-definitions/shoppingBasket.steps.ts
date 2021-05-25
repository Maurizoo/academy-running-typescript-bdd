import {defineFeature, loadFeature} from "jest-cucumber";
import {Account, Printer} from "../../main/account";
import Basket from '../../main/shoppingBasket';

const feature = loadFeature('./src/specs/features/shoppingBasket.feature')

defineFeature(feature, test => {
    const mockRepository = jest.fn()
    const repository = {
        get: mockRepository
    }
    let basket: Basket
    beforeEach(() => {
        basket = new Basket(repository)
    })

    test('Add items to shopping basket', ({ given, and, when, then }) => {
        given(/^I add (\d+) units of "(.*)" to my shopping basket$/, (quantity, item) => {
            basket.addItem(item, quantity);
        });

        and(/^I add (\d+) units of "(.*)"$/, (quantity, item) => {
            basket.addItem(item, quantity);
        });

        when('I check the content of my shopping basket', () => {
            basket.showShoppingBasket();
        });

        then('it should contain the following information', (dataTable) => {
            expect(repository.get).toBeCalled();

            console.log(dataTable)
        });
    });
})
