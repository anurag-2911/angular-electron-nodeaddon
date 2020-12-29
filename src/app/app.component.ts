import { Component,OnInit } from '@angular/core';
import { ElectronService } from 'src/services/electron-services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  constructor(private electronService: ElectronService) {

  }
  

  ngOnInit(): void {
    this.electronService.ipcRenderer.invoke('hellomsg', 'hello from appcomponent').then((result) => {
      console.log('result '+ result);
      this.welcomeMsg=result;
    })
  }
  title = 'angularapp';
  welcomeMsg:string ='hello';
  
}
