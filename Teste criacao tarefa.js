describe('Teste 1', () => {
    beforeEach(() => {
        cy.visit('https://todoist.com/')
    })

	it('adicionando a primeira tarefa', () => {
	cy.contains('Login').click()
	cy.get('input[name="email"]').type('jony_gregorio@hotmail.com')
	cy.get('input[name="password"]').type('gregorio')
	cy.get('form').within(()=>{
	cy.contains('Entrar').click()
	})
	cy.get('#quick_add_task_holder').click()
	cy.get('.DraftEditor-root').type('teste 01')
	cy.get('.item_editor_submit').click()
	})
	

});