/// <reference types="cypress" />

describe('second', () =>{

    it.skip('select dropdown', () => {
        cy.visit("https://www.zoho.com/commerce/free-demo.html")
        cy.get("#zcf_address_country").select('Spain').should('have.value', 'Spain')

    })

})

it.skip('bootstrapped dropdown', () => {
    cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")
    cy.get("#select2-billing_country-container").click()
    cy.xpath("//input[@role='combobox']").type("Italy").type('{enter}')
    cy.get("#select2-billing_country-container").should('have.text','Italy')
})

it.skip('Auto select dropdown', () => {
    cy.visit("https://www.wikipedia.org")
    cy.get("#searchInput").type("Messi")
    cy.xpath("//a[@href='https://en.wikipedia.org/wiki/Messiah']").click() //could also locate all elements with one xpath and use should contain to get specific element
    
})

it('Dynamic dropdown', () => {
    cy.visit("https://www.google.com")
    cy.get("#APjFqb").type("Termii")
    cy.get("div.wM6W7d>span").each(($el, index, $list)=>{
        if($el.text()== "termii elevate") {
            cy.wrap($el).click()


        }

        })

    })
   
    
