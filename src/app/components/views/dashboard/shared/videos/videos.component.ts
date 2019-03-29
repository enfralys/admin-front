import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ModalVideosComponent } from '../../../dashboard/shared/modal-videos/modal-videos.component';
import { VideodialogComponent } from '../videodialog/videodialog.component';
import { Subscription } from 'rxjs';

interface usuario{
clientid:string;
}

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {
  pageActual:number =1;
  dialogSubcription: Subscription;
  heroes = [
    "red","blue","pink","black","green","blue",
  
];
item:"ASD";
videos= [
  {description:"Video de Infinity Ward",url:'https://www.youtube.com/watch?v=fE1or2xGxWU'}
];
url;
name;
level_access:"leonardo";
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(ModalVideosComponent, {
      width: '800px',
      data: {item: this.item, level_access: this.level_access, url: this.url}
    });

    

    dialogRef.afterClosed().subscribe(result => {
    
      
      this.level_access = result;
    });
  }






}
