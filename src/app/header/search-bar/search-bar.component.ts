import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SearchService } from 'src/app/shared/search.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  // @Output() search: EventEmitter<string> = new EventEmitter<string>();
  searchItem : string = "";
  listFilter : string = "";

  // get listFilter(): string{
  //   return this._listFilter;
  // }
  // set listFilter(value: string):{
  //   this._listFilter = value;
  // }

  constructor(private searchChild: SearchService) { }

  ngOnInit(): void {
  }

  // onClick():void{
  //   // this.searchItem = 
  //   this.search.emit(this.listFilter)
  // }

  onClick(): void {
    // this.searchItem = 
    this.searchChild.setSearchText(this.listFilter);
    this.searchChild.searched.emit(this.searchChild.getSearchText());
    // this.searched.emit(this.searchChild.getSearchText())
    console.log("Search Bar : "+this.searchChild.searchText)
  }


}
