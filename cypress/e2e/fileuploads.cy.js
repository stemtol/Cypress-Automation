import 'cypress-file-upload'
describe('fileuploads', () => {
    it('single file upload', () => {
        cy.visit("https://the-internet.herokuapp.com/upload")
        cy.get("#file-upload ").attachFile("Screenshot 2024-02-01 at 15.13.40.png")
        cy.get("#file-submit").click()
        cy.wait(5000)
        cy.get("div[class='example'] h3").should('have.text',"File Uploaded!")
    })

    it('Rename', () => {
        cy.visit("https://the-internet.herokuapp.com/upload")
        cy.get("#file-upload ").attachFile({filePath:'Screenshot 2024-02-01 at 15.13.40.png',fileName:'new.png'})
        cy.get("#file-submit").click()
        cy.wait(5000)
        cy.get("div[class='example'] h3").should('have.text',"File Uploaded!")
    })

    it.only('drag and drop', () =>{
        cy.visit("https://the-internet.herokuapp.com/upload")
        cy.get("#drag-drop-upload").attachFile('draganddrop.png',{subjectType:'drag-n-drop'})
        // for multiple files just include them in attachment, separate with a comma
        cy.wait(5000)
    })

    it.skip('shadow dom element', () => {
        cy.visit('https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm')
        cy.get('.smart-browse-input',{includeShadowDom:true}).attachFile('draganddrop.png')

    });
})