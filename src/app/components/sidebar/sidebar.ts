import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    RouterModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatExpansionModule
  ],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})


export class SidebarComponent {
  expanded: string | null = null;

  setExpanded(panel: string | null) {
    this.expanded = panel; // Only one panel open at a time
  }
}