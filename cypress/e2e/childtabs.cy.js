describe('childtabs.cy.js', () => {
    it('approach 1', () => {
        cy.visit("https://the-internet.herokuapp.com/windows",{
            setTimeout:90000,
        })


        cy.xpath("//a[normalize-space()='Click Here']").invoke('removeAttr', 'target').click()
        /*line above enable code to continue on the same tab rather than open a new tab on click which cypress does not
        currently support*/

        cy.url().should("include", "https://the-internet.herokuapp.com/windows/new")

        cy.wait(5000)

        cy.go('back') //goes back to previous tab
        //alternatively (approach 2), we can get the url for the child tab and use another cy.visit
    })
})