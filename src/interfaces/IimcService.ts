import { Imc } from "src/models/imc";


export interface IimcService {
    calcularImc(dados: Imc): number;
}