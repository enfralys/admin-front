import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatTableDataSource, MatPaginator } from '@angular/material';
import { ModalComponent } from './shared/modal/modal.component';
import { Dialogdata } from 'src/app/dialogdata';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { VideodialogComponent } from './shared/videodialog/videodialog.component';
import { Subscription } from 'rxjs';



export interface types {
  value: string;
  viewValue: string;
}
export interface PeriodicElement {
  name: string;
  position: number;
  level_access: string;
  
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Enfranly', level_access:"Admin" },
  {position: 2, name: 'Freddy', level_access:"Admin" },
  {position: 3, name: 'Edder', level_access: "editor" },
  {position: 3, name: 'Arnold', level_access: "editor" }
];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  name;
  lastname;
  email;
  selected;
  selectedValue;
  vista;
  nombre:"";
  checked:false;
  dialogSubcription: Subscription;
  heroes = ["red","blue","pink","black","green","blue",
  "pink","black","green","blue","pink","black","green","blue","pink","black","green",
  "pink","black","green","blue","pink","black","green","blue","pink","black","green",
  "pink","black","green","blue","pink","black","green","blue","pink","black","green",
  "pink","black","green","blue","pink","black","green","blue","pink","black","green"
];

files: string[]=[
  "Modelos 3D",
  "Videos",
  "AR models"
]



types: types[] = [
  {value: '1', viewValue: 'Editor'},
  {value: '2', viewValue: 'Admin'},
  {value: '3', viewValue: 'Junior'}
];
  level_access;
  myForm: FormGroup;
  selector;
 
  displayedColumns: string[] = ['position', 'name', 'level_access'];
  datoSource = new MatTableDataSource(this.heroes);
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(public dialog: MatDialog,
    public fb: FormBuilder
    ) {
      this.myForm = this.fb.group({
        name: ['', [Validators.required]],
        lastname: ['', [Validators.required]],
        email: ['', [Validators.required]],
        selectedValue: ['', [Validators.required]],
        url: ['', [Validators.required]],
        password: ['', [Validators.required]],
      });

     

    }  
   
    applyFilter() {
      this.dataSource.filter = this.selector;
      
    }

    registrar(){
   ELEMENT_DATA.push(
  {position:5, name:this.name, level_access:this.selectedValue}
    );
    }

    videos(){
      this.vista=2;
    }
  
  
    ngOnInit() {
     
    var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = "130px";
    } 
  });

}

}
users(){
  this.vista=1;
}
multimedia(){
  this.vista=0;
}
addMultimedia(){
  this.vista=3;
}
  openDialog(): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '500px',
      data: {name: this.name, level_access: this.level_access}
    });

    

    dialogRef.afterClosed().subscribe(result => {
    
      
      this.level_access = result;
    });
  }

  openVideoDialog(): void {
    const admitedFormats = ['avi', 'mp4', 'mpa', 'mpe', 'mp4', 'mpeg', 'mpg'];
    const dialogRef = this.dialog.open(VideodialogComponent, {
      width: 'auto',
      data: {},
      disableClose: true
    });
    if(this.dialogSubcription && !this.dialogSubcription.closed)
      this.dialogSubcription.unsubscribe();
    
      this.dialogSubcription = dialogRef.afterClosed().subscribe(result => {
      if(!result) return;
      const canUpload = this.validateDocument(result, admitedFormats, 300);
      if (canUpload) {
      
      } else {
      
      }
    });
  }


  validateDocument(file: any, admitedFormats: string[], maxMbSize: number = 20): boolean {
    const { name, size } = file;
    const admitedFormat = admitedFormats.find(format => name.endsWith('.' + format));
    const sizeMb = size / 1000000;
    const admitedMb = sizeMb <= maxMbSize;
    return Boolean(admitedFormat) && admitedMb;
  }



}
