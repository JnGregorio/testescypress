describe('Teste 1', () => {
    beforeEach(() => {
        cy.visit('https://todoist.com/')
    })

	it('Logout', () => {
	cy.contains('Login').click()
	cy.get('input[name="email"]').type('jony_gregorio@hotmail.com')
	cy.get('input[name="password"]').type('gregorio')
	cy.get('form').within(()=>{
	cy.contains('Entrar').click()
	}) 
	cy.get('[aria-label="Configuração"]').click()
	cy.get('.usermenu__row-label').contains('Sair').click()
	cy.title().should('contain', 'Todoist: The to do list to organize work & life')	
});