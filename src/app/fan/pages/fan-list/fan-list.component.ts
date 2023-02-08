import { Component } from '@angular/core';
import { FanService } from '../../services/fan.service';
import { Fan } from '../../types/Fan';

@Component({
  selector: 'app-fan-list',
  templateUrl: './fan-list.component.html',
  styleUrls: ['./fan-list.component.scss']
})
export class FanListComponent {
  fanList: Fan[] = [];

  constructor(
    private _fanService: FanService
  ){}

  ngOnInit() {
    this.fanList = this._fanService.getAll();
  }
}
