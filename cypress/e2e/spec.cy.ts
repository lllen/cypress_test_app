describe('Home Page', () => {
  it('simple test', () => {
      cy.visit('/');
      cy.contains('list works!');
  });
});