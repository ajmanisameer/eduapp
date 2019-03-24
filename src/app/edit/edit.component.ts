import { Component, OnInit } from '@angular/core';
import { EduappserviceService } from '../eduappservice.service';
import { Router } from '@angular/router'
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styles: []
})
export class EditComponent implements OnInit {

  constructor(private q: EduappserviceService, private route: Router) { }

  ngOnInit() {
    this.q.FetchfromVideo();
  }
  ii = this.q.FetchfromVideo()._id;
  aa = this.q.FetchfromVideo().Course;
  bb = this.q.FetchfromVideo().Path;
  cc = this.q.FetchfromVideo().Des;

  UpdateFinalData(cd) {
    this.q.updateCourse(cd.value).subscribe(k => {
      this.route.navigate(['/update'])
    });

  }
}
