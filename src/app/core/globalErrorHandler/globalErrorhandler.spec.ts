import { TestBed } from '@angular/core/testing';
import { GlobalErrorHandler } from './globalErrorhandler';
import { Injector } from '@angular/core';
import { HttpErrorResponse, HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { Overlay } from '@angular/cdk/overlay';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { throwError } from 'rxjs';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { MaterialModule } from '../../shared/material/material.module';

describe('GlobalErrorHandler', () => {
  // let snackBarSpy: any;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        HttpClientTestingModule,
        MatSnackBarModule,
        BrowserAnimationsModule,
        BrowserDynamicTestingModule,
        MaterialModule
      ],
      providers: [
        GlobalErrorHandler,
        Injector,
        Overlay,
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: {} }
      ]
    });
  });

  it('should be created', () => {
    const errorHandler = TestBed.inject(GlobalErrorHandler);
    expect(errorHandler).toBeTruthy();
  });

  it('should show error message in case of server error', () => {
    const errorHandler = TestBed.inject(GlobalErrorHandler);

    const error: HttpErrorResponse = new HttpErrorResponse({
      error: new Error('Error')
    });
    throwError(error);
    spyOn(errorHandler, 'handleError').and.callThrough();
    errorHandler.handleError(error);
    expect(errorHandler.handleError).toHaveBeenCalled();
  });
});
