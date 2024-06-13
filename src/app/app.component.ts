import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LogoComponent } from './header/logo/logo.component';
import { ClubNameComponent } from './header/club-name/club-name.component';
import { DateComponent } from './header/date/date.component';
import { EventComponent } from './header/event/event.component';
import { CommonModule } from '@angular/common';
import { PlayersListComponent } from './body/players-list/players-list.component';
import { NewPlayerComponent } from './new-player/new-player.component';
import { NewRowComponent } from './new-row/new-row.component';
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    CommonModule,
    RouterOutlet,
    LogoComponent,
    ClubNameComponent,
    DateComponent,
    EventComponent,
    PlayersListComponent,
    NewPlayerComponent,
    NewRowComponent,
  ],
})
export class AppComponent {
  title = 'VB-Statistics';
}
