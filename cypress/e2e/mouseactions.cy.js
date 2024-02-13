import 'cypress-iframe'
require ('@4tw/cypress-drag-drop')
describe('mouseactions', () => {
    it.skip('mouse hover action', () => {
        cy.visit("https://demo.opencart.com")
        cy.get(".nav-link.dropdown-toggle[href='https://demo.opencart.com/index.php?route=product/category&language=en-gb&path=20']").
        trigger('mouseover').click()
        cy.get("div[class='list-group mb-3'] a:nth-child(1)").click()
    })
    it.skip('right click action', () => {
        cy.visit("https://swisnl.github.io/jQuery-contextMenu/demo.html")
        cy.get(".context-menu-one.btn.btn-neutral").trigger('contextmenu') //right clicks
        //or cy.get(".context-menu-one.btn.btn-neutral").rightclick()
        cy.get(".context-menu-item.context-menu-icon.context-menu-icon-cut").should('be.visible')
    })

    it('double click action', () => {
        cy.visit("https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick3")
        cy.frameLoaded("#iframeResult")
        cy.iframe("#iframeResult").find("button[ondblclick='myFunction()']").trigger("dblclick")
        //or
        cy.iframe("#iframeResult").find("button[ondblclick='myFunction()']").dblclick()
    })

    it('Drag and drop', () => {
        cy.visit("https://dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html")
        cy.get("#box4",{force:true}).drag("#box104")
    })

    it.only('scroll page', () => {
        cy.visit("https://www.countries-ofthe-world.com/flags-of-the-world.html")
        cy.get("img[alt='Flag of Nigeria']").scrollIntoView({duration:2000})


    })
})