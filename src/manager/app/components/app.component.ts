namespace manager.app.components {
  export class AppComponent extends shared.components.DefaultAppComponent {
    init() {
      const user: shared.model.User = { firstName: "Jonh", lastName: "Doe" };
      const div = document.createElement("div");
      div.textContent = `Hello ${user.firstName} ${user.lastName}!`;
      this.container.appendChild(div);
    }
  }
}
