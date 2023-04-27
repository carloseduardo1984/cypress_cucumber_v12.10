// ***********************************************************
import './commands'

require('cypress-xpath')

afterEach(() => {
    const screenshotsFolder = Cypress.config("screenshotsFolder");
    if (window.cucumberJson?.generate) {
        const testState = window.testState;
        const stepResult =
            testState.runTests[testState.currentScenario.name][testState.currentStep];
        if (stepResult?.status === "failed") {
            const screenshotFileName = `${testState.feature.name} -- ${testState.currentScenario.name} (failed).png`;
            cy.readFile(
                `${screenshotsFolder}/${Cypress.spec.name}/${screenshotFileName}`,
                "base64"
            ).then((imgData) => {
                stepResult.attachment = {
                    data: imgData,
                    media: { type: "image/png" },
                    index: testState.currentStep,
                    testCase: testState.formatTestCase(testState.currentScenario),
                };
            });

        }
        else{
            console.log(testState.feature.name)
            console.log(stepResult?.title)
            console.log(stepResult?.status)
        }
    }

});

Cypress.on('fail', (err) => {
    console.error(err)
    const at = new Date().toISOString()
    err.message = at + '\n' + err.message
    throw err
})