import {Component} from "@angular/core";

@Component({
  moduleId: module.id,
  templateUrl: 'dashboard.component.html'
})

export class DashboardComponent {
  // lineChart Main
  public lineChartData: Array<any> = [
    { data: [31, 74, 6, 39, 20, 85, 7], label: 'Visitors' }
  ];
  public lineChartLabels: Array<any> = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN"];
  public lineChartOptions: any = {
    responsive: true
  };
  public lineChartColors: Array<any> = [
    {
      backgroundColor: "rgba(80, 181, 252, 0.6)",
      borderColor: "rgba(80, 181, 252, 0.6)",
      pointBorderColor: "#fff",
      pointBackgroundColor: "#19c6fc",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgba(220,220,220,1)",
      pointBorderWidth: 2,
    },
  ];
  public lineChartLegend: boolean = true;
  public lineChartType: string = 'line';

  // Line Charts Mini
  public MinilineChartData: Array<any> = [
    { data: [31, 54, 6, 39, 20, 65, 7], label: '' },
    { data: [51, 74, 36, 59, 40, 85, 27], label: '' }
  ];
  public MinilineChartLabels: Array<any> = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN"];
  public MinilineChartOptions: any = {
    responsive: true,
    scales: {
      yAxes: [{
        display: false
      }],
      xAxes: [{
        display: false
      }]
    }
  };
  public MinilineChartColors: Array<any> = [
    {
      backgroundColor: "#af99d8",
      borderColor: "#af99d8",
      radius: 0,
    },
    {
      backgroundColor: "#e6dff3",
      borderColor: "#e6dff3",
      radius: 0,
    }
  ];
  public MinilineChartLegend: boolean = false;

  // Line Charts Mini2
  public Mini2lineChartData: Array<any> = [
    { data: [7, 56, 26, 39, 6, 54, 31], label: '' },
    { data: [27, 85, 40, 59, 40, 74, 51], label: '' }
  ];
  public Mini2lineChartLabels: Array<any> = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN"];
  public Mini2lineChartOptions: any = {
    responsive: true,
    scales: {
      yAxes: [{
        display: false
      }],
      xAxes: [{
        display: false
      }]
    }
  };
  public Mini2lineChartColors: Array<any> = [
    {
      backgroundColor: "#6fc6bd",
      borderColor: "#6fc6bd",
      radius: 0,
    },
    {
      backgroundColor: "#ccece9",
      borderColor: "#ccece9",
      radius: 0,
    }
  ];
  // Pie
  public pieChartData:number[] = [300, 500, 100];
  public pieChartType:string = 'pie';

}
