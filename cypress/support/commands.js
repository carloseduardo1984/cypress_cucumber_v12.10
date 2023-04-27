Cypress.Commands.add("login", (url, user, pass) => {

    //COMANDO PARA FAZER LOGIN
    cy.visit(url, {
        auth: {
            username: user,
            password: pass,
            }
    })
});


// COMANDO PARA VERIFICAR SE ELEMENTO EXISTE NA TELA
Cypress.Commands.add("exist", (selector) => {
    cy.get('body').should('exist').then(($body) => {
        return new Cypress.Promise((resolve, reject) => {
            if ($body.find(selector).length > 0) {
                console.log("cy.exist() - Matching element found in DOM!");
                resolve(true);
            } else {
                console.log("cy.exist() - Element did not exist!");
                resolve(false);
            }
        })
    })
})




