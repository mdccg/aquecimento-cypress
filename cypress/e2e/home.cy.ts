describe('Home page specs', () => {
  beforeEach(() => cy.visit('http://127.0.0.1:5500/'));

  it('should add person to list after clicking add button', () => {
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


});