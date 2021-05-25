import {defineFeature, loadFeature} from "jest-cucumber";

const feature = loadFeature('./src/specs/features/shoppingBasket.feature')

defineFeature(feature, test => {
    test('Add items to shopping basket', ({ given, and, when, then }) => {
        given(/^I add (\d+) units of "(.*)" to my shopping basket$/, (arg0, arg1) => {

        });

        and(/^I add (\d+) units of "(.*)"$/, (arg0, arg1) => {

        });

        when('I check the content of my shopping basket', () => {

        });

        then('it should contain the following information', (table) => {
            console.log(table)
        });
    });
})
