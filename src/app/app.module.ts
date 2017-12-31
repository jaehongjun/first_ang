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
import { PromiseComponent } from './promise/promise.component';
import { DepartUpdateComponent } from './depart-update/depart-update.component';
import { ParentComponent } from './parent/parent.component';
import { LifecycleTestComponent } from './lifecycle-test/lifecycle-test.component';
import { UserDepartComponent } from './user-depart/user-depart.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    TestComponent,
    DepartComponent,
    WelcomeComponent,
    DepartinsertComponent,
    FuncTestComponent,
    PromiseComponent,
    DepartUpdateComponent,
    ParentComponent,
    LifecycleTestComponent,
    UserDepartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,    
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { 
        path:'userDepart',
        component:UserDepartComponent,
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
        path:'promise',
        component:PromiseComponent,
      },
      {
        path:'parent',
        component:ParentComponent,
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
