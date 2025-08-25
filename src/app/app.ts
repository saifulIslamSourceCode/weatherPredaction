import { Component, HostListener, signal, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { SidebarComponent } from './components/sidebar/sidebar';
import { CommonModule } from '@angular/common';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { OnInit } from '@angular/core';
import { filter, map } from 'rxjs';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    SidebarComponent,
    CommonModule,
    Footer
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  // protected readonly title = signal('weatherPredaction');
  pageTitle: string = '';

  @ViewChild('sidenav') sidenav!: MatSidenav;
  isDesktop: boolean = true;
  sidenavWidth: number = 250; // Width of the sidenav

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.checkScreenSize();
  }

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    this.checkScreenSize();

    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        map(() => {
          let route = this.activatedRoute.firstChild;
          while (route?.firstChild) {
            route = route.firstChild;
          }
          return route?.snapshot.data['Title'] || 'Default Title';
        })
      )
      .subscribe(title => {
        this.pageTitle = title;
      });
  }

  checkScreenSize() {
    this.isDesktop = window.innerWidth > 768;
    if (!this.isDesktop && this.sidenav.opened) {
      this.sidenav.close();
    } else if (this.isDesktop && !this.sidenav.opened) {
      this.sidenav.open();
    }
  }

  toggleSidenav() {
    if (this.sidenav) {
      this.sidenav.toggle();
    }
  }
}
