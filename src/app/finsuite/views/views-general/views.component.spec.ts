import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewsComponent } from './views.component';

describe('FsHomeComponent', () => {
  let component: ViewsComponent;
  let fixture: ComponentFixture<ViewsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewsComponent],
    });
    fixture = TestBed.createComponent(ViewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
