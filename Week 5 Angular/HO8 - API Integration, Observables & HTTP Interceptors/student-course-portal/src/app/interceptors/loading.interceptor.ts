import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { finalize } from 'rxjs/operators';

import { LoadingService } from '../services/loading.service';

export const loadingInterceptor: HttpInterceptorFn = (req, next) => {

  const loadingService = inject(LoadingService);

  // HO8 - Show Loading Spinner
  loadingService.show();

  return next(req).pipe(

    finalize(() => {

      // Hide Loading Spinner
      loadingService.hide();

    })

  );

};