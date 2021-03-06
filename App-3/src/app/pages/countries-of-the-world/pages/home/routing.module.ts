import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CountriesOfTheWorldPage } from './page';

const routes: Routes = [
	{
		path: '',
		component: CountriesOfTheWorldPage,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class CountriesOfTheWorldPageRoutingModule {}
