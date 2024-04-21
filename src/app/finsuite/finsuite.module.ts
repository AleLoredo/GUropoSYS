import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatExpansionModule } from '@angular/material/expansion';
import { FinsuiteRoutingModule } from './finsuite-routing.module';
import { ViewsComponent } from './views/views-general/views.component';
import { CarouselModule } from 'primeng/carousel';
import { MatTreeModule } from '@angular/material/tree';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { Store, StoreModule } from '@ngrx/store';
import { SkeletonModule } from 'primeng/skeleton';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ChartModule } from 'primeng/chart';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { GalleriaModule } from 'primeng/galleria';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ServiceComponent } from './components/service/service.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { CompanyComponent } from './components/company/company.component';
import { ClientsComponent } from './components/clients/clients.component';
import { FooterComponent } from './components/footer/footer.component';
import { SectionConstructionComponent } from './components/section-services/section-construction/section-construction.component';
import { PlantMaintenanceComponent } from './components/section-services/plant-maintenance/plant-maintenance.component';
import { TanksComponent } from './components/section-services/tanks/tanks.component';
import { WorkStructuresComponent } from './components/section-services/work-structures/work-structures.component';
import { CivilWorkComponent } from './components/section-services/civil-work/civil-work.component';

@NgModule({
  declarations: [
    NavbarComponent,
    ViewsComponent,
    ServiceComponent,
    HomeComponent,
    ContactComponent,
    CompanyComponent,
    ClientsComponent,
    FooterComponent,
    SectionConstructionComponent,
    PlantMaintenanceComponent,
    TanksComponent,
    WorkStructuresComponent,
    CivilWorkComponent,
  ],
  imports: [
    MatSnackBarModule,
    MatBottomSheetModule,
    FinsuiteRoutingModule,
    ReactiveFormsModule,
    GalleriaModule,
    FormsModule,
    CarouselModule,
    MatCheckboxModule,
    SkeletonModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatTableModule,
    ChartModule,
    MatTreeModule,
    MatTooltipModule,
  ],
  providers: [Store],
})
export class FinsuiteModule {}
