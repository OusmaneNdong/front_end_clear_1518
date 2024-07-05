/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { DemandeurDto } from '../../models/demandeur-dto';

export interface GetByNin$Params {
  nin: string;
}

export function getByNin(http: HttpClient, rootUrl: string, params: GetByNin$Params, context?: HttpContext): Observable<StrictHttpResponse<DemandeurDto>> {
  const rb = new RequestBuilder(rootUrl, getByNin.PATH, 'get');
  if (params) {
    rb.path('nin', params.nin, {});
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

getByNin.PATH = '/api/demandeur/details/{nin}';
