import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './page';

import { HomePageRoutingModule } from './routing.module';

@NgModule({
	imports: [CommonModule, FormsModule, IonicModule, HomePageRoutingModule],
	declarations: [HomePage],
})
export class HomePageModule {}
