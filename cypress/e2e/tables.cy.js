describe('tables', () => {

  beforeEach('login', () => {
    cy.visit("https://demo.opencart.com/admin/")
    cy.get("#input-username").type("demo")
    cy.get("#input-password").type("demo")
    cy.xpath("//button[@type='submit']").click()

    cy.xpath("//button[@class='btn-close']").click({force: true})

    cy.xpath("//a[@class='parent collapsed'][normalize-space()='Customers']").click({force: true})
    cy.xpath("//ul[@id='collapse-5']//a[contains(text(),'Customers')]").click({force: true})

  })
  it.skip('check number of rows and column', () => {
    cy.get("table[class=\"table table-bordered table-hover\"]>tbody>tr").should('have.length', '10')
    cy.get("table[class=\"table table-bordered table-hover\"]>thead>tr>td").should('have.length', '7')

  })

  it.skip('data in particular cell', () => {
    cy.get("tbody tr:nth-child(2) td:nth-child(3)").should('have.text', 'olaola@das.com')
    // can also use .contain() instead of should have text
  })

  it.skip('all data in table page', () => {
    cy.get("table[class=\"table table-bordered table-hover\"]>tbody>tr")
        .each(($row, index, $rows) => {

      cy.wrap($row).within(() => {
        cy.get('td').each(($col, index, $cols) => {
          cy.log($col.text())
        })
      })
    })
  })
  it('pagination', () => {
    //find total number of pages
    cy.get(".col-sm-6.text-end").then((e) => {
      let mytext = e.text(); // Captures Showing 1 to 10 of 17609 (1761 Pages)
      let totalpages = mytext.substring(mytext.indexOf("(") + 1, mytext.indexOf("Pages") - 1);
      cy.log("total number of pages currently is " + totalpages);

      let total_pages = 13

      for (let p = 1; p <= total_pages; p++) {
        if (total_pages > 1) {
          cy.log("we are on page" + p);

          // Use backticks to interpolate the value of `p` in the selector
          cy.get("ul[class='pagination']>li:nth-child("+p+")").click()

          // Use arrow function to capture `p` value correctly in the loop
          cy.get("table[class='table table-bordered table-hover']>tbody>tr").each(($row, index, $rows) => {
            cy.wrap($row).within(() => {
              // Use `index` to target the specific column in the row
              cy.get("td:nth-child(3)").then((e) => {
                cy.log(e.text()); // Captures every email address from the table
              })
            })
          })
        }
      }

      cy.wait(3000);
    })



    })



  })







