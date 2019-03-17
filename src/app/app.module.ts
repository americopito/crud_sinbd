import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';

import { CreateComponent } from './components/create/create.component';
import{EditComponent} from './components/edit/edit.component';
import { IndexComponent } from './components/index/index.component';
import { ServicioappService } from './servicioapp.service';

import { NavigationCancel,
  Event,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router } from '@angular/router';

const routes:Routes =[

  {
    path:'create',
    component:CreateComponent
  },
  {
    path:'edit/:id',
    component:EditComponent
  },
  {
    path:'index',
    component:IndexComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    EditComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    RouterModule.forRoot(routes),
    FormsModule,  
    SlimLoadingBarModule
    
  ],
  
  providers: [ServicioappService],
  bootstrap: [AppComponent]
})
export class AppModule {

  

 }
