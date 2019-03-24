import { Component, OnInit } from '@angular/core';
import { EduappserviceService } from '../eduappservice.service';
import { Router } from '@angular/router'
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styles: []
})
export class UpdateComponent implements OnInit {

  constructor(private q: EduappserviceService, private route: Router) { }

  allvideo: any = [];
  ngOnInit() {
    this.q.readCourse().subscribe(k => { this.allvideo = k['coursedata'] });
  }


  data: any = [];
  DeleteVideo(k) {
    this.data = k;
  }
  FinalDelete() {
    this.q.deleteCourse(this.data._id).subscribe(k => {
      this.q.readCourse().subscribe(k => { this.allvideo = k['coursedata'] });

    });
  }


  UpdateVideo(k) {
    this.q.SendtoVideo(k);
    this.route.navigate(['/edit'])

  }
}
