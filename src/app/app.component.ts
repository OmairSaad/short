import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiService } from './api.service';
import { FormsModule } from '@angular/forms';
import { Clipboard } from '@angular/cdk/clipboard';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule], //import commonModul for ng 
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  show:boolean=false; 
  spin:boolean=true;
  hide:boolean=true;
  isHighlight:boolean = false;
  public url = "https://url-mohammad-omairs-projects.vercel.app/";
  public s='';
  temp:any;
  clik:number=0;
  public shortid:string ='';
  constructor(private post: ApiService, private clip: Clipboard){};
  title = 'URL Shortner';
  send(){
    this.spin = false;
    this.show= true;
    this.post.sendData({urlId:this.s}).subscribe(res=>{
      this.temp = res;
      if(this.temp.click){
        this.clik = this.temp.click;
      }else{
        this.clik=0;
      }
      if(this.temp["msg"]=='Not Valid'){
        alert("Invalid URL")
      }
      else{
        this.shortid = this.temp.msg;
      }
      this.spin = true;
      this.show = false;
      this.s='';
    })
  }
  copy(){
    this.clip.copy(this.url+this.shortid);
    this.isHighlight = true;
    this.hide = false;
    setTimeout(() => {
      this.isHighlight = false;
      this.hide = true;
    }, 2000);
  }
  
}
