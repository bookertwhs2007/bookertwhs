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
      this.nav = document.getElementById('nav');
    },

    /**
     * Add event listeners
     */
    addEventListeners: function() {
      this.navBtn.addEventListener('click', this.onNavBtnClick.bind(this));
    },

    /**
     * Nav button click handler
     * @param  {Event} evt click event
     */
    onNavBtnClick: function(evt) {
      this.nav.classList.toggle('nav--open');
    }
  };
}
