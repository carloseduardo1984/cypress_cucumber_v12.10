const report = require("multiple-cucumber-html-reporter");

const dayjs = require("dayjs")
//datas do arquivo
const startsDate = dayjs().format("MMM DD, YYYY - hh:mm:ss a")

report.generate({
    jsonDir: "cypress/reports/",  // ** Pasta do relatorio de teste **//
    reportPath: "cypress/reports/chrome/", // ** pasta do arquivo  .html  **//
    metadata:

        {   browser: {
            name: "chrome",
            version: "> 112 (64-bit)"
        },
        device: "Local Laptop i7",
        platform: {
            name: "Windows",
            version: "10"
        }
        },

    customData: {
        title: 'Run info',
        data: [
            {label: 'Projeto :', value: 'Meu projeto em Cypress'},
            {label: 'Versão :', value: 'Q4 22'},
            {label: 'Ciclo :', value: '2023 Q1'},
            {label: 'AMbiente:', value: 'Demo QA'},            
            {label: 'Momento do teste: ', value: startsDate},
            {label: 'Tester :',   value: 'CEO'},
        ]
    },
    scenarioTimestamp: true,
    displayDuration: true,
    pageTitle: 'Relatório de Teste',
    reportName: 'Relatório de Testes Automatizados',
    openReportInBrowser: true

});