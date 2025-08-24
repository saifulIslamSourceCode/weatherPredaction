import { Component, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-extreme-weather',
  imports: [CommonModule],
  templateUrl: './extreme-weather.html',
  styleUrl: './extreme-weather.scss'
})
export class ExtremeWeather {

    // Image sources (assuming public/5-seral/ is served; adjust if moved to assets)
  image1Src = '/5-seral/Extreme Weather Detection 1.png';
  image2Src = '/5-seral/Extreme Weather Detection 2.png';

  // Overlay state
  isOverlayOpen = false;
  selectedImageSrc = '';

  // Descriptions (updated with current date and time)
  image1MoreDescription = 'সবচেয়ে বেশি বৃষ্টি হয়েছে এমন মাসগুলো';
  image2MoreDescription = 'রেকর্ড গরম মাস: মাস 5.0 সর্বোচ্চ তাপমাত্রা: 44.0 °C, রেকর্ড ঠাণ্ডা মাস: মাস 1.0 সর্বনিম্ন তাপমাত্রা: 6.2 °C';

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
