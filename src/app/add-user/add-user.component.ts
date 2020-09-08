import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { Router } from '@angular/router';

export class Image {
  img1: string;
  img2: string;
  img3: string;
  img4: string;

  constructor() {
    this.img1 = 'https://i.pinimg.com/564x/12/d5/52/12d552846229a88c8c696a890fcaa3ac.jpg';
    this.img2 = 'https://upload.wikimedia.org/wikipedia/commons/6/64/50_Cent.jpg';
    this.img3 = 'https://newonce.net/wp-content/uploads/2019/03/chiefgl-768x511.png';
    this.img4 = 'https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5ed670179e384f0007b7db8f%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D1032%26cropX2%3D3642%26cropY1%3D186%26cropY2%3D2795';
  }
}

export class PostUser {

  FirstName: string;
  LastName: string;
  ImgPath: string;

  constructor(
    FirstName: string,
    LastName: string,
    ImgPath: string
  ) {
    this.FirstName = FirstName;
    this.LastName = LastName;
    this.ImgPath = ImgPath;
  }
}

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})


export class AddUserComponent implements OnInit {

  FirstName: string;
  LastName: string;
  ImgPath: string;

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    var image = new Image();
    if (this.ImgPath === 'img1') {
      this.ImgPath = image.img1;
    } else if (this.ImgPath === 'img2') {
      this.ImgPath = image.img2;
    } else if (this.ImgPath === 'img3') {
      this.ImgPath = image.img3;
    } else if (this.ImgPath === 'img4') {
      this.ImgPath = image.img4;
    }

    var user = new PostUser(this.FirstName, this.LastName, this.ImgPath);
    this.dataService.addUser(user).subscribe(x => { }, error => { console.log(error) });
    this.router.navigate(['table']);
  }
}
