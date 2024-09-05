/**
 * GlobalErrorHandler
 *
 * logs the error that are occuring at run time
 */
import { ErrorHandler, Injectable } from '@angular/core';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  constructor() {}
  handleError(error: Error) {
    console.warn('Error :: ', error);

    // if (error instanceof HttpErrorResponse) {
    //   // notificationService.showError(error.message);
    // } else {
    //   const errorService = this.injector.get(ErrorService);
    //   // notificationService.showError(message);
    // }
    // Logic for overriding the default behavior for printing the error
    // for now it's just for server side error coming from the incorrect login
    // Will cover the client and server side error based on the error service we have set up
  }
}
