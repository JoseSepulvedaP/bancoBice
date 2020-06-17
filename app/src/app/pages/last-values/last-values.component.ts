import { Component, OnInit } from '@angular/core';
import { IndeconService } from '../../services/indecon.service';

@Component({
  selector: 'app-last-values',
  templateUrl: './last-values.component.html',
  styleUrls: ['./last-values.component.scss']
})
export class LastValuesComponent implements OnInit {

  constructor(
    private indeconService: IndeconService
  ) { }

  ngOnInit(): void {
    this.getLastData();
  }

  getLastData() {
    this.indeconService.getLastData()
      .subscribe((resp: any) => {
        console.log('RESP', resp);
    });
  }



}
