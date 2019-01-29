declare namespace shared.components {
    abstract class DefaultAppComponent {
        protected container: HTMLElement;
        constructor(container: HTMLElement);
        abstract init(): void;
    }
}
declare namespace shared.model {
    interface User {
        firstName: string;
        lastName: string;
    }
}
declare namespace viewer.app.components {
    class AppComponent extends shared.components.DefaultAppComponent {
        init(): void;
    }
}
declare namespace apps.Viewer {
}
