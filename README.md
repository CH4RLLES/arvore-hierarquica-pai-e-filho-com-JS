# arvore-hierarquica-pai-e-filho-com-JS
Considerando um array com uma sequencia de pares (pai, filho), cria uma arvore para resolver o array de forma que o resultado é uma árvore que representa a estrutura hierárquica do array inicial.
o resultado é um json como abaixo:

{
	"Pai": "A",
	"Filho": [
		{
			"Pai": "B",
			"Filho": [
				{
					"Pai": "G",
					"Filho": []
				},
				{
					"Pai": "D",
					"Filho": []
				}
			]
		},
		{
			"Pai": "C",
			"Filho": [
				{
					"Pai": "H",
					"Filho": []
				},
				{
					"Pai": "E",
					"Filho": [
						{
							"Pai": "F",
							"Filho": []
						}
					]
				}
			]
		}
	]
}
