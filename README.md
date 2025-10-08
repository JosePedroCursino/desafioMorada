# Desafio ATM — API de Caixa Eletrônico

Uma API REST desenvolvida em **Node.js** e **TypeScript** que simula o funcionamento de um caixa eletrônico, calculando automaticamente a quantidade mínima de cédulas necessárias para realizar um saque. Desafio proposto pela Morada.AI

---

## Funcionalidades

- Cálculo otimizado de notas (100, 50, 20, 10, 5 e 2 reais)  
- Validação de valores inválidos ou impossíveis de sacar  
- API REST simples e pronta para testes via `curl`

---

## Tecnologias Utilizadas

- **Node.js**  
- **TypeScript**  
- **Express.js**

---

## Como Executar

```bash
git clone <https://github.com/JosePedroCursino/desafioMorada>
cd DesafioATM
npm install
npm run build
npm start
```
- A API estará disponível em: `http://localhost:5000`

---

## Endpoints Principais

- GET / <br>
  Verifica se a API está ativa.

- POST /api/saque <br>
  Recebe um valor e retorna a quantidade de cédulas necessárias.

---

## Exemplo de requisição:

Em Bash:
```bash
curl -X POST -H "Content-Type: application/json" -d '{"valor": 380}' http://localhost:5000/api/saque
```

Ou:
```json
{
    "valor": 380
}
```

Retorna:
```json
{"2":0,"5":0,"10":1,"20":1,"50":1,"100":3}
```

---

## Respostas de erro:

```json
{ "error": "Valor não fornecido." }
{ "error": "Valor deve ser um número inteiro não negativo." }
{ "error": "Esse valor não é possível de sacar." }
```

Mensagens de erro para o caso de valores não inteiros, zero ou não números, além de um erro geral.

---

## Lógica do Cálculo

- A API utiliza um algoritmo de divisões e restos, do maior para o menor:

1. Para valores ímpares, utiliza uma nota de R$5,00 (quando possível).
2. Decompõe o restante com as maiores notas primeiro (100 → 50 → 20 → 10 → 2).
3. Retorna erro caso o valor não possa ser representado com as denominações disponíveis.

---

## Desafios para a construção do projeto

Inicialmente, Foi facil pensar na lógica básica para o calculo das notas, bastaria dividir o valor pela maior nota, depois colocar o resto na proxima nota e sucessivamente até o valor chegar a 0. Ná prática, isso funcionava mas alguns valores não atenderiam por causa de valores que terminassem em 1,3,6, ou 8, então usei uma validação de se o número for impar, já incluir uma nota de 5 e dividir o resto por 2, fazendo assim que qualquer valor (exceto 1 e 3) possam ser sacados. Sobre a implementação, meu maior desafio foi a formação do arquivo index.ts. Inicialmente, fiz a lógica em Javascript, passando para Typescript como um desafio para mim mesmo, mas como não tinha muita experiencia com API, fazer o arquivo foi bem desafiador mas bem satisfatório, funcionando bem depois que eu entendi as variaveis e a formatação. Além disso, fazer o repositório no Github precisou um pouco de pesquisa de formatação.