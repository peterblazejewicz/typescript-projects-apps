namespace shared.components {
  export abstract class DefaultAppComponent {
    constructor(protected container: HTMLElement) {}
    abstract init(): void;
  }
}
