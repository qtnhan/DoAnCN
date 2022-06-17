import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'KTPM1';
  result: any;

  constructor(private http:HttpClient){}

  ngOnInit(){
    this.http.get('http://jsonplaceholder.typicode.com/posts').subscribe(data => {console.log(data); this.result=data;}
    );
  }
}
