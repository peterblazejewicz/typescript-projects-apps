declare namespace viewer.model {
    interface User {
        firstName: string;
        lastName: string;
    }
}
declare namespace viewer.app.components {
    class AppComponent {
        private container;
        constructor(container: HTMLElement);
        init(): void;
    }
}
declare namespace apps.Viewer {
}
