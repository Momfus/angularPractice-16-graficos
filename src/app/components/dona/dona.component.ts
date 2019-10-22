import { Component } from '@angular/core';
import { ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styleUrls: ['./dona.component.css']
})
export class DonaComponent  {

  // Datos del gráfico de dona / torta
  public doughnutChartLabels: Label[] = ['Tamales', 'Tortillas', 'Chorizo'];
  public doughnutChartData: number[] = [350, 450, 100];
  public doughnutChartType: ChartType = 'doughnut';

  // Eventos
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public numeros_random() {

    this.doughnutChartData = [
        Math.round( Math.random() * 100),
        Math.round( Math.random() * 100),
        Math.round( Math.random() * 100)
      ];

  }


}
