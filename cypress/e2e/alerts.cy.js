describe ('alert',()=>{
    it.skip ('regular alert',()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get("button[onclick='jsAlert()']").click()

        cy.on("window:alert",(t)=>{
            expect(t).to.contain("I am")
        })
        cy.get("#result").should("have.test", "You successfully clicked an alert")

    
    })
    it.only ('confirmation alert',()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.xpath("//button[normalize-space()='Click for JS Confirm']").click()

        cy.on("window:confirm",(t)=>{
            expect(t).to.contain("I am")
        })
        cy.on("window:confirm",()=> false) //closes alert with cancel rather than ok

        cy.get("#result").should("have.test", "You clicked: Ok")

    
    })



}) 