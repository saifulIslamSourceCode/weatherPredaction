import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatListItem, MatListModule } from "@angular/material/list";

interface ModelPerformance {
  name: string;
  mae: number;
  r2: number;
}

@Component({
  selector: 'app-model-comparison',
  imports: [CommonModule, MatTableModule, MatCardModule, MatListItem, MatListModule],
  templateUrl: './model-comparison.html',
  styleUrl: './model-comparison.scss'
})
export class ModelComparison {

  models = [
    { name: 'SVR', mae: 63.24, r2: 0.78 },
    { name: 'Random Forest', mae: 64.26, r2: 0.78 },
    { name: 'Gradient Boosting', mae: 67.89, r2: 0.78 },
    { name: 'MLP', mae: 69.12, r2: 0.78 },
    { name: 'Linear Regression', mae: 72.34, r2: 0.65 },
    { name: 'Decision Tree', mae: 75.67, r2: 0.60 },
    { name: 'Baseline Model', mae: 78.90, r2: 0.50 } // Added as the 7th row with lower performance
  ];

  recommendationTitle: string = "Why Random Forest is the Best Model";
  recommendationDetails: string[] = [
    "1. **Low Prediction Error:** Random Forest has a low MAE (64.26), meaning its predictions are very close to actual values, almost as accurate as SVR.",
    "2. **High Model Fit:** R² of 0.78 indicates Random Forest captures the majority of data variability effectively.",
    "3. **Robustness to Noise and Outliers:** Unlike SVR or Decision Trees, Random Forest reduces overfitting and handles noisy data efficiently.",
    "4. **Handles Non-Linear Relationships:** Random Forest can model complex patterns without assuming linearity, making it ideal for real-world datasets.",
    "5. **Feature Importance Insights:** Provides information about which features are most influential, helping in data interpretation and report visualization.",
    "6. **Stability and Scalability:** Combining multiple trees ensures stable predictions and better generalization on unseen data.",
    "7. **Ease of Implementation:** Minimal parameter tuning is required compared to SVR or Gradient Boosting, making it easier to deploy and maintain."
  ];
}
