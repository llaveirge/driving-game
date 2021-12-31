var data = {
  direction: 'east'
};

function beforeUnloadHandler(event) {
  var dataJSON = JSON.stringify(data);
  localStorage.setItem('data-local-storage', dataJSON);
}

window.addEventListener('beforeunload', beforeUnloadHandler);
