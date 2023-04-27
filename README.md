# cypress_cucumber_v12.10
Teste em Cypress v12 com BDD e HTML report


Framework de teste com CYpress V12 + Cucumber  e Relatório BDD-HTML

Para estruturar instale o nodeJs e dependencias com: `npm install`

![image](https://user-images.githubusercontent.com/33332202/234979603-787341db-bd09-4636-bbe1-46485b25b033.png)


Para executar os testes utilize: `npm test` 

![image](https://user-images.githubusercontent.com/33332202/234979796-683833ca-cd16-467a-8596-53aa5908ae28.png)


No final do teste o relatório html é aberto em seu navegador:
![image](https://user-images.githubusercontent.com/33332202/234980006-c9a4203c-221b-4f46-ba79-9a156cd06af5.png)


E para analisar manualmente com o cypres utilize o comando: `npx cypress open`

ALGUMAS ORIENTAÇÕES BÁSICAS:

> OS ARQUIVOS BDD (FUNCIONALIDADES) DEVEM SER CONTRUÍDOS NA PASTA `cypress\e2e\features`COM A EXTENSÃO `*.feature

> OS ARQUIVOS DE "STEPS (PASSOS/AÇÕES)" DEVEM SER DESENVOLVIDOS NA PASTA `cypress\support\steps`

> VOCÊ PODE CRIAR CLASSES DE APOIO AOS ARQUIVOS DE PASSOS NA PASTA `cypress\support\pageObjects` E ASSIM UTILIZAR OBJETOS CUSTOMIZADOS PARA FACILITAR A MANUTENÇÃO E REAPROVEITAMENTO DE SUAS AUTOMAÇÕES.


Mais informações sobre Cypress em  https://docs.cypress.io/guides/overview/why-cypress 
