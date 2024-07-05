/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { download } from '../fn/file-upload-controller/download';
import { Download$Params } from '../fn/file-upload-controller/download';
import { FileUploadResponse } from '../models/file-upload-response';
import { uploadFile } from '../fn/file-upload-controller/upload-file';
import { UploadFile$Params } from '../fn/file-upload-controller/upload-file';

@Injectable({ providedIn: 'root' })
export class FileUploadControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `uploadFile()` */
  static readonly UploadFilePath = '/api/uploads';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `uploadFile()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  uploadFile$Response(params: UploadFile$Params, context?: HttpContext): Observable<StrictHttpResponse<FileUploadResponse>> {
    return uploadFile(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `uploadFile$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  uploadFile(params: UploadFile$Params, context?: HttpContext): Observable<FileUploadResponse> {
    return this.uploadFile$Response(params, context).pipe(
      map((r: StrictHttpResponse<FileUploadResponse>): FileUploadResponse => r.body)
    );
  }

  /** Path part for operation `download()` */
  static readonly DownloadPath = '/api/uploads/downoad/{file}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `download()` instead.
   *
   * This method doesn't expect any request body.
   */
  download$Response(params?: Download$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return download(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `download$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  download(params?: Download$Params, context?: HttpContext): Observable<Blob> {
    return this.download$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

}
