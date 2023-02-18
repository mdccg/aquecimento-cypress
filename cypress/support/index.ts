declare namespace Cypress {
    interface Chainable {
        /**
         * Add N people to people list
         * @param n amount of people
         */
        addNPeople(n: number): Chainable<Element>;
    }
}