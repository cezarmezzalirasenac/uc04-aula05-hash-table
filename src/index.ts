// Arrays, Listas e Tuplas

const tupla: [string, string, number, boolean] = [
  "Cezar Mezzalira",
  "cezar.mezzalira@gmail.com",
  34,
  true,
];

const tuplas: [string, string, number, boolean][] = [
  ["Cezar Mezzalira", "cezar.mezzalira@gmail.com", 34, true],
  ["edemir@gmail.com", "Edemir", 34, true],
];

// nome, email, idade, ativo
const nome = tupla[1][0];

// Hash table - tabela de chave/valor

type Pessoa = {
  nome: string;
  email: string;
  idade: number;
  ativo: boolean;
  celular?: string;
};

const pessoas: Pessoa[] = [
  {
    nome: "Cezar Mezzalira",
    email: "cezar.mezzalira@gmail.com",
    idade: 34,
    ativo: true,
  },
  {
    email: "edemir@gmail.com",
    nome: "Edemir",
    idade: 34,
    ativo: true,
  },
];

for (const pessoa of pessoas) {
  console.log(pessoa["email"]);
}

// Criar uma lista de 10 produtos que contenha o seguinte layout:
// id do tipo number, nome do tipo texto, quantidade em estoque do tipo float,
// ativo do tipo boolean, data de criacao do tipo texto,
// data ultima atualizacao do tipo texto.

// Definição do tipo Produto
type Produto = {
  id: number;
  nome: string;
  quantidade: number;
  ativo: boolean;
  dataCriacao: string;
  dataAtualizacao: string;
};

const produtos: Produto[] = [
  {
    id: 1,
    nome: "MacBook",
    quantidade: 10.0,
    ativo: true,
    dataCriacao: "19/11/2024",
    dataAtualizacao: "19/11/2024",
  },
];

const produto2: Produto = {
  id: 2,
  nome: "MacBook Pro",
  quantidade: 10.0,
  ativo: true,
  dataCriacao: "20240101",
  dataAtualizacao: "20241118"
}

produtos.push(produto2)

console.log(produtos)
