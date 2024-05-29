class DemoblazePage {
    register(username, password) {
      this.fillRegistrationForm(username, password);
    }
    login(username, password) {
        this.logUser(username, password);
    }
    purchase(username) {
        this.buyProd(username);
    }
    
    
    fillRegistrationForm(username, password) {
        cy.visit('https://www.demoblaze.com/')
        cy.wait(1000)
        cy.get('img[src="bm.png"]').should('be.visible')
        cy.get('#signin2').click()
        cy.wait(1000)
        cy.get('div[class="modal-header"]').should('be.visible')
        cy.wait(1000)
        cy.get('#sign-username').click().type(username)
        cy.wait(1000)
        cy.get('#sign-password').click().type(password)
        cy.wait(100)
        cy.get('button[onclick="register()"]').click();
        cy.wait(1000);
    }
    logUser(username, password) {
        cy.visit('https://www.demoblaze.com/')
        cy.get('#login2').click()   
        cy.get('h5').should('contain.text','Log in')
        cy.wait(1000)
        cy.get('#loginusername').click().type(username)
        cy.wait(1000)
        cy.get('#loginpassword').click().type(password)
        cy.wait(100)
        cy.get('button[onclick="logIn()"]').click()
        cy.wait(1000)
    }
    
    buyProd(username) {
        cy.visit('https://www.demoblaze.com/')
        cy.wait(100)
        cy.contains('a', 'Samsung galaxy s6').click()
        cy.wait(100)
        cy.get('a[onclick="addToCart(1)"]').click()
        cy.get('#cartur').click()
        cy.wait(100)
        cy.contains('button','Place Order').click()
        cy.wait(100)
        cy.get('#name').type(username)
        cy.get('#card').type(123467890)
        cy.wait(1000)
        cy.get('button[onclick="purchaseOrder()"]').click()
        cy.wait(1000)
        cy.contains('h2', 'Thank you for your purchase!').should('be.visible')
    }
  
    
  }
  
  export default DemoblazePage;
  