const URL = "http://zero.webappsecurity.com/index.html";
const VALIDSEARCH = "#searchTerm";
const INVALIDSEARCH = "#searchTerm";
const BLANKSEARCH = "#searchTerm";

class SearchPage {
    static visit() {
        cy.visit(URL);
    }

    static fillSearchValid(){
        cy.get(VALIDSEARCH).type('Pay bills{enter}');
    }

    static fillSearchInvalid(){
        cy.get(INVALIDSEARCH).type('payment{enter}');
    }

    static fillSearchBlank(){
        cy.get(BLANKSEARCH).type(' {enter}');
    }
}

export default SearchPage;
