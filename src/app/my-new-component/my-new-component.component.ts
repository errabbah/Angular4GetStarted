import { Component, OnInit,OnChanges ,AfterViewInit} from '@angular/core';
import { ExploreService } from '../explore.service';
import { IProduct } from '../models/product';
import { IPublication} from '../models/publications';
import { IPosts } from '../models/posts';
import { error } from 'util';
import { add ,display} from './add';
import { myNewFunctions } from './myNewFunctions';
import { subtract } from './subtract';
@Component({
  
  selector: 'pm-my-new-component',
  templateUrl: './my-new-component.component.html',
  styleUrls: ['./my-new-component.component.css'],

})

export class MyNewComponentComponent implements OnInit {
 _postsArray: IPosts[];
  products: IProduct[] = [];
  errorMessage: string;
  publication: IPublication;
  exampleValue:string;
  filter: string="two way binding exemple";
  //filter:string="default value";
  showImage:boolean=true;
  constructor(private _explore :ExploreService) {
      console.log(add(5,4));

     console.log(subtract(5,4));
  
   }

  // _filter: string;
  /* get listFilter(): string {
       return this.filter;
   }
   set filter(value: string) {
       this.filter = value;
   }*/
  ngOnInit(): void {
     // this.filter="value";
    
   //subtract();
   this.exampleValue= display();
    this._explore.getPublications()
            .subscribe(myresponse => {
                this.publication = myresponse;
            },
                error => this.errorMessage = <any>error);
            }
            toggleImage(): void {
                this.showImage=!  this.showImage   
               // console.log(this.showImage);
                }

ngAfterViewChecked(): void {
   // console.log("after ngAfterViewChecked");
   myNewFunctions();
  
}


}
