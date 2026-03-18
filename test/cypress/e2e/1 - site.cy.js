describe('Teste da pagina inicial site faculdade', () => {
    
    it('Acessar a página inicial', () => {
        cy.visit('http://localhost:5500/index.html')
        cy.contains('Faculdade Tech')
    })

    it('Acessar a página de cursos', () => {
        cy.visit('http://localhost:5500/cursos.html')
        cy.get('nav a').contains('Cursos').click()
        cy.url().should('include', 'cursos.html')    
    })
})