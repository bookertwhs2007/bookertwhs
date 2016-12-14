window.onload = function() {
  var app = new App();
  app.initialize();
};

function App() {
  return {
    /**
     * Initialize the application
     */
    initialize: function() {
      this.cacheUI();
      this.addEventListeners();
    },

    /**
     * Cache UI elements
     */
    cacheUI: function() {
      this.navBtn = document.getElementById('navBtn');
    },

    addEventListeners: function() {
      this.navBtn.addEventListener('click', this.onNavBtnClick);
    },

    onNavBtnClick: function(evt) {
      console.log('click');
    }
  };
}
