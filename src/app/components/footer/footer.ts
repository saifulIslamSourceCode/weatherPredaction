import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  imports: [CommonModule],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class Footer {
  githubUrl = 'https://github.com/saifulIslamSourceCode/weatherPredaction';
  creators1 = 'Sulaiman Hussain Santo ';
  creators2 = " Saiful Islam"
  currentYear = new Date().getFullYear();

}
