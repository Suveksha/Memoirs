import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ViewDialogComponent } from '../../view-dialog/view-dialog.component';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent {
  cards=[1,2,3,3,4]

  constructor(public dialog: MatDialog) {}

  viewPicture(imgObj:any){
    const dialogRef = this.dialog.open(ViewDialogComponent, {
      data: imgObj,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
