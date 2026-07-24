import { CanDeactivateFn } from '@angular/router';

export interface CanComponentDeactivate {

  isDirty(): boolean;

}

export const unsavedChangesGuard: CanDeactivateFn<CanComponentDeactivate> =

(component) => {

  if (component.isDirty()) {

    return confirm(
      'You have unsaved changes. Do you really want to leave this page?'
    );

  }

  return true;

};
