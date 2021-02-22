import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router'

@Component({
  selector: 'app-first-details',
  templateUrl: './first-details.component.html',
  styleUrls: ['./first-details.component.scss']
})
export class FirstDetailsComponent implements OnInit {

  public departmentId: number = 0!;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    // let qId = this.route.snapshot.paramMap.get('id')!;
    // let id = parseInt(qId);
    // this.departmentId = id;
    this.route.paramMap.subscribe((params: ParamMap) => {
      let qId = params.get('id')!;
      let id = parseInt(qId);
      this.departmentId = id;
    });
  }

  goPrevious() {
    let previousId = this.departmentId - 1;
    this.router.navigate(['/first-component', previousId]);
  }

  goNext() {
    let nextId = this.departmentId + 1;
    this.router.navigate(['/first-component', nextId]);
  }

  goToDepartments() {
    let selectedId = this.departmentId ? this.departmentId : null;
    // this.router.navigate(['/first-component', {id: selectedId, test: "test123"}]);
    this.router.navigate(['../', {id: selectedId}], {relativeTo: this.route});
  }

}
