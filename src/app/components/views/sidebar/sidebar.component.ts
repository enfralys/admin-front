import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  level_access: string;
  
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Juan',level_access: "Admin"},
  {position: 2, name: 'Helium', level_access: "Editor"}

];
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  showFiller = true;
  displayedColumns: string[] = ['position', 'name', 'weight'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit() {
  }

}
