/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { DemandeurDto } from '../../models/demandeur-dto';

export interface GetByStatus1$Params {
  statut: string;
}

export function getByStatus1(http: HttpClient, rootUrl: string, params: GetByStatus1$Params, context?: HttpContext): Observable<StrictHttpResponse<DemandeurDto>> {
  const rb = new RequestBuilder(rootUrl, getByStatus1.PATH, 'get');
  if (params) {
    rb.path('statut', params.statut, {});
  }

  return http.request(
    rb.build({ responseType: 'blob', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<DemandeurDto>;
    })
  );
}

getByStatus1.PATH = '/api/demandeur/getStatut/{statut}';
