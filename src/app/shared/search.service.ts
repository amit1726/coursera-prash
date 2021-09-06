import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  searchText : string = "";
  @Output() searched: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  setSearchText(data:string):void{
    this.searchText=data;
  }

  getSearchText():string{
    return this.searchText;
  }
}
