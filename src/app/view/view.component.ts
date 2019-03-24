import { Component, OnInit } from '@angular/core';
import { EduappserviceService } from '../eduappservice.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styles: []
})
export class ViewComponent implements OnInit {

  constructor(private q: EduappserviceService) { }

  allvideo: any = [];
  ngOnInit() {
    this.q.readCourse().subscribe(k =>{ this.allvideo = k['coursedata'] });
  }

}
