import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-temporal-trend', // Corrected to match class name convention
  standalone: true, // Required for standalone components
  imports: [CommonModule],
  templateUrl: './temporal-trand.html', // Corrected file name
  styleUrls: ['./temporal-trand.scss'] // Corrected file name
})
export class TemporalTrand {
  // Image sources (assuming public/5-seral/ is served; adjust if moved to assets)
  image1Src = '/5-seral/Temporal Trend Analysis per year 1.png';
  image2Src = '/5-seral/Temporal Trend Analysis per year 2.png';

  // Overlay state
  isOverlayOpen = false;
  selectedImageSrc = '';

  // Descriptions (updated with current date and time)
  image1Description = 'This graph shows the temporal trend of rainfall over the past decade.';
  image1MoreDescription = 'প্রতি বছরে: গড় বৃষ্টিপাত (Rainfall), সর্বোচ্চ ও সর্বনিম্ন তাপমাত্রা (Max/Min Temp), রোদের সময়কাল (Bright Sunshine), মাসভিত্তিক ট্রেন্ড: কোন মাসে বেশি বৃষ্টি হয়? গরম পড়ে?';
  image2Description = 'This chart illustrates the seasonal temperature variations across regions';
  image2MoreDescription = 'মাস ভিত্তিক (Monthly) ট্রেন্ড বিশ্লেষণ: কোন মাসে বেশি বৃষ্টি হয়? কোন মাসে গরম থাকে? কোন মাসে রোদের সময় বেশি থাকে?';

  // Open overlay with selected image
  openOverlay(imageSrc: string) {
    this.selectedImageSrc = imageSrc;
    this.isOverlayOpen = true;
  }

  // Close overlay with optional event parameter
  closeOverlay(event?: Event) {
    if (event) {
      event.stopPropagation(); // Prevent event bubbling if needed
    }
    this.isOverlayOpen = false;
    this.selectedImageSrc = '';
  }
}