declare namespace shared.components {
    abstract class DefaultAppComponent {
        protected container: HTMLElement;
        constructor(container: HTMLElement);
        abstract init(): void;
    }
}
declare namespace manager.model {
    interface User {
        firstName: string;
        lastName: string;
    }
}
declare namespace manager.app.components {
    class AppComponent extends shared.components.DefaultAppComponent {
        init(): void;
    }
}
declare namespace apps.Viewer {
}
