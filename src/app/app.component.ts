import { Component, VERSION } from '@angular/core';
import { GetDetailsService } from'./get-details.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  responseString;
  constructor(public getDetailsSvc: GetDetailsService){

  }

  showJSON(){
    let item = this.getDetailsSvc.getDetails().subscribe((res)=>{
      console.log('API Response: ',res);
      this.responseString = JSON.stringify(res);
    })
    
  }

}
