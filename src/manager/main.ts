namespace apps.Viewer {
  window.addEventListener('load', e => {
    const target = document.querySelector('div');
    const app = new manager.app.components.AppComponent(target!);
    app.init();
  });
}
