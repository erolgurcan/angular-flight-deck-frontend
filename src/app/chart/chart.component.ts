import { Component, OnInit } from '@angular/core';
import { Apiservice } from '../api.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {


  dataset = [
    {
      "name": "Kuwait",
      "series": [
        {
          "value": 0,
          "name": "2016-09-18T02:44:32.162Z"
        },
      ]
    },
  ]



  colorScheme = {
    domain: ['#08DDC1', '#FFDC1B', '#FF5E3A']
  };

  customColors = (value: any) => {
    return "#ff0000";
  }

  constructor(private apiService: Apiservice) {

  }




  ngOnInit(): void {


    setInterval(() => {
      this.apiService.getLatestData().subscribe((data) => {

        if (this.dataset[0].series.length > 10) {
          this.dataset[0].series.shift();
          this.dataset[0].series.push(
            {
              "value": Number(data.result.altitude),
              "name": String(data.result.loggingTime),
            },
          );
            console.log("1", this.dataset[0].series)
        } else {
          console.log("2", this.dataset[0].series)
          this.dataset[0].series.push(
            
            {
              "value": Number(data.result.altitude),
              "name": String(data.result.loggingTime),
            },

          );
        }


        this.dataset = [...this.dataset];

      })
    }, 1000)

  }






}
