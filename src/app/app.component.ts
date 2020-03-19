import { Component } from '@angular/core';

import * as i18nIsoCountries from 'i18n-iso-countries';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-translate-app';

  ngOnInit() {
    i18nIsoCountries.registerLocale(require("i18n-iso-countries/langs/en.json"));
        let value = '';
        value = i18nIsoCountries.getName('840', 'en');
         console.log(value);
        // value = i18nIsoCountries.getName('AL', 'en');
        // console.log(value);
        // console.log(i18nIsoCountries.getName("AL", "en"));
        // console.log(i18nIsoCountries.getName("840","en"));
        // console.log(i18nIsoCountries.getNames("en"));
        // console.log(i18nIsoCountries.getAlpha2Codes());
        
      }
}
