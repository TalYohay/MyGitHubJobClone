import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowallpositionsComponent } from './showallpositions/showallpositions.component';
import { PositionserviceService } from './services/positionservice.service';
import { SearchPipe } from './search.pipe'
import { FormsModule} from '@angular/forms'
import { MarkdownModule } from 'ngx-markdown';
import {NgxPaginationModule} from 'ngx-pagination'; 


@NgModule({
  declarations: [
    AppComponent,
    ShowallpositionsComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    NgxPaginationModule,
   
    MarkdownModule.forRoot()

  ],
  providers: [PositionserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
