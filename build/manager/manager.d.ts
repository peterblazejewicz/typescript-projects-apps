declare namespace manager.model {
    interface User {
        firstName: string;
        lastName: string;
    }
}
declare namespace manager.app.components {
    class AppComponent {
        private container;
        constructor(container: HTMLElement);
        init(): void;
    }
}
declare namespace apps.Viewer {
}
