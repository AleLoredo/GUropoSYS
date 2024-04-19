import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkStructuresComponent } from './work-structures.component';

describe('WorkStructuresComponent', () => {
  let component: WorkStructuresComponent;
  let fixture: ComponentFixture<WorkStructuresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkStructuresComponent]
    });
    fixture = TestBed.createComponent(WorkStructuresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
