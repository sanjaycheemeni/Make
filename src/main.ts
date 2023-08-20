import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { HomepageComponent } from './app/homepage/homepage.component';



platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
