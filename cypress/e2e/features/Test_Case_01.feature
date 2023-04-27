@RegressionTest
Feature:001_Minha Funcionalidade

    Como analista de teste quero acessar a pagina do publicazo e realizar uma pesquisa de Teste.

	#Teste de pesquisa
	@Test
	Scenario Outline: 001_Check_Pesquisa
		Given um acesso no site publicazo 
		When insiro o item "<item>"
		Then verifica se item existe
		
	Examples:

	|item      		| 
	|Teste			| 
	|Enfermeira		| 
	|Cabeleleira	|