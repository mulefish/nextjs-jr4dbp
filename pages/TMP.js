ximport { trackEvent, EVENT_CATEGORY, EVENT_TYPE } from "@lululemon/mwa-analytics";

...

trackEvent(EVENT_CATEGORY.COMPONENT_EVENT, { 
  eventSubType: EVENT_TYPE.INTERACTION, 
  component: { 
  id: "recent-searches-click",
  type: "recent-search-term", 
  text: "<string>",    
  }    
  attributes: {        
      searchTerm: "pant"    
  }, 
});






let signals = {};
signals['app-response'] = 'APP_RESPONSE see notes';
signals['error'] = 'ERROR see notes';
signals['general-component-event'] = 'COMPONENT_EVENT see notes';
signals['product-interaction'] = {
signals['purchase'] = 'PURCHASE see notes';
signals['search'] = 'SEARCH see notes';
signals['search'] = 'FILTER_INTERACTION see notes';
signals['page-products-displayed'] = {
