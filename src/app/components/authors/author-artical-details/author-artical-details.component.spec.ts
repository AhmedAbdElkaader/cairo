import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorArticalDetailsComponent } from './author-artical-details.component';

describe('AuthorArticalDetailsComponent', () => {
  let component: AuthorArticalDetailsComponent;
  let fixture: ComponentFixture<AuthorArticalDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuthorArticalDetailsComponent]
    });
    fixture = TestBed.createComponent(AuthorArticalDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
