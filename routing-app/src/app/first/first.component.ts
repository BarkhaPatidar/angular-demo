import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {
  selId() { 
    return 'I am a child component!';
  };
  public selectedId: number = 0!;
  departments = [
    {"id": 1, "name": "MongoDB"},
    {"id": 2, "name": "Express"},
    {"id": 3, "name": "Angular"},
    {"id": 4, "name": "Node"}
  ]

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let qId = params.get('id')!;
      let id = parseInt(qId);
      this.selectedId = id;
    });
  }

  onSelect(department: any) {
    // this.router.navigate(['/first-component', department.id]);
    this.router.navigate([department.id], {relativeTo: this.route});
  }

  isSelected(department: any) {
    return department.id === this.selectedId;
  } 

}
