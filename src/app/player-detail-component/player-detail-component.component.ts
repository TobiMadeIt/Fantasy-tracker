import { Component, OnInit, Input } from '@angular/core';
import {Player} from '../player';



@Component({
  selector: 'app-player-detail-component',
  templateUrl: './player-detail-component.component.html',
  styleUrls: ['./player-detail-component.component.css']
})
export class PlayerDetailComponentComponent implements OnInit {

  @Input() player: Player;

  constructor() { }

  ngOnInit() {
  }

}
