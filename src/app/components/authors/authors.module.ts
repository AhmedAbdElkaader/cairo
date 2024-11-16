import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorsListComponent } from './authors-list/authors-list.component';
import { AuthorArticalComponent } from './author-artical/author-artical.component';
import { AuthorArticalDetailsComponent } from './author-artical-details/author-artical-details.component';



@NgModule({
  declarations: [
    AuthorsListComponent,
    AuthorArticalComponent,
    AuthorArticalDetailsComponent
  ],
  imports: [
    CommonModule
  ],
  exports :[
    AuthorsListComponent,
    AuthorArticalComponent,
    AuthorArticalDetailsComponent
  ]
})
export class AuthorsModule { }
