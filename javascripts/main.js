window.onload = function() {
  var app = new App();
  app.initialize();
  smoothScroll.init();
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
      this.body = document.getElementsByTagName('body')[0];
      this.navBtn = document.getElementById('navBtn');
      this.nav = document.getElementById('nav');
    },

    /**
     * Add event listeners
     */
    addEventListeners: function() {
      this.body.addEventListener('click', function(evt) {
        var target = evt.target;

        // Nav button click handler
        if (target.id === 'navBtn') this.onNavBtnClick();
        // Nav link click handler
        else if (target.classList.contains('nav__link')) this.onMobileNavLinkClick();
      }.bind(this));
    },

    /**
     * Nav button click handler
     * @param  {Event} evt click event
     */
    onNavBtnClick: function(evt) {
      this.nav.classList.toggle('nav--open');
    },

    onMobileNavLinkClick: function() {
      this.nav.classList.toggle('nav--open', false);
    }
  };
}
