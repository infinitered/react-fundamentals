describe("View Camp Details", () => {
  it("loads successfully", () => {
    cy.visit("/")
  })

  it("allows viewing camp details", () => {
    cy.visit("/")

    cy.contains("By the Lake Camp").click()

    cy.url().should("include", "/camp?campId")

    cy.get(".splash").should("be.visible")
  })
})