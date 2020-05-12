describe('Teste 1', () => {
    beforeEach(() => {
        cy.visit('https://todoist.com/')
    })

	it('reagendando a primeira tarefa', () => {
	cy.contains('Login').click()
	cy.get('input[name="email"]').type('jony_gregorio@hotmail.com')
	cy.get('input[name="password"]').type('gregorio')
	cy.get('form').within(()=>{
	cy.contains('Entrar').click()
	})
	cy.contains('Reagendar').click()
	cy.contains('Mover para Hoje').click()
	
	

});