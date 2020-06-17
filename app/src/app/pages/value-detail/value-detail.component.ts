import { Component, OnInit } from '@angular/core';
import { IndeconService } from '../../services/indecon.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-value-detail',
  templateUrl: './value-detail.component.html',
  styleUrls: ['./value-detail.component.scss']
})
export class ValueDetailComponent implements OnInit {

  public key: string = '';

  constructor(
    private indeconService: IndeconService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => this.key = params.key);
    this.getValueDetail(this.key);
  }

  getValueDetail(key: string) {
    this.indeconService.getValueDetail(key)
      .subscribe((resp: any) => {
        console.log('RESP', resp);
    });
  }


}
