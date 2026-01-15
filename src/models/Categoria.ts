import type Exercicio from "./Exercicio";

export default interface Categoria {
  id: number;
  descricao: string;
  icone: string;
  perfilRelacionado: string;
  exercicios?: Exercicio[] | null;
}