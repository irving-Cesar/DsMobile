import { IimcService } from 'src/interfaces/IimcService';
import { Imc } from "src/models/imc";

export class ImcService implements IimcService{
    
    calcularImc(dados: Imc): number { 
        if (!dados.altura) throw new Error ("O campo altura é obrigatório.");
        if (!dados.peso) throw new Error ("O campo peso é obrigatório.");
        let calc = dados.peso/Math.pow(dados.altura,2);

        return parseFloat(calc.toFixed(2));

    }
}