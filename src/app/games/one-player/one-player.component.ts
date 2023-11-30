import { Component } from '@angular/core';
import { GameService } from 'src/app/game.service';

type Cell = {
  id: number;
  state: 'X' | 'O' | null;
};

@Component({
  selector: 'app-one-player',
  templateUrl: './one-player.component.html',
  styleUrls: ['./one-player.component.css'],
})
export class OnePlayerComponent {
  constructor(public gameService: GameService) {}

  get board(): Cell[] {
    return this.gameService.getBoard();
  }

  get activePlayer(): 'X' | 'O' {
    return this.gameService.getActivePlayer();
  }

  updateCell(cell: Cell): void {
    this.gameService.updateCell(cell);
    setTimeout(() => {
      this.gameService.makeComputerMove();
    }, 1000);
  }

  get winningPlayer(): 'X' | 'O' | null {
    return this.gameService.getWinningPlayer();
  }

  get isTie(): boolean {
    return this.gameService.getTieResult();
  }

  resetGame(): void {
    this.gameService.resetGame();
  }
}
