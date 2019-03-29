import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-videodialog',
  templateUrl: './videodialog.component.html',
  styleUrls: ['./videodialog.component.css']
})
export class VideodialogComponent implements OnInit {

  
  private file=null;

  constructor(public dialogRef: MatDialogRef<VideodialogComponent>,private domSanitizer: DomSanitizer) { }

  ngOnInit() {
  }

  onClose() {
    this.dialogRef.close();
  }

	fileChange(event) {
    let fileList: FileList = event.target.files;
    if(fileList.length > 0) {
      this.file = fileList[0]
    }
	}

  deleteVideo(){
  	this.file=null;
  }

  onSave() {
    this.dialogRef.close(this.file);
  }

}