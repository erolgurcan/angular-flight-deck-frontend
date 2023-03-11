import { Component, OnInit } from '@angular/core';
import { Apiservice } from '../api.service';
import { LegendPosition } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  constructor(private apiService: Apiservice) { }

  customColors = (value: any) => {
    return "#ff0000";
  }

  public legendPosition: LegendPosition = LegendPosition.Right;

  dataset = [
    {
      "name": "Altitude",
      "series": [
        {
          "value": 0,
          "name": ""
        },
      ]
    },
  ]

  single = [
    {
      "name": "Germany",
      "value": 8940000
    },
    {
      "name": "USA",
      "value": 5000000
    },
    {
      "name": "France",
      "value": 7200000
    }
  ];
  

  toggleLiveData = false;
  internalID: any

  onLive(): void {
    console.log("button clicked")
    if (this.toggleLiveData == false) {
      console.log(this.toggleLiveData)
      this.toggleLiveData = true;
      this.getLiveData();
    } else {
      this.toggleLiveData = false;
      clearInterval(this.internalID);
    }
  }

  getLiveData(): void {

    this.dataset[0].series = [];
    this.internalID = setInterval(() => {
      this.apiService.getLatestData().subscribe((data) => {
        console.log(data.result)
        if (this.dataset[0].series.length > 50) {
          this.dataset[0].series.shift();
          this.dataset[0].series.push(
            {
              "value": Number(data.result.altitude),
              "name": String(data.result.loggingTime),
            },
          );

        } else {
          this.dataset[0].series.push(
            {
              "value": Number(data.result.altitude),
              "name": String(data.result.loggingTime),
            },
          );
        }
        this.dataset = [...this.dataset];
      })
    }, 5000)
  }



  ngOnInit(): void {



  }






}
