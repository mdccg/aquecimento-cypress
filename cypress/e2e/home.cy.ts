describe('Home page specs', () => {
  beforeEach(() => cy.visit(''));

  it('should add person with at least two names to list after clicking add button', () => {
    const addPersonButton = cy.get('#add-person-button');
    addPersonButton.click();
    const firstItemList = cy.get('#people-list > :nth-child(1)');
    firstItemList
      .invoke('text')
      .then((text) => {
        const { length: wordCount } = text.split(' ');
        expect(wordCount).to.be.at.least(2);
      });
  });

  it('should add N people to list after N clicks to add person button', () => {
    const N = 10;
    cy.addNPeople(N);
    cy.get('#people-list').find('li').should('have.length', N);
  });

  it('should clear the list after clicking the clear button', () => {
    cy.addNPeople(10);
    cy.get('#clear-list-button').click();
    cy.get('#people-list').find('li').should('have.length', 0);
  });
});