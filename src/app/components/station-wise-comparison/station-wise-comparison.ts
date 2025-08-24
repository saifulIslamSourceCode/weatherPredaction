import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-station-wise-comparison',
  standalone: true, // Added for standalone component
  imports: [CommonModule],
  templateUrl: './station-wise-comparison.html', // Corrected file name
  styleUrls: ['./station-wise-comparison.scss'] // Corrected file name
})
export class StationWiseComparison {
  // Image sources (assuming public/5-seral/ is served; adjust if moved to assets)
  image1Src = '/5-seral/Station-wise Comparison 1.png';
  image2Src = '/5-seral/Station-wise Comparison 2.png';

  // Overlay state
  isOverlayOpen = false;
  selectedImageSrc = '';

  // Descriptions (updated with current date and time)
  image1MoreDescription = 'কোন স্টেশনে সবচেয়ে বেশি বৃষ্টি হয়? কোন অঞ্চলে সবচেয়ে বেশি গরম?';
  image2MoreDescription = 'মাস ভিত্তিক (Monthly) ট্রেন্ড বিশ্লেষণ: কোন মাসে বেশি বৃষ্টি হয়? কোন মাসে গরম থাকে? কোন মাসে রোদের সময় বেশি থাকে?';

  // Open overlay with selected image
  openOverlay(imageSrc: string) {
    console.log('Opening overlay with image:', imageSrc); // Debug log
    this.selectedImageSrc = imageSrc;
    this.isOverlayOpen = true;
  }

  // Close overlay with optional event parameter
  closeOverlay(event?: Event) {
    if (event) {
      event.stopPropagation(); // Prevent event bubbling if needed
    }
    console.log('Closing overlay'); // Debug log
    this.isOverlayOpen = false;
    this.selectedImageSrc = '';
  }
}