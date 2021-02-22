import { Component } from '@angular/core';
import { User } from './user';
import { EnrollmentService } from './enrollment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  topics = ['Angular', 'React', 'Vue'];
  courseHasError = true;
  submitted = false;
  errorMsg = '';

  userModel = new User('', 'bob@xyz.com', '1234567890', 'default', 'morninng', true);

  constructor(private _enrollmentService: EnrollmentService) {}

  validateCourse(value: string) {
    if(value === 'default') {
      this.courseHasError = true;
    } else {
      this.courseHasError = false;
    }
  }

  onSubmit() {
    this.submitted = true;
    this._enrollmentService.enroll(this.userModel).subscribe(
      data => console.log("success ", data),
      err => this.errorMsg = err.statusText
    )
  }
}
