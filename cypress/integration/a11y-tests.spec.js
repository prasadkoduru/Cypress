// Accessibility tests
//Note: Tests 1, 2, 3 and 5 are intentionally meant to fail. Only 4 must pass. 

describe('Accessibility tests -- Test page', () => {

    beforeEach(() => {
        cy.visit('https://www.seleniumeasy.com/test/bootstrap-alert-messages-demo.html');  // test page
        cy.injectAxe();
    })

    it('Test 1: Particular section of test page', () => {

        cy.checkA11y('.footer', {
                runOnly: {
                    type: 'tag',
                    values: ['wcag2a', 'wcag2aa'],
                    },
                }, 
                violationLog,
        )
    })

    it('Test 2: Exclude a section of the page', () => {

        cy.checkA11y({
                exclude: ['.footer']
                }, {
                runOnly: {
                    type: 'tag',
                    values: ['wcag2a', 'wcag2aa'],
                    },
                }, 
                violationLog,
        )
    })

    it('Test 3: Entire page', () => {

        cy.checkA11y('body', {
                runOnly: {
                    type: 'tag',
                    values: ['wcag2a', 'wcag2aa'],
                    },
                }, 
                violationLog,
        )
    })

    it('Test 4: Passing test', () => {

        cy.checkA11y('.row > .navbar', {
                runOnly: {
                    type: 'tag',
                    values: ['wcag2a', 'wcag2aa'],
                    },
                }, 
                violationLog,
        )
    })

    it('Test 5: Viewport test', () => {
        
        ['iphone-6', 'ipad'].forEach((device) => {
            cy.viewport(device);

            cy.checkA11y('body', {
                runOnly: {
                    type: 'tag',
                    values: ['wcag2a', 'wcag2aa'],
                    },
                }, 
                violationLog,
            )
        })
    })

})


// Function to report the accessibility violations
const violationLog = (violations) => {
    cy.task('log', 
        `${violations.length} accessibility violation${violations.length ===1 ? '' : 's'} ${violations.length === 1 ? 'was' : 'were'} found.`)
    
    // pluck specific keys to keep the table readable

    const violationData = violations.map(
        ({ id, impact, help, nodes, first_html }) => ({
        id,
        impact,
        help,
        nodes: nodes.length,
        first_html: nodes[0].html
      })
    )

    cy.task('table', violationData);
}
