import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';

import { MissionlistComponent } from './missionlist/missionlist.component';
import { MissiondetailsComponent } from './missiondetails/missiondetails.component';
import { MissionfilterComponent } from './missionfilter/missionfilter.component';

export const appConfig = {
  providers: [
    provideHttpClient(),
    provideAnimations(),
    provideRouter([
      { path: '', component: MissionlistComponent },
      { path: 'mission/:id', component: MissiondetailsComponent },
      { path: 'filter', component: MissionfilterComponent }
    ])
  ]
};
