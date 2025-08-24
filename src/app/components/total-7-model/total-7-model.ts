import { Component, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-total-7-model',
  imports: [CommonModule],
  templateUrl: './total-7-model.html',
  styleUrl: './total-7-model.scss'
})
export class Total7Model {

    // Image sources (assuming public/5-seral/ is served; adjust if moved to assets)
  image1Src = '/model/model 3 to 7.png';
  // image2Src = '/model/SVM 2.png';

  // Overlay state
  isOverlayOpen = false;
  selectedImageSrc = '';

  // Descriptions (updated with current date and time)
  image1MoreDescription = 'Actual vs Predicted Rainfall (Multiple Models)';
  // image2MoreDescription = 'রেকর্ড গরম মাস: মাস 5.0 সর্বোচ্চ তাপমাত্রা: 44.0 °C, রেকর্ড ঠাণ্ডা মাস: মাস 1.0 সর্বনিম্ন তাপমাত্রা: 6.2 °C';

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
