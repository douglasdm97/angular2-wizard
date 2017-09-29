# angular2-next-wizard


This is an Angular2 Form Wizard component. Just like any form wizard. You can define steps and control how each step works. You can enable/disable navigation button based on validity of the current step. Currently, the component only support basic functionality. More features will come later.

You can checkout the demo below and see how to use it in the next section.

## Dependencies
- Formly
- Angular2 (tested with 2.3.1)
- Bootstrap 4

## Installation

After installing the above dependencies, install angular2-next-wizard via:

```bash
$ npm install angular2-next-wizard --save
```

## How to use the component

Once you have installed the library, you can import it in `AppModule` of your application:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

// Import your library
import { FormWizardModule } from 'angular2-wizard';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    // Specify the library as an import
    FormWizardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Once your library is imported, you can use form-wizard and wizard-step components in your Angular application:

```xml
<form-wizard>
  <wizard-step [title]="'Step1'" [isValid]="emailForm.form.valid" (onNext)="onStep1Next($event)">
    <h1>Step1</h1>
    <form #emailForm="ngForm">
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input type="email" class="form-control" id="exampleInputEmail1" name="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"
          [(ngModel)]="data.email" required>
        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>
    </form>
  </wizard-step>
  <wizard-step [title]="'Step2'" (onNext)="onStep2Next($event)">
    <h1>Step2</h1>
  </wizard-step>
  <wizard-step [title]="'Step3'" (onNext)="onStep3Next($event)">
    <h1>Step3</h1>
  </wizard-step>
  <wizard-step [title]="'Step4'" (onComplete)="onComplete($event)">
    <div [ngSwitch]="isCompleted">
      <div *ngSwitchDefault>
        <h1>Step4</h1>
      </div>
      <div *ngSwitchCase="true">
        <h4>Thank you! You have completed all the steps.</h4>
      </div>
    </div>
  </wizard-step>
</form-wizard>
```

## License
