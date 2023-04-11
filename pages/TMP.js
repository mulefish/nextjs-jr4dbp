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



