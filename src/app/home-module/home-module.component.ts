import { Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-home-module',
  templateUrl: './home-module.component.html',
  styleUrls: ['./home-module.component.css'],
 
})
export class HomeModuleComponent implements OnInit {

  ngOnInit(): void {
    this.chatBot()
  }

  change:boolean=false;
  headerVariable:boolean=false;
  showGallery:boolean=false;
  showCard:boolean=false;




  @HostListener('document:scroll')
  onScroll(){
    if (document.body.scrollTop>150 || document.documentElement.scrollTop>150) {
      this.change=true;
      this.headerVariable=true;
      if (document.body.scrollTop>300 || document.documentElement.scrollTop>300) {
        this.showGallery=true
      }
      else{
        this.showGallery=false
      }

    }
    else{
      this.change=false;
      this.headerVariable=false;    
    
    }
    if (document.body.scrollTop>800 || document.documentElement.scrollTop>800) {
      this.showCard=true
    }
    else{
      this.showCard=false
    }

  }

  title = "my first app";

  chatBot(){
     //----------- chatbot's code --------------//
     (function (d, m) {
      var kommunicateSettings = {
        appId: "1eda1c7f246810f80f0346c8faae21e9f",
        popupWidget: true,
        automaticChatOpenOnNavigation: true,
      };
      var s = document.createElement("script");
      s.type = "text/javascript";
      s.async = true;
      s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
      var h = document.getElementsByTagName("head")[0];
      h.appendChild(s);
      (window as any).kommunicate = m;
      m._globals = kommunicateSettings;
    })(document, (window as any).kommunicate || {});
    //----------- chatbot's code end --------------//

  }

}



 


