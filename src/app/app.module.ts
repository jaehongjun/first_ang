import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router'
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import {enableProdMode} from '@angular/core';
import { TestComponent } from './test/test.component';
import { DepartComponent } from './depart/depart.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DepartinsertComponent } from './departinsert/departinsert.component';
import { FuncTestComponent } from './func-test/func-test.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    TestComponent,
    DepartComponent,
    WelcomeComponent,
    DepartinsertComponent,
    FuncTestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,    
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { 
        path:'user',
        component:UserComponent,
      },
      {
        path:'test',
        component:TestComponent,
      },
      {
        path:'depart',
        component:DepartComponent,
      },
      {
        path:'departinsert',
        component:DepartinsertComponent,
      },
      {
        path:'functest',
        component:FuncTestComponent,
      },
      {
        path:'',
        component:WelcomeComponent,
      },
      {
        path:'**',
        component:WelcomeComponent,
      },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
