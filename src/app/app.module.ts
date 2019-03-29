import { BrowserModule, } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/views/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatBadgeModule,
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatDividerModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatButton,
  MatTabsModule,
  MatStepperModule,
  MatOptionModule,
  MatSelectModule,
  MatSidenavModule,
  MatToolbarModule,
  MatTableModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatExpansionModule,
  MatRadioModule,
  MatMenuModule,
  MatDialogModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSortModule
} from "@angular/material";
import { SidebarComponent } from './components/views/sidebar/sidebar.component';
import { LoginComponent } from './components/views/login/login.component';
import { DashboardComponent } from './components/views/dashboard/dashboard.component';
import { ModalComponent } from './components/views/dashboard/shared/modal/modal.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import {NgxPaginationModule} from 'ngx-pagination';

import { VideosComponent } from './components/views/dashboard/shared/videos/videos.component';
import { ModalVideosComponent } from './components/views/dashboard/shared/modal-videos/modal-videos.component';
import { VideodialogComponent } from './components/views/dashboard/shared/videodialog/videodialog.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    LoginComponent,
    DashboardComponent,
    ModalComponent,
    ModalVideosComponent,
    VideosComponent,
    VideodialogComponent,
   
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    AngularFontAwesomeModule,
    MatDialogModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule,
    BrowserModule,
    MatDatepickerModule,
    AppRoutingModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatStepperModule,
    MatOptionModule,
    MatButtonModule,
    MatSelectModule,
    MatButtonModule,
    MatGridListModule,
    MatCheckboxModule,
    MatDividerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatIconModule,
    MatTabsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatBadgeModule,
    MatTableModule,
    MatExpansionModule,
    MatMenuModule,
    MatRadioModule,
    MatExpansionModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSortModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[
    ModalComponent,
    ModalVideosComponent,
    VideodialogComponent
  ]
  
  
})
export class AppModule { }
