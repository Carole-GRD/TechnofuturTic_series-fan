import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FanService } from '../../services/fan.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  nameParam: any;
  constructor(private _fanService: FanService,
              private route: ActivatedRoute) { }
 
  ngOnInit() {
    this.nameParam = this.route.snapshot.paramMap.get('name');
  }

}
