import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';

@Component({
  selector: 'formly-wrapper-label',
  template: `
    <label [attr.for]="id" class="form-control-label">{{ to.label }}</label>
    <ng-template #fieldComponent></ng-template>
  `,
})
export class NextWrapperLabel extends FieldWrapper {
  @ViewChild('fieldComponent', {read: ViewContainerRef}) fieldComponent: ViewContainerRef;
}