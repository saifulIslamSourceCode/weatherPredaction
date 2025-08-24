import { Routes } from '@angular/router';
import { WeatherStationsComponent } from './components/weather-stations-component/weather-stations-component';
import { TemporalTrand } from './components/temporal-trand/temporal-trand';
import { StationWiseComparison } from './components/station-wise-comparison/station-wise-comparison';
import { CorrelationRainfall } from './components/correlation-rainfall/correlation-rainfall';
import { SeasonalVariation } from './components/seasonal-variation/seasonal-variation';
import { ExtremeWeather } from './components/extreme-weather/extreme-weather';
import { SvmModel } from './components/svm-model/svm-model';
import { RandomForest } from './components/random-forest/random-forest';
import { Total7Model } from './components/total-7-model/total-7-model';
import { ModelComparison } from './components/model-comparison/model-comparison';


export const routes: Routes = [
  { path: '', redirectTo: '/weather-stations', pathMatch: 'full' },
  { path: 'weather-stations', component: WeatherStationsComponent, data: { Title: 'Weather Stations' } },
  { path: 'temporal-trend-analysis', component: TemporalTrand, data: { Title: 'Temporal Trend Analysis' } },
  { path: "station-comparison", component: StationWiseComparison, data: { Title: 'Station Wise Comparison' } },
  { path: "correlation-rainfall", component: CorrelationRainfall, data: { Title: 'Correlation Rainfall' } },
  { path: "seasonal-variation", component: SeasonalVariation, data: { Title: 'Seasonal Variation' } },
  { path: "extreme-weather", component: ExtremeWeather, data: { Title: 'Extreme Weather' } },
  { path: "svm", component: SvmModel, data: { Title: 'SVM Model' } },
  { path: "random-forest", component: RandomForest, data: { Title: 'Random Forest' } },
  { path: "model-7", component: Total7Model, data: { Title: 'Total 7 Model' } },
  { path: "best-fit-model", component: ModelComparison, data: { Title: 'Best Fix Model' } }
];
