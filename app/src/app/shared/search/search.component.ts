import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public searchForm: FormGroup;
  public showErrorData: boolean = false;

  @Input() key: string;
  @Input() date: string;

  @Output() values = new EventEmitter<any>();

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    if (this.date) {
      this.buildForm(this.key, this.date);
    } else {
      this.buildFormKey(this.key);
    }
    this.searchForm.statusChanges.subscribe((status: string) => {
      this.showErrorData = status === 'VALID' ? false : true;
    });
  }

  buildForm(key: string, date: string) {
    const day = Number(date.substr(0, 2));
    const month = Number(date.substr(3, 2));
    const year = Number(date.substr(6, 4));
    const dt = new Date(year, month - 1, day);
    const config = {
      key: [key, Validators.required],
      date: [dt, Validators.required]
    }
    this.searchForm = this.fb.group(config);
  }

  buildFormKey(key: string) {
    this.searchForm = this.fb.group({
      key: [key, Validators.required]
    });
  }

  onSubmit() {
    if (this.date) {
      if (this.searchForm.valid) {
        const dt = new Date(this.searchForm.value.date);
        const day = dt.getDate().toString().padStart(2, '0');
        const month = (dt.getMonth() + 1).toString().padStart(2, '0');
        const values = {
          key: this.searchForm.value.key,
          date: `${day}-${month}-${dt.getFullYear()}`
        };
        this.values.emit(values);
      } else {
          this.showErrorData = true;
      }
    } else {
      if (this.searchForm.valid) {
        this.values.emit(this.searchForm.value.key);
      } else {
          this.showErrorData = true;
      }
    }
  }

  onClear() {
    if (this.date) {
      this.searchForm.get('key').setValue('');
      this.searchForm.get('date').setValue('');
    } else {
      this.searchForm.get('key').setValue('');
    }
  }

  goToBack() {
    this.router.navigate(['/']);
  }

}
