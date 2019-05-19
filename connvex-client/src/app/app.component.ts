import { Component, OnInit } from '@angular/core';
import { FetchService } from './fetch.service';
import { Data } from '../models/data';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  initialValues: Array<Data> = [];
  error: string;
  success: string;
 constructor(private fetchService: FetchService) {
 }
 ngOnInit() {
   this.fetchService.get().subscribe(initialData => {
     this.initialValues = initialData;

     console.log('initialData recieved :', this.initialValues);
   });
 }
 save() {
   console.log('modified val :', this.initialValues);
   this.fetchService.post(this.initialValues).subscribe(response => {
     this.success = response.message;
     console.log('Response after posting data :', response);
   }, (err) => {
    this.error = err.message;
    console.log('Error occured after posting data :', err);
   });
 }
}
