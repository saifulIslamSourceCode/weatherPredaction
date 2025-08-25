import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-best-fit-model',
  imports: [CommonModule, MatTableModule, MatCardModule, MatListModule],
  templateUrl: './best-fit-model.html',
  styleUrl: './best-fit-model.scss'
})
export class BestFitModel {

  models = [
    { name: 'Linear Regression', mae: 95.48, r2: 0.64 },
    { name: 'SVR', mae: 63.24, r2: 0.78 },
    { name: 'Decision Tree', mae: 89.29, r2: 0.58 },
    { name: 'Random Forest', mae: 64.26, r2: 0.78 },
    { name: 'Gradient Boosting', mae: 66.41, r2: 0.78 },
    { name: 'KNN ', mae: 70.83, r2: 0.74 },
    { name: 'MLP', mae: 66.73, r2: 0.78 }
  ];

  recommendationTitle: string = "Why Random Forest is the Best Model";
  recommendationDetails: string[] = [
    "1. **Low Prediction Error:** Random Forest has a low MAE (64.26), meaning its predictions are very close to actual values, almost as accurate as SVR.",
    "2. **High Model Fit:** R² of 0.78 indicates Random Forest captures the majority of data variability effectively.",
    "3. **Robustness to Noise and Outliers:** Unlike SVR or Decision Trees, Random Forest reduces overfitting and handles noisy data efficiently.",
    "4. **Handles Non-Linear Relationships:** Random Forest can model complex patterns without assuming linearity, making it ideal for real-world datasets.",
    "5. **Feature Importance Insights:** Provides information about which features are most influential, helping in data interpretation and report visualization.",
    "6. **Stability and Scalability:** Combining multiple trees ensures stable predictions and better generalization on unseen data.",
    "7. **Ease of Implementation:** Minimal parameter tuning is required compared to SVR or Gradient Boosting, making it easier to deploy and maintain. Updated on August 25, 2025, 01:50 AM +06."
  ];

}
