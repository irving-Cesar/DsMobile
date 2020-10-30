import { Component, OnInit } from '@angular/core';
import { Imc } from 'src/models/imc';
import { ImcService } from '../../services/ImcService';

@Component({
  selector: 'app-imc',
  templateUrl: './imc.page.html',
  styleUrls: ['./imc.page.scss'],
})
export class ImcPage implements OnInit {

  public resultado: number = 0;
  public imc: Imc = new Imc();
  public calcServ: ImcService = new ImcService();

  constructor(private _imcService: ImcService)  { 
  }

  calcular(){
    this.resultado = this._imcService.calcularImc(this.imc);
  }

  ngOnInit() {
  }

}
