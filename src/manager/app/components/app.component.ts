/// <reference path="../model/user.ts" />
namespace manager.app.components {
  export class AppComponent {
    constructor(private container: HTMLElement) {}

    init() {
      const user: manager.model.User = { firstName: "Jonh", lastName: "Doe" };
      const div = document.createElement("div");
      div.textContent = `Hello ${user.firstName} ${user.lastName}!`;
      this.container.appendChild(div);
    }
  }
}
