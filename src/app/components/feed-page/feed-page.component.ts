import { Component } from '@angular/core';
import { ViewDialogComponent } from '../view-dialog/view-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-feed-page',
  templateUrl: './feed-page.component.html',
  styleUrls: ['./feed-page.component.css']
})
export class FeedPageComponent {

  constructor(public dialog: MatDialog) {}

  checkLikeColor:boolean=false;

  updateLike()
  {
    this.checkLikeColor=!this.checkLikeColor;
    console.log("Like check",this.checkLikeColor)
  }

  addComment(){
    console.log("Add comment")
    const dialogRef = this.dialog.open(ViewDialogComponent, {
      data: {'msg':'Hello There!','imgPath':'../../../../assets/images/card-image.jpeg'},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
