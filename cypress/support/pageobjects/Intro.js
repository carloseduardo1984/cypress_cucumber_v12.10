import 'cypress-wait-until';

class Utilidades {
//====================================================================================================

   
//====================================================================================================

    site_access() {

        cy.visit(Cypress.env('QA').url)

          
        return cy.log('Pagina acessada com sucesso!!!')
    }
   
//====================================================================================================

seleciona_item(item) {

    cy.get('#search').type(item).type('{enter}');

      
    return cy.log('Item selecionado!')
}
//====================================================================================================

confirma_item(item) {

    cy.contains(item).should('visible')

      
    return cy.log('Item selecionado!')
}


}
export default Utilidades