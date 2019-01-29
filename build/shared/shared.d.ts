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
