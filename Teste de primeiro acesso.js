describe('Teste 1', () => {
    beforeEach(() => {
        cy.visit('https://todoist.com/')
    })

	it('Primeiro cadastro', () => {
	cy.contains('Signup').click()
	cy.get('input[name="email"]').type('jonyteste@teste27.com')
	cy.get('form').within(()=>{
	cy.contains('Entrar com e-mail').click()
	})
	cy.get('input[name="full_name"]').type('jony_teste3')
	cy.get('input[name="pwd"]').type('otejorp1010')
	cy.contains('Increva-se agora').click()
	cy.contains('Vamos lá').click()
	cy.contains('Dark').click()
	cy.contains('Criar meu Todoist').click()
	cy.contains('Abrir meu Todoist').click()
	cy.contains('Welcome! Let’s get started with a few tips').should('contain', 'Welcome! Let’s get started with a few tips')



});