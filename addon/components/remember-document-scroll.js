import Base from './base';

export default Base.extend({
  targetElement() {
    return document.scrollingElement || // Covers every modern browser
           document.documentElement; // Covers IE
  }
});
