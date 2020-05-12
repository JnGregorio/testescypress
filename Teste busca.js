describe('Teste 1', () => {
    beforeEach(() => {
        cy.visit('https://todoist.com/')
    })

	it('buscando tarefas', () => {
	cy.contains('Login').click()
	cy.get('input[name="email"]').type('jony_gregorio@hotmail.com')
	cy.get('input[name="password"]').type('gregorio')
	cy.get('form').within(()=>{
	cy.contains('Entrar').click()
	})
	cy.get('.quick_find__input').type('teste02').type('{enter}')
	cy.get('.search_holder').should('contain', 'teste02')
	
	

});