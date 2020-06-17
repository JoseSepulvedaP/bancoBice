import { Component, OnInit } from '@angular/core';
import { IndeconService } from '../../services/indecon.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-date-value-detail',
  templateUrl: './date-value-detail.component.html',
  styleUrls: ['./date-value-detail.component.scss']
})
export class DateValueDetailComponent implements OnInit {

  public key: string = '';
  public date: string = '';

  constructor(
    private indeconService: IndeconService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.key = params.key;
      this.date = params.date;
    });
    this.getDateValueDetail(this.key, this.date);
  }

  getDateValueDetail(key: string, date: string) {
    this.indeconService.getDateValueDetail(key, date)
      .subscribe((resp: any) => {
        console.log('RESP', resp);
    });
  }


}
