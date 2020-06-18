import { Component, OnInit } from '@angular/core';
import { IndeconService } from '../../services/indecon.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Value } from '../../interfaces/value.interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-date-value-detail',
  templateUrl: './date-value-detail.component.html',
  styleUrls: ['./date-value-detail.component.scss']
})
export class DateValueDetailComponent implements OnInit {

  public key: string = '';
  public date: string = '';
  public new: boolean = false;
  public data: Value = {};

  constructor(
    private indeconService: IndeconService,
    private router: Router,
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
    this.new = false;
    this.indeconService.getDateValueDetail(key, date)
      .subscribe((resp: any) => {
        this.data = resp.data;
        this.data.date = (new Date(resp.data.date * 1000)).toString();
      }, (err: any) => {
        if (err) {
          Swal.fire(`${err.error.err.message}`, 'Puede realizar una nueva búsqueda', 'error');
          this.new = true;
        }
    });
  }

  newValues(values: any) {
    const { key, date } = values;
    if (this.key !== key || this.date !== date) {
      this.getDateValueDetail(key, date);
      this.router.navigate([`/date/${key}/${date}`]);
    }
  }

}
