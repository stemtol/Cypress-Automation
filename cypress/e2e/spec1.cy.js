import { describe } from "mocha"

describe('template spec', function() {
  it('Verify Title ', function() {

    cy.visit('https://v3-accounts-dashboard.netlify.app/#/')

    cy.title().should('eq', 'Termii - Easily Engage Customers') //should assertion

    cy.get(".auth-form__logo").should('be.visible')//exist is another parameter we can use the should keyword for

    cy.get("input[placeholder='Work Email']").type("temiloluwa.sanyaolu@termii.com")//.type is cypress version of sendkeys

    cy.get("input[placeholder='Password']").type("password") //attribute selector, there are other including id, class and attrclass

    cy.xpath("//button[normalize-space()='Proceed']").click() //chained xpath, Do that with .xpath with the rest of the xpath



    


  })
})
describe('Assertions', function() {
  it('Implicit Assertions ', function() { // should & and are implicit assertions
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    cy.url().should('include','orange') // parameters of the should keyword are include, eq, not.contain and contain
                                        // if we had more assertions we can use more .should after each assertion.
                                        // and can also be used
    
    
  })
})

describe ('Assertions 2', function(){
  it('explicit assertion', function() {
    cy.visit('https://v3-accounts-dashboard.netlify.app/#/')

    cy.get("input[placeholder='Work Email']").type("tech@termii.com")

    let account_password = "Termii2018!!!@"
    cy.get("input[placeholder='Password']").type(account_password)

    expect(account_password).to.match(/^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/) //password validation matching


    cy.xpath("//button[normalize-space()='Proceed']").click()

    let welcome_name = "Termii"; // usually used for BDD 

    cy.xpath("//p[normalize-space()='Hi, Termii! Welcome to Your Dashboard']").then ( function (x) {
      
      let actual_name = x.text()

      expect(actual_name).to.contain(welcome_name)

      // TDD assertion
      assert.notEqual(actual_name,welcome_name)
    })

  })
})

describe ('special buttons', () => {
  it ('radio button and check boxes', () =>{
    cy.visit("https://www.w3schools.com/html/html_forms.asp")

    cy.get("#vehicle1").scrollIntoView().check({force: true}) // this force: true allows cypress click the object even though it is covered
                                            // .uncheck to uncheck
    cy.get("#vehicle1").should("be.checked")

    cy.xpath("//input[@type='checkbox']").first().check({force:true}) //selects first check boc object. .last() to select last
    
  
  })


})