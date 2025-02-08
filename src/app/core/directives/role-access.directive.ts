import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { UserRole } from '../auth/model/UserRole';

@Directive({
    selector: '[appRoleAccess]',
    standalone: true,
})
export class RoleAccessDirective {
    private userRole!: UserRole | null;
    private subscription!: Subscription;

    @Input() set allowRoles(roles: UserRole[]) {
        this.subscription = this.authService.userRole$.subscribe((userRole) => {
            this.userRole = userRole;
            this.updateView(roles);
        });
    }

    constructor(
        private authService: AuthService,
        private templateRef: TemplateRef<any>,
        private viewContainer: ViewContainerRef
    ) { }

    private updateView(allowRoles: UserRole[]): void {
        this.viewContainer.clear();
        if (allowRoles.includes(this.userRole! as UserRole)) {
            this.viewContainer.createEmbeddedView(this.templateRef);
        } 
    }

    ngOnDestroy(): void {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}
