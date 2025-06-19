describe('Testes de login no SauceDemo', () => {

  const baseUrl = 'https://www.saucedemo.com/'

  // Função reutilizável de login
  function realizarLogin(usuario, senha) {
    cy.get('[data-test="username"]').type(usuario)
    cy.get('[data-test="password"]').type(senha)
    cy.get('[data-test="login-button"]').click()
  }

  beforeEach(() => {
    cy.visit(baseUrl)
  })

  it('Login com usuário e senha válidos', () => {
    realizarLogin('standard_user', 'secret_sauce')
    cy.url().should('include', '/inventory.html')
    cy.get('.inventory_list').should('be.visible')
  })

  it('Login com senha incorreta (erro esperado)', () => {
    realizarLogin('standard_user', 'senha_errada')
    cy.get('[data-test="error"]').should('contain.text', 'Username and password do not match')
  })

  it('Login com usuário bloqueado', () => {
    realizarLogin('locked_out_user', 'secret_sauce')
    cy.get('[data-test="error"]').should('contain.text', 'Sorry, this user has been locked out.')
  })

})