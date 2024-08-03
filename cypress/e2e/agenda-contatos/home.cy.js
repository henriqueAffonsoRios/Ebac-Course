/// <reference types="cypress" />

describe('Testes para a home', () => {
  // Acessando o site
  beforeEach(() => {
    cy.visit("https://agenda-contatos-react.vercel.app");
  })

  // Teste para incluir
  it('Deve incluir informações no formulário', () => {
    cy.get('input[type="text"]').type("Henrique Luz")
    cy.get('input[type="email"]').type("devhenriqueluz1702@gmail.com")
    cy.get('input[type="tel"]').type("13988888080")

    cy.contains("Adicionar").click()

    cy.screenshot("teste-incluir")
  })

  // Teste para editar
  it("Deve alterar a informação da lista", () => {
    cy.get(":nth-child(2) > .sc-gueYoa > .edit").click()
    cy.get('input[type="text"]').clear().type("Marcelo Souza")
    cy.get('input[type="email"]').clear().type("mmarcelo@ebac.com.br")
    cy.get('input[type="tel"]').clear().type("11912345678")
    cy.get(".alterar").click()

    cy.screenshot("teste-editar")
  })

  // Teste para remover
  it("Deve remover um contato da lista", () => {
    cy.get(":nth-child(3) > .sc-gueYoa > .delete").click()

    cy.screenshot("teste-remover")
  })
})
