import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { Garage } from './garage';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  garageList: Array<Garage> = [];
  garageListCopy: Array<Garage> = [];
  searchTerm: string = "";
  areas = [];
  isLoading:boolean = true;


  constructor(private appService: AppService){}
  
  ngOnInit() {
    this.appService.getGarages();
    this.appService.getAreas().subscribe(res=> {
      this.areas = res.Data;
    }, err => {
    });
    this.appService.garageListSub.subscribe(g=> {
      this.garageList = g;
      this.garageList.sort((a,b)=> a.Name.localeCompare(b.Name))
      this.garageListCopy = this.garageList;
      if(this.garageList.length > 1)
        this.isLoading = false;
    });
  }

  searchUpdate(){
    this.garageList = this.garageListCopy;
    this.garageList = this.garageList.filter(g=> {return g.City.includes(this.searchTerm)});

  }

  onAreaSelected(selected: any){
    this.garageList = this.garageListCopy;
    this.garageList = this.garageList.filter(g=> {return g.City.includes(this.searchTerm)});
    if(selected.value != 'הכל')
      this.garageList = this.garageList.filter(g=> {return g.Area == selected.value});
  }



}
