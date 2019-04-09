import $ from 'jquery';
import waypoint from '../../../../node_modules/waypoints/lib/noframework.waypoints';
import smoothScroll from 'jquery-smooth-scroll';

class StickyHeader{
  constructor(){
    this.siteHeader = $('.site-header');
    this.headerTriggerElement = $('.large-hero__title');
    this.createHeaderWaypoint();
    this.pageSections = $(".page-section");
    this.headerLinks = $(".primary-nav a");
    this.createPageSectionWaypoint();
    this.addSmoothScrolling();
  }

  addSmoothScrolling(){
    this.headerLinks.smoothScroll();
  }

  createHeaderWaypoint(){
    var that = this;
    new Waypoint({
      element: this.headerTriggerElement[0], //position for trigger
      handler: function(direction){
        if (direction =="down"){
          that.siteHeader.addClass("site-header__dark");
        }else{
          that.siteHeader.removeClass("site-header__dark");
        }
      }   //action by js0

    })
  }

  createPageSectionWaypoint(){
    var that = this;
    this.pageSections.each(function(){
      var currentPageSection = this;
      new Waypoint({
        element: currentPageSection,
        handler: function(direction){
          if (direction =="down"){
            var matchingHeaderLink = currentPageSection.getAttribute("data-matching-link");
            that.headerLinks.removeClass("is-current-link");
            $(matchingHeaderLink).addClass("is-current-link");
          }
        },
        offset: "20%"
      });

      new Waypoint({
        element: currentPageSection,
        handler: function(direction){
          if (direction =="up"){
            var matchingHeaderLink = currentPageSection.getAttribute("data-matching-link");
            that.headerLinks.removeClass("is-current-link");
            $(matchingHeaderLink).addClass("is-current-link");
          }
        },
        offset: "-40%"
      });
    });
  }
}
export default StickyHeader;