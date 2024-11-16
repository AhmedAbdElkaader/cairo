import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlesListComponent } from './articles-list/articles-list.component';



@NgModule({
  declarations: [
    ArticlesListComponent
  ],
  imports: [
    CommonModule
  ],
  exports :[ArticlesListComponent]
})
export class ArticlesModule { }
