# APIconsultaDeFilmes

Apartir das aulas de API - REST, segue o repositório público para a conclusao do módulo 2.
A ideia é uma API para registro de filmes em um cinema.

A primeira rota GET - /filmes
Deverá retornar a listagem dos filmes com o status de disponível ou nao.
EXEMPLO: /filmes

[
	{
		"id": 1,
		"nome": "Harry Potter e a pedra filodofal",
		"ano": 2001
	},
	{
		"id": 2,
		"nome": "Harry Potter e a camara secreta",
		"ano": 2004
	}
]



A segunda rota GET - /filmes/:id
Deverá retorna o filme do respectivo ID.
EXEMPLO: /filmes/1

{
	"id": 1,
	"nome": "Harry Potter e a pedra filodofal",
	"ano": 2001
}

Ou /filmes/10

{
	"mensagem": "Não existe filme para o ID informado."
}



A terceira rota POST - /filmes
Será a rota para cadastrar o novo filme e deverá retornar o filme cadastrado.
EXEMPLO: /filmes

{
	"id": 3,
	"titulo": "Harry Potter e as reliquias da morte",
	"ano": 205
}



E a última rota /filmes/:id 
Será a rota para excluir um filme de acordo com o ID informado, e deverá retornar a mensagem de excluído ou nao.
EXEMPLO: /filmes/1

{
	"mensagem": "Filme excluído com sucesso!"
}  

Ou /filmes/10

{
	"mensagem": "Não existe filme para o ID informado."
}
