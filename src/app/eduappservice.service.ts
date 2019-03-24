import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EduappserviceService {

  constructor(private q: HttpClient) { }

  private baseUrl: string = "http://localhost:3000";

  addCourse(ac) {
    return this.q.post(this.baseUrl + '/addcourse', ac)
  }
  readCourse() {
    return this.q.get(this.baseUrl + '/readcourse')
  }
  deleteCourse(id) {
    return this.q.delete(this.baseUrl + '/deletecourse/' + id)
  }
  updateCourse(ac) {
    return this.q.put(this.baseUrl + '/updatecourse', ac)
  }

  private data: any = [];
  SendtoVideo(videodata) {
    this.data = videodata;
  }
  FetchfromVideo() {
    return this.data;
  }

}
