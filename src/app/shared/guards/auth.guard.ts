import { ActivatedRoute, CanActivateFn, Router } from '@angular/router';
import { HelperService } from '../helpers/helper.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  let helperSerive: HelperService = inject(HelperService);
  let router: Router = inject(Router);
  let activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  const token = helperSerive.token()
  if (token) {
    router.navigate(['/login']);
  }
  return true;
};
