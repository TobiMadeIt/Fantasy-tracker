import { Component, OnInit } from '@angular/core';
import { Player } from '../player';
import {PlayerService} from '../player.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

  players : Player[];
  selectedPlayer: Player;

  onSelect(player: Player){
    this.selectedPlayer = player;
  }
  getPlayers(): void{
    this.playerService.getPlayers().subscribe(players => {
      this.players = players;
    });
  }

  constructor(private playerService: PlayerService) {
  }

  ngOnInit() {
    this.getPlayers();
  }

}
