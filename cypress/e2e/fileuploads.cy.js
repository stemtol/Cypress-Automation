import 'cypress-file-upload'
describe('fileuploads', () => {
    it('single file upload', () => {
        cy.visit("https://the-internet.herokuapp.com/upload")
        cy.get("#file-upload ").attachFile("Screenshot 2024-02-01 at 15.13.40.png")
        cy.get("#file-submit").click()
        cy.wait(5000)
        cy.get("div[class='example'] h3").should('have.text',"File Uploaded!")

    })
})