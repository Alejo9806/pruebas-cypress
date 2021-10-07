import HomePage from './HomePage';

const page = new HomePage()

describe("Jumbo visit",()=>{
    it('cy.visit() - visit a remote url',()=>{
        page.visit();
    })
})
describe("Search computer",()=>{
    it('Search for computers and look for the results',()=>{
        page.searchProduct("computador");
    })
})
describe("Search tv",()=>{
    it('Search for tv and look for the results',()=>{
        page.searchProduct("televisor");
    })
})
describe("Search celphone",()=>{
    it('Search for celphone and look for the results',()=>{
        page.searchProduct("celular");
    })
})