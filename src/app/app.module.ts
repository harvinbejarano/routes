import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { Component, NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { NotfoundsComponent } from './notfounds/notfounds.component';


@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		AboutComponent,
		NotfoundsComponent,
	],
	imports: [ BrowserModule, AppRoutingModule ],
	providers: [],
	bootstrap: [ AppComponent ],
})
export class AppModule {}
