import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MyNewComponentComponent } from './my-new-component/my-new-component.component';
import {ExploreService} from './explore.service';
import { RouterModule } from '@angular/router';
import { FormatePricePipe} from './shared/formatePrice.pipe';
import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';
import { WelcomeComponent } from './home/welcome.component';
import { PageNotFoundComponent } from './home/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    ConvertToSpacesPipe,
    FormatePricePipe,
    MyNewComponentComponent,
    WelcomeComponent,
    PageNotFoundComponent
  ],
  imports: [
    FormsModule, //if u wont to work with NgModel in two binding for exemple u muste use FromSModul here
    BrowserModule,
    HttpClientModule, //you must import HttopClientModul to use service in each place in the project
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      { path: 'mynew', component: MyNewComponentComponent },
     // { path: '', redirectTo: 'welcome', pathMatch: 'full'},
      { path: '**',  component:PageNotFoundComponent}
  ]),
  ],
  providers: [ExploreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
