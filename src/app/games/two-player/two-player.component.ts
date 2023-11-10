import { Component } from '@angular/core';
import { GameService } from 'src/app/game.service';

type Cell = {
  id: number;
  state: 'X' | 'O' | null;
};

@Component({
  selector: 'app-two-player',
  templateUrl: './two-player.component.html',
  styleUrls: ['./two-player.component.css'],
})
export class TwoPlayerComponent {
  constructor(public gameService: GameService) {}

  get board(): Cell[] {
    return this.gameService.getBoard();
  }

  get activePlayer(): 'X' | 'O' {
    return this.gameService.getActivePlayer();
  }

  updateCell(cell: Cell): void {
    this.gameService.updateCell(cell);
  }

  get winningPlayer(): 'X' | 'O' | null {
    return this.gameService.getWinningPlayer();
  }

  get isTie(): boolean {
    return this.gameService.getTieResult();
  }

  get gameOverStatus(): boolean {
    return this.gameService.getGameOverStatus();
  }

  resetGame(): void {
    this.gameService.resetGame();
  }
}
