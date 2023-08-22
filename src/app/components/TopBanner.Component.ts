import {Component,OnInit,AfterViewInit} from '@angular/core'

@Component({ 
  selector: 'google-adsense',
  template: ` <div>
        <ins class="adsbygoogle"
            style="display:block"
            data-ad-client="ca-pub-8791984262740129"
            data-ad-slot="1498632190"
            data-ad-layout-key="-7r+ev+u-54+5w"
            data-ad-format="fluid"></ins>
         </div>   
            <br>            
  `,

})


export class TopBannerComponent implements AfterViewInit {

  constructor() {} 

  ngAfterViewInit() {
     setTimeout(()=>{
      try{
        (window['adsbygoogle'] = window['adsbygoogle'] || []).push({});
      }catch(e){
        console.error("error");
      }
    },2000);
 }     
}