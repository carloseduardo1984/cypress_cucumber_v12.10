@RegressionTest
Feature:002_Minha Funcionalidade

    Como analista de teste quero acessar a pagina do publicazo e realizar uma pesquisa de Teste.

	#Teste de pesquisa
	@Test
	Scenario Outline: 002_Check_Pesquisa
		Given um acesso no site publicazo2 
		When insiro o item2 "<item2>"
		Then verifica se item2 existe
		
	Examples:

	|item2      	| 
	|Teste			| 
	|Enfermeira		| 
	|Cabeleleira	|