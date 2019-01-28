namespace apps.Viewer {
  window.addEventListener('load', e => {
    const target = document.querySelector('div');
    const app = new viewer.app.components.AppComponent(target!);
    app.init();
  });
}
