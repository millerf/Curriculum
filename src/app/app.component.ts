import { Component, NgZone } from '@angular/core';
import * as moment from 'moment';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Miller/F resumé';
  age = moment().diff(moment('1984-03-28'), 'years');
  showPrintingAlert = true;

  constructor(private deviceService: DeviceDetectorService, private ngZone: NgZone) {
    if (window.matchMedia) {
      try{
        window.matchMedia('print').addEventListener('change', (mql) => {
          this.onChangeMedia(mql);
        });

      }catch(e)
      {

      }
    }
  }

  private onChangeMedia(mql) {
    if (mql.matches) {
      this.beforePrint();
     } else {
       this.afterPrint();
   }
  }

  private beforePrint() {

    if (this.deviceService && this.deviceService.browser || this.deviceService.browser === 'Chrome') {
      this.ngZone.run(() => {
        this.showPrintingAlert = false;
      });
    }
  }

  private afterPrint() {
   this.showPrintingAlert = true;
  }
}
