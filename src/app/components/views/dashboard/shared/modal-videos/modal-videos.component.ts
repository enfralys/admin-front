import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Dialogdata } from 'src/app/dialogdata';

@Component({
  selector: 'app-modal-videos',
  templateUrl: './modal-videos.component.html',
  styleUrls: ['./modal-videos.component.css']
})
export class ModalVideosComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ModalVideosComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Dialogdata) { 
    
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit() {
  }

}
