describe("Home", () =>{
    beforeEach(() =>{
        cy.visit("http://localhost:5173/")
    });
    it("display carrousell", () =>{
        cy.get("section").contains("p");
    })
})