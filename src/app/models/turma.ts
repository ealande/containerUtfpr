import { Aluno } from "./aluno";
import { Disciplina } from "./disciplina";

export class Turma {
  constructor(
    public disciplina: Disciplina,
    public ano: number,
    public periodo: number,
    public alunos: Aluno[],
  ){

  }
  public get nome(): string{

    return `${this.disciplina.nome}-${this.ano}/${this.periodo}`;
  }
};

const d1 = new Disciplina('f3d2', 'Angular')
const t1 = new Turma(
  d1,
  2024,
  2,
  []
)
