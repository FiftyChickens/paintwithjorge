# Paintwithjorge

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.2.0.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Gallery photos

Edit `GALLERY_PROJECTS` in `src/app/gallery-page/gallery-projects.ts` to add or update projects.
Each project has a title and one or more photos, each with a `src`, descriptive `alt` text,
and a label. Photos from one project can share the same `Before` or `After` label.
For before-and-after projects, put the before photo first and the after photo second. The card
shows the first photo and previews the second on hover; all photos are available in the enlarged
view. Cards crop photos to a consistent shape; the enlarged view shows the whole image.

Set `featureInSlideshow: true` on up to five projects to feature their first finished photo in the
home-page slideshow. Finished photos use `isAfter: true`. The slideshow starts paused for visitors
who prefer reduced motion, and includes a pause control and selectable dots.

The gallery preview shows every project photo with previous/next controls and position dots. Keep
labels simple (for example, `Before` and `After`); the preview also shows the current position and
total photo count (for example, `Before · 1 / 6`).

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.
The production build also prerenders the home, gallery, and contact routes as static HTML so their page content and SEO metadata are available to search crawlers.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
