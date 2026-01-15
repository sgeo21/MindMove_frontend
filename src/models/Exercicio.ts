import type Categoria from "./Categoria";
import type Usuario from "./Usuario";

export default interface Exercicio {
  id: number;
  nome: string;
  descricao: string;
  video: string;
  duracao: number;
  estimuloSensorial: string;
  categoria: Categoria | null;
  usuario: Usuario | null;
} 