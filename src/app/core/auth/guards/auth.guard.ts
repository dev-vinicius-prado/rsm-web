import { inject } from '@angular/core';
import { CanActivateChildFn, CanActivateFn, Router } from '@angular/router';
import { AuthService } from 'app/core/auth/auth.service';
import { map } from 'rxjs';
import { User } from 'app/core/user/user.types';
import { UserRole } from '../model/UserRole';

export const authGuard: CanActivateFn | CanActivateChildFn = () =>
{
    const authService = inject(AuthService);
    const router: Router = inject(Router);

    // Check the authentication status
    return authService.userRole$.pipe(
        map(userRole => {
            if (userRole === UserRole.ADMIN) {
                return true;
            } else {
                return router.parseUrl('/login');
            }
        })
    );
};
