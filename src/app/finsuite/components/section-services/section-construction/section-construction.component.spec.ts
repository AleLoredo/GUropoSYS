import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionConstructionComponent } from './section-construction.component';

describe('SectionConstructionComponent', () => {
  let component: SectionConstructionComponent;
  let fixture: ComponentFixture<SectionConstructionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SectionConstructionComponent]
    });
    fixture = TestBed.createComponent(SectionConstructionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
