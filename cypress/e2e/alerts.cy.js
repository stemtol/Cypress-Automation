describe ('alert',()=>{
    it ('regular alert',()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get("button[onclick='jsAlert()']").click()

        cy.on("window:alert",(t)=>{
            expect(t).to.contain("I am")
        })
        cy.get("#result").should("have.test", "You successfully clicked an alert")

    
    })
    it('confirmation alert',
        () => {
            cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
            cy.xpath("//button[normalize-space()='Click for JS Confirm']").click()

            cy.on("window:confirm", (t) => {
                expect(t).to.contain("I am")
            })
            cy.on("window:confirm", () => false) //closes alert with cancel rather than ok, window:prompt to close prompts as well

            cy.get("#result").should("have.text", "You clicked: Cancel")


        })

    it ('Prompt alert',()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

        cy.window().then((p)=>{
            cy.stub(p,"prompt").returns("temtol")

        })

        cy.get("button[onclick='jsPrompt()']").click()



        cy.get("#result").should("have.text", "You entered: temtol")
    })

    it.only ('authenticated alert',()=>{
        cy.visit('https://the-internet.herokuapp.com/basic_auth',{auth:{username:"admin",password:"admin"}}) //alternatively we have the below
        // cy.visit("https://admin:admin@the-internet.herokuapp.com/basic_auth")


    })



}) 