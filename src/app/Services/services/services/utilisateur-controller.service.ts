/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { authentication } from '../fn/utilisateur-controller/authentication';
import { Authentication$Params } from '../fn/utilisateur-controller/authentication';
import { AuthenticationResponse } from '../models/authentication-response';
import { changePassword } from '../fn/utilisateur-controller/change-password';
import { ChangePassword$Params } from '../fn/utilisateur-controller/change-password';
import { changePasswordTest } from '../fn/utilisateur-controller/change-password-test';
import { ChangePasswordTest$Params } from '../fn/utilisateur-controller/change-password-test';
import { connexion } from '../fn/utilisateur-controller/connexion';
import { Connexion$Params } from '../fn/utilisateur-controller/connexion';
import { findAll } from '../fn/utilisateur-controller/find-all';
import { FindAll$Params } from '../fn/utilisateur-controller/find-all';
import { forgetPassword } from '../fn/utilisateur-controller/forget-password';
import { ForgetPassword$Params } from '../fn/utilisateur-controller/forget-password';
import { getById } from '../fn/utilisateur-controller/get-by-id';
import { GetById$Params } from '../fn/utilisateur-controller/get-by-id';
import { getByStatus } from '../fn/utilisateur-controller/get-by-status';
import { GetByStatus$Params } from '../fn/utilisateur-controller/get-by-status';
import { inscription } from '../fn/utilisateur-controller/inscription';
import { Inscription$Params } from '../fn/utilisateur-controller/inscription';
import { registration } from '../fn/utilisateur-controller/registration';
import { Registration$Params } from '../fn/utilisateur-controller/registration';
import { resetPassword } from '../fn/utilisateur-controller/reset-password';
import { ResetPassword$Params } from '../fn/utilisateur-controller/reset-password';
import { resetPasswordRequest } from '../fn/utilisateur-controller/reset-password-request';
import { ResetPasswordRequest$Params } from '../fn/utilisateur-controller/reset-password-request';
import { setPassword } from '../fn/utilisateur-controller/set-password';
import { SetPassword$Params } from '../fn/utilisateur-controller/set-password';
import { Utilisateur } from '../models/utilisateur';
import { UtilisateurDto } from '../models/utilisateur-dto';

