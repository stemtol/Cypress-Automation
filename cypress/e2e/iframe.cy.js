import 'cypress-iframe'
describe('handling iframe', () => {
    it('approach 1', () => {
        cy.visit("https://the-internet.herokuapp.com/iframe")

        const iframe = cy.get("#mce_0_ifr")
            .its('0.contentDocument.body').should('be.visible')
            .then(cy.wrap)

        iframe.clear().type("Temtol {cmd+a}")
    })

        it('approach 2 - custom command', () => {
            cy.visit("https://the-internet.herokuapp.com/iframe")

            cy.getIframe().clear().type("Temtol {cmd+a}") //can pass a difference iframe locator in getIframe
            // approach 2 used custom command that allows you to now repeat iframe chains. see commands.js for sample

        })

    it('approach 3 - iframe plug ins ', () => {
        cy.visit("https://the-internet.herokuapp.com/iframe")

        cy.frameLoaded(`#mce_0_ifr`)

        cy.getIframe().clear().type(`Temtol {cmd+a}`)
// for this approach install the iframe cypress plug in and import it

    });
})
