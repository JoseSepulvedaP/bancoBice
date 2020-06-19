import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public key: string = '';
  public date: string = '';
  public home: boolean = true;

  constructor(
    private router: Router
  ) {
    const dt = new Date();
    const day = dt.getDate().toString().padStart(2, '0');
    const month = (dt.getMonth() + 1).toString().padStart(2, '0');
    this.date = `${day}-${month}-${dt.getFullYear()}`;
  }

  ngOnInit(): void { }

  getAll() {
    this.router.navigate(['/last']);
  }

  navigateToDetail(key: any) {
    if (this.key !== key) {
      this.router.navigate([`/values/${key.toLowerCase()}`]);
    }
  }

  navigateToDateDetail(values: any) {
    const { key, date } = values;
    if (this.key !== key || this.date !== date) {
      this.router.navigate([`/date/${key.toLowerCase()}/${date}`]);
    }
  }

}
