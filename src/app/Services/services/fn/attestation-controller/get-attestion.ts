/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface GetAttestion$Params {
  idUser: number;
  idDemandeur: number;
  idDemande: number;
  idStructure: number;
}

export function getAttestion(http: HttpClient, rootUrl: string, params: GetAttestion$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
  const rb = new RequestBuilder(rootUrl, getAttestion.PATH, 'get');
  if (params) {
    rb.path('idUser', params.idUser, {});
    rb.path('idDemandeur', params.idDemandeur, {});
    rb.path('idDemande', params.idDemande, {});
    rb.path('idStructure', params.idStructure, {});
  }

  return http.request(
    rb.build({ responseType: 'blob', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<string>;
    })
  );
}

getAttestion.PATH = '/api/attestation/pdf_genere/{idUser}/{idDemandeur}/{idDemande}/{idStructure}';
