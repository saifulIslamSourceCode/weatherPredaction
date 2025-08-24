import { Component, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-seasonal-variation',
  imports: [CommonModule],
  templateUrl: './seasonal-variation.html',
  styleUrls: ['./seasonal-variation.scss']
})
export class SeasonalVariation {

  // Image sources (assuming public/5-seral/ is served; adjust if moved to assets)
  image1Src = '/5-seral/Seasonal Variation 1.png';
  // image2Src = '/5-seral/Station-wise Comparison 2.png';

  // Overlay state
  isOverlayOpen = false;
  selectedImageSrc = '';

  // Descriptions (updated with current date and time)
  image1MoreDescription = 'সবচেয়ে বেশি বৃষ্টি হয়?';
  image2MoreDescription = 'সবচেয়ে বেশি রোদ পাওয়া যায়?';

  constructor(private cdr: ChangeDetectorRef) { }

  // Open overlay with selected image
  openOverlay(imageSrc: string) {
    console.log('Opening overlay with image:', imageSrc); // Debug log
    this.selectedImageSrc = imageSrc;
    this.isOverlayOpen = true;
    this.cdr.detectChanges(); // Force change detection
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
