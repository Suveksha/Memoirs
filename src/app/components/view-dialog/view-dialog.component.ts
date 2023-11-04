import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ProfilePageComponent } from '../profile_page/profile-page/profile-page.component';

@Component({
  selector: 'app-view-dialog',
  templateUrl: './view-dialog.component.html',
  styleUrls: ['./view-dialog.component.css']
})
export class ViewDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<ProfilePageComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}

  checkLikeColor:boolean=false;

  updateLike()
  {
    this.checkLikeColor=!this.checkLikeColor;
    console.log("Like check",this.checkLikeColor)
  }
}
