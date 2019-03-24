import { Component, OnInit } from '@angular/core';
import { EduappserviceService } from '../eduappservice.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styles: []
})
export class AddComponent implements OnInit {

  constructor(private q: EduappserviceService) { }
  

  isadd = false;

  ngOnInit() {
  }
  SendData(ac) {
    this.q.addCourse(ac.value).subscribe(k => {
      this.isadd = true;
    });
  }
}
