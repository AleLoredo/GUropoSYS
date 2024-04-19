import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantMaintenanceComponent } from './plant-maintenance.component';

describe('PlantMaintenanceComponent', () => {
  let component: PlantMaintenanceComponent;
  let fixture: ComponentFixture<PlantMaintenanceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlantMaintenanceComponent]
    });
    fixture = TestBed.createComponent(PlantMaintenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
