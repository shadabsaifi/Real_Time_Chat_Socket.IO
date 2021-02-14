import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ToastrModule } from 'ngx-toastr';
import { NgxUiLoaderModule } from  'ngx-ui-loader';

import { DataService } from 'src/app/_service/data-service.service';
import { BasicAuthInterceptor, ErrorInterceptor } from './_helper/index';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// const config: SocketIoConfig = { url: environment.socketUrl, options: { transports: ['websocket']} };


// import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
// import { environment } from '../environments/environment';
// const config: SocketIoConfig = { url: environment.socketUrl, options: {} };
import { ChatInboxComponent } from './chat-inbox/chat-inbox.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatInboxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ToastrModule.forRoot({
      timeOut: 3000
    }),
    FormsModule,
    ReactiveFormsModule,
    NgxUiLoaderModule,
    // SocketIoModule.forRoot(config)
  ],
  providers: [
    DataService,
    { provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
