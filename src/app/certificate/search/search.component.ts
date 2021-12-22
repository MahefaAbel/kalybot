import { Component, Inject, OnInit } from '@angular/core';
import { Users } from 'src/models/Users';
import { listPersonWithImageJson } from './data.users';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  public nomPersonSearch: string;
  public listPersonnResult: Array<Users>;
  public personSelected: Users|null;

  constructor() {
    this.nomPersonSearch = "";
    this.listPersonnResult = [];
    this.personSelected = null
  }

  ngOnInit(): void {
  }

  onClick(){
    this.listPersonnResult = this.search(this.nomPersonSearch);
  }

  search(nom: string = ""): Array<any> {
    const listPerson: Array<Users> = [];

    if(nom.length == 0) return listPerson;

    // return listPersonWithImageJson.filter((item: any) => item.indexOf(nom) != -1 )
    listPersonWithImageJson.forEach((item: any) => {
      if(item.author.indexOf(nom) != -1) {
        listPerson.push( new Users(
          item.id,
          item.author,
          item.download_url,
          item.width
        ) )
      }
    })

    
    return listPerson;
  }

  onPersonSelected(user: Users|null): void {
    this.personSelected = user;
  }

}