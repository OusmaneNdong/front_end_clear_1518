/* tslint:disable */
/* eslint-disable */
import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiConfiguration, ApiConfigurationParams } from './api-configuration';

import { UtilisateurControllerService } from './services/utilisateur-controller.service';
import { FileUploadControllerService } from './services/file-upload-controller.service';
import { NotifControllerService } from './services/notif-controller.service';
import { SendMailControllerService } from './services/send-mail-controller.service';
import { DemandeurControllerService } from './services/demandeur-controller.service';
import { DemandeControllerService } from './services/demande-controller.service';
import { DashbordControllerService } from './services/dashbord-controller.service';
import { CertificationControllerService } from './services/certification-controller.service';
import { AttestationControllerService } from './services/attestation-controller.service';

/**
 * Module that provides all services and configuration.
 */
@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [
    UtilisateurControllerService,
    FileUploadControllerService,
    NotifControllerService,
    SendMailControllerService,
    DemandeurControllerService,
    DemandeControllerService,
    DashbordControllerService,
    CertificationControllerService,
    AttestationControllerService,
    ApiConfiguration
  ],
})
export class ApiModule {
  static forRoot(params: ApiConfigurationParams): ModuleWithProviders<ApiModule> {
    return {
      ngModule: ApiModule,
      providers: [
        {
          provide: ApiConfiguration,
          useValue: params
        }
      ]
    }
  }

  constructor( 
    @Optional() @SkipSelf() parentModule: ApiModule,
    @Optional() http: HttpClient
  ) {
    if (parentModule) {
      throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
    }
    if (!http) {
      throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
      'See also https://github.com/angular/angular/issues/20575');
    }
  }
}
