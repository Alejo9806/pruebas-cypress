/// <reference types="cypress" />

export default class HomePage {
    visit(){
       cy.visit("https://www.mercadolibre.com.co/")
      
    }

    searchProduct(search){
        cy.visit("https://www.mercadolibre.com.co/")
        cy.get('[name="as_word"]')
            .type(""+search+" {enter}")
        cy.url().should('include','/'+search)//ASSERT revisamos la uri que contenga lo que queremos
    }
}