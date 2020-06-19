import { Component, OnInit } from '@angular/core';
import { IndeconService } from '../../services/indecon.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Value } from '../../interfaces/value.interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-value-detail',
  templateUrl: './value-detail.component.html',
  styleUrls: ['./value-detail.component.scss']
})
export class ValueDetailComponent implements OnInit {

  public key: string = '';
  public new: boolean = false;
  public loading: boolean = true;
  public data: Value = {};


  constructor(
    private indeconService: IndeconService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => this.key = params.key);
    this.getValueDetail(this.key);
  }

  getValueDetail(key: string) {
    this.loading = true;
    this.new = false;
    this.indeconService.getValueDetail(key)
      .subscribe((resp: any) => {
        const { values } = resp.data;
        let newValues: Array<Object> = [];
        Object.getOwnPropertyNames(values).forEach((val) => {
          let valueObj = {
            date: (new Date(Number(val) * 1000)).toString(),
            value: values[val]
          };
          newValues.push(valueObj);
        });
        this.data = resp.data;
        this.data.values = newValues;
        this.loading = false;
      }, (err: any) => {
        if (err) {
          Swal.fire(`${err.error.err.message}`, 'Puede realizar una nueva búsqueda', 'error');
          this.new = true;
          this.loading = false;
        }
    });
  }

  newValues(key: any) {
    if (this.key !== key) {
      this.getValueDetail(key);
      this.router.navigate([`/values/${key.toLowerCase()}`]);
    }
  }

}
