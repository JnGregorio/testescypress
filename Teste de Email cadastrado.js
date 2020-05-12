describe('Teste 1', () => {
    beforeEach(() => {
        cy.visit('https://todoist.com/')
    })

	it('teste cadastro email', () => {
	cy.contains('Signup').click()
	cy.get('input[name="email"]').type('jony_gregorio@hotmail.com')
	cy.get('form').within(()=>{
		cy.contains('Entrar com e-mail').click()
	})

});