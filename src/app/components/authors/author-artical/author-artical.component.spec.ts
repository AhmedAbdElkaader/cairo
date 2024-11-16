import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorArticalComponent } from './author-artical.component';

describe('AuthorArticalComponent', () => {
  let component: AuthorArticalComponent;
  let fixture: ComponentFixture<AuthorArticalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuthorArticalComponent]
    });
    fixture = TestBed.createComponent(AuthorArticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
