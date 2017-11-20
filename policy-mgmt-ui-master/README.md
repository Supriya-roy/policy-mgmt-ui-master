# PolicyMgmtUi

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.4.7.
Install angular cli through node.

`npm install -g @angular/cli`

Open cmd from your desired folder and execute  the below command:

`ng new policy-mgmt-ui --style scss`

This will create an Angular 2 project named policy-mgmt-ui

## Integrating Bootstrap CSS with the app

Run the commands given below: 

`cd policy-mgmt-ui`

`npm install bootstrap-sass –save`

In the `src/assets/` directory, create a directory named `bootstrap-sass` with an empty file named: `_variables.scss`.
In the `_variables.scss` file, paste the content from:
`node_modules/bootstrap-sass/assets/stylesheets/bootstrap/_variables.scss`
In the `_variables.scss` file, find the line with `$icon-font-path` and change it to point to the proper directory:
`$icon-font-path: "../node_modules/bootstrap-sass/assets/fonts/bootstrap/" !default;`
In `src/styles.scss`, add the following:

`@import "assets/bootstrap-sass/variables";`

`@import '../node_modules/bootstrap-sass/assets/stylesheets/_bootstrap';`

To check that bootstrap css is working we will just write a bit of test code in `app.component.html`

````html
<div class="container">
  <div class="row">
    <div class="col-md-6"> col-md-6 </div> <div class="col-md-6"> col-md-6</div>
  </div>
  <div class="row">
    <div class="col-md-8"> col-md-8 </div> <div class="col-md-4"> col-md-4</div>
  </div>
</div>
````

And then  execute:
`ng serve –open`

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files. Or type `ng serve --open` which will directly open the app in your default browser.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Deploying in Pivotal Cloud Foundry

Run the below commands from `policy-mgmt-ui` directory one after the other

`ng build`
* For prod build use: `ng build -prod`

`cd dist`

`cf push  -b staticfile_buildpack policy-mgmt-ui`

Check if everything is working fine by opening the url of policy-mgmt-ui app deployed in pcf.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
"# policy_mgmt" 

## References

https://www.barbarianmeetscoding.com/blog/2016/03/25/getting-started-with-angular-2-step-by-step-1-your-first-component/

https://shermandigital.com/blog/bootstrap-sass-with-angular-cli/

https://github.com/kekeh/mydatepicker

https://stackoverflow.com/questions/42703699/deploying-angular2-application-in-pcf