@Injectable({ providedIn: 'root' })
export class UtilisateurControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `setPassword()` */
  static readonly SetPasswordPath = '/api/utilisateur/set-password';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `setPassword()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  setPassword$Response(params: SetPassword$Params, context?: HttpContext): Observable<StrictHttpResponse<UtilisateurDto>> {
    return setPassword(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `setPassword$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  setPassword(params: SetPassword$Params, context?: HttpContext): Observable<UtilisateurDto> {
    return this.setPassword$Response(params, context).pipe(
      map((r: StrictHttpResponse<UtilisateurDto>): UtilisateurDto => r.body)
    );
  }

  /** Path part for operation `forgetPassword()` */
  static readonly ForgetPasswordPath = '/api/utilisateur/forget-password';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `forgetPassword()` instead.
   *
   * This method doesn't expect any request body.
   */
  forgetPassword$Response(params: ForgetPassword$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return forgetPassword(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `forgetPassword$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  forgetPassword(params: ForgetPassword$Params, context?: HttpContext): Observable<string> {
    return this.forgetPassword$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `resetPassword()` */
  static readonly ResetPasswordPath = '/api/utilisateur/reset-password';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `resetPassword()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  resetPassword$Response(params: ResetPassword$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return resetPassword(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `resetPassword$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  resetPassword(params: ResetPassword$Params, context?: HttpContext): Observable<string> {
    return this.resetPassword$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `registration()` */
  static readonly RegistrationPath = '/api/utilisateur/register';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `registration()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  registration$Response(params: Registration$Params, context?: HttpContext): Observable<StrictHttpResponse<Utilisateur>> {
    return registration(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `registration$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  registration(params: Registration$Params, context?: HttpContext): Observable<Utilisateur> {
    return this.registration$Response(params, context).pipe(
      map((r: StrictHttpResponse<Utilisateur>): Utilisateur => r.body)
    );
  }

  /** Path part for operation `resetPasswordRequest()` */
  static readonly ResetPasswordRequestPath = '/api/utilisateur/password-reset-request';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `resetPasswordRequest()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  resetPasswordRequest$Response(params: ResetPasswordRequest$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return resetPasswordRequest(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `resetPasswordRequest$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  resetPasswordRequest(params: ResetPasswordRequest$Params, context?: HttpContext): Observable<string> {
    return this.resetPasswordRequest$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `inscription()` */
  static readonly InscriptionPath = '/api/utilisateur/inscription';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `inscription()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  inscription$Response(params: Inscription$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return inscription(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `inscription$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  inscription(params: Inscription$Params, context?: HttpContext): Observable<string> {
    return this.inscription$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `connexion()` */
  static readonly ConnexionPath = '/api/utilisateur/connexion';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `connexion()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  connexion$Response(params: Connexion$Params, context?: HttpContext): Observable<StrictHttpResponse<{
}>> {
    return connexion(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `connexion$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  connexion(params: Connexion$Params, context?: HttpContext): Observable<{
}> {
    return this.connexion$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
}>): {
} => r.body)
    );
  }

  /** Path part for operation `changePassword()` */
  static readonly ChangePasswordPath = '/api/utilisateur/change-password';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `changePassword()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  changePassword$Response(params: ChangePassword$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return changePassword(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `changePassword$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  changePassword(params: ChangePassword$Params, context?: HttpContext): Observable<string> {
    return this.changePassword$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `changePasswordTest()` */
  static readonly ChangePasswordTestPath = '/api/utilisateur/change-password-test';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `changePasswordTest()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  changePasswordTest$Response(params: ChangePasswordTest$Params, context?: HttpContext): Observable<StrictHttpResponse<UtilisateurDto>> {
    return changePasswordTest(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `changePasswordTest$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  changePasswordTest(params: ChangePasswordTest$Params, context?: HttpContext): Observable<UtilisateurDto> {
    return this.changePasswordTest$Response(params, context).pipe(
      map((r: StrictHttpResponse<UtilisateurDto>): UtilisateurDto => r.body)
    );
  }

  /** Path part for operation `authentication()` */
  static readonly AuthenticationPath = '/api/utilisateur/authentication';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `authentication()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  authentication$Response(params: Authentication$Params, context?: HttpContext): Observable<StrictHttpResponse<AuthenticationResponse>> {
    return authentication(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `authentication$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  authentication(params: Authentication$Params, context?: HttpContext): Observable<AuthenticationResponse> {
    return this.authentication$Response(params, context).pipe(
      map((r: StrictHttpResponse<AuthenticationResponse>): AuthenticationResponse => r.body)
    );
  }

  /** Path part for operation `getById()` */
  static readonly GetByIdPath = '/api/utilisateur/utilisateurDetails/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getById()` instead.
   *
   * This method doesn't expect any request body.
   */
  getById$Response(params: GetById$Params, context?: HttpContext): Observable<StrictHttpResponse<UtilisateurDto>> {
    return getById(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getById(params: GetById$Params, context?: HttpContext): Observable<UtilisateurDto> {
    return this.getById$Response(params, context).pipe(
      map((r: StrictHttpResponse<UtilisateurDto>): UtilisateurDto => r.body)
    );
  }

  /** Path part for operation `getByStatus()` */
  static readonly GetByStatusPath = '/api/utilisateur/statut/{statut}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getByStatus()` instead.
   *
   * This method doesn't expect any request body.
   */
  getByStatus$Response(params: GetByStatus$Params, context?: HttpContext): Observable<StrictHttpResponse<UtilisateurDto>> {
    return getByStatus(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getByStatus$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getByStatus(params: GetByStatus$Params, context?: HttpContext): Observable<UtilisateurDto> {
    return this.getByStatus$Response(params, context).pipe(
      map((r: StrictHttpResponse<UtilisateurDto>): UtilisateurDto => r.body)
    );
  }

  /** Path part for operation `findAll()` */
  static readonly FindAllPath = '/api/utilisateur/getUtilisateur';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAll()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll$Response(params?: FindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<UtilisateurDto>>> {
    return findAll(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findAll$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll(params?: FindAll$Params, context?: HttpContext): Observable<Array<UtilisateurDto>> {
    return this.findAll$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<UtilisateurDto>>): Array<UtilisateurDto> => r.body)
    );
  }

}
