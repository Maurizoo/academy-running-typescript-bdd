import {defineFeature, loadFeature} from "jest-cucumber";
import {Account, Printer} from "../../main/account";

const feature = loadFeature('./src/specs/features/shoppingBasket.feature')

class Repository {
    get(){
        throw new Error("get not implemented")
    }
}

class Basket {
    private repository: Repository;
    constructor(repository: Repository) {
        this.repository = repository;
    }
    addItem(item:string, quantity: number) {
        throw new Error("add item error");
    }

    showShoppingBasket() {

        throw new Error("add item error");
    }
}

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
