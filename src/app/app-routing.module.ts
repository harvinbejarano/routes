import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { NotfoundsComponent } from './notfounds/notfounds.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{ path: '', redirectTo: 'Home', pathMatch: 'full' },
	{ path: 'Home/:id', component: HomeComponent },
	{ path: 'Home', component: HomeComponent },
	{
		path: 'animals',
		loadChildren: './animals/animals.module#AnimalsModule',
	},
	{ path: 'About', component: AboutComponent },
	{ path: '**', component: NotfoundsComponent },
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ],
	declarations: [],
})
export class AppRoutingModule {}
