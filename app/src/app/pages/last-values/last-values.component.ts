import { Component, OnInit } from '@angular/core';
import { IndeconService } from '../../services/indecon.service';
import { Router } from '@angular/router';
import { Value } from '../../interfaces/value.interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-last-values',
  templateUrl: './last-values.component.html',
  styleUrls: ['./last-values.component.scss']
})
export class LastValuesComponent implements OnInit {

  public dataOk: boolean = false;
  public showBtn: boolean = false;
  public data: Value = {};

  constructor(
    private indeconService: IndeconService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getLastData();
  }

  getLastData() {
    this.indeconService.getLastData()
      .subscribe((resp: any) => {
        const values = resp.data;
        let newValues: Array<Object> = [];
        Object.getOwnPropertyNames(values).forEach((val) => {
          let valueObj = {
              date: (new Date(Number(values[val].date) * 1000)).toString(),
              key: values[val].key,
              name: values[val].name,
              unit: values[val].unit,
              value: values[val].value,
          };
          newValues.push(valueObj);
        });
        this.data = newValues;
        this.dataOk = true;
        this.showBtn = true;
      }, (err: any) => {
        if (err) {
          Swal.fire(`${err.error.err.message}`, 'Favor intente mas tarde', 'error');
          this.dataOk = false;
          this.showBtn = true;
        }
    });
  }

  goToBack() {
    this.router.navigate(['/']);
  }

}
