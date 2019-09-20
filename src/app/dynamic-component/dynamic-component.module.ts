import { CustomerListPresentationComponent } from './dynamic-container/dynamic-presentation/customer-list-presentation/customer-list.presentation';
import { CustomerFormPresentationComponent } from './dynamic-container/dynamic-presentation/customer-form-presentation/customer-form.presentation';
import { DynamicComponentService } from './dynamic-component.service';
import { DynamicPresentationComponent } from './dynamic-container/dynamic-presentation/dynamic.presentation';
import { DynamicContainerComponent } from './dynamic-container/dynamic.container';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicComponentRoutingModule } from './dynamic-component-routing.module';
import { UserInfoPresentationComponent } from './dynamic-container/dynamic-presentation/user-info-presentation/user-info.presentation';
import { PortalModule } from '@angular/cdk/portal';
import { OverlayModule } from '@angular/cdk/overlay';
import { HttpClientModule } from '@angular/common/http';

import { NgSelectModule } from '@ng-select/ng-select';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
// ----------------------------------------------------------------- //

import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DynamicContainerComponent,
    DynamicPresentationComponent,
    UserInfoPresentationComponent,
    CustomerFormPresentationComponent,
    CustomerListPresentationComponent
  ],
  imports: [
    BsDatepickerModule.forRoot(),
    CommonModule,
    DynamicComponentRoutingModule,
    PortalModule,
    OverlayModule,
    NgSelectModule,
    PortalModule,
    OverlayModule,
    NgbDropdownModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    DynamicComponentService
  ],
  entryComponents: [
    UserInfoPresentationComponent,
    CustomerFormPresentationComponent,
    CustomerListPresentationComponent
  ]
})
export class DynamicComponentModule {
}
