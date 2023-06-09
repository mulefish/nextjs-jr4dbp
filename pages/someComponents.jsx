import Script from 'next/script';
import React from 'react';

export const ExternalScripts = () => {
  const host = 'https://dxa4wb90x7ize.cloudfront.net/stage/';
  const version = 'latest';
  return (
    <div>
      <Script
        src="https://assets.adobedtm.com/7a84fdea953b/09aece6f582f/launch-e6cc9ebc113b-development.min.js"
        strategy="beforeInteractive"
        async
      />
      <Script
        src={`${host}transformation-configs/${version}/transformation-configs-remoteEntry.js?time=${Date.now()}`}
        strategy="beforeInteractive"
        deferx
      />
      <Script
        src={`${host}validation-configs/${version}/validation-configs-remoteEntry.js?time=${Date.now()}`}
        strategy="beforeInteractive"
        defer
        async
      />
      <Script
        src={`${host}lam-model/${version}/lam-model-remoteEntry.js?time=${Date.now()}`}
        strategy="beforeInteractive"
        defer
        async
      />
      <Script
        src={`${host}experiment-module/${version}/experiment-module-remoteEntry.js?time=${Date.now()}`}
        strategy="beforeInteractive"
        defer
        async
      />
      <Script
        src={`${host}%40lululemon/mwa-analytics/latest/browser/mwa-analytics.js?time=${Date.now()}`}
        async
        defer
        strategy="beforeInteractive"
      />
    </div>
  );
};

export const SomeLinks = () => {
  return (
    <div>
      <a
        class="nudge"
        target="_blank"
        href="https://lululemon.atlassian.net/wiki/spaces/DCP/pages/2917140521/EDDL+-+Menu+Items"
      >
        EDDL menu items
      </a>
      <a
        class="nudge"
        target="_blank"
        href="https://lululemon.atlassian.net/wiki/spaces/DCP/pages/edit-v2/3129968362"
      >
        DCP QA Processes - Analytics Module
      </a>

      <a
        class="nudge"
        target="_blank"
        href="https://lululemon.atlassian.net/wiki/spaces/DCP/pages/2761724896/Getting+Started+Analytics+Module+Implementation"
      >
        Getting+Started+Analytics
      </a>
    </div>
  );
};

export const EventButtons = ({
  setTheEvent,
  setJsonToSend,
  setCurrentEvent,
}) => {
  // signals['app-response'] = 'APP_RESPONSE see notes';
  // signals['error'] = 'ERROR see notes';
  // signals['general-component-event'] = 'COMPONENT_EVENT see notes';
  // signals['page-products-displayed'] = {
  // signals['product-interaction'] = {
  // signals['purchase'] = 'PURCHASE see notes';
  // signals['search'] = 'SEARCH see notes';
  // signals['search'] = 'FILTER_INTERACTION see notes';

  return (
    <div>
      {/* // app-response  */}
      <button
        class="nudge"
        onClick={() =>
          setTheEvent('app-response', setJsonToSend, setCurrentEvent)
        }
      >
        app-response
      </button>

      {/* // error  */}
      <button
        class="nudge"
        onClick={() => setTheEvent('error', setJsonToSend, setCurrentEvent)}
      >
        error
      </button>

      {/* // general-component-event  */}
      <button
        class="nudge"
        onClick={() =>
          setTheEvent('general-component-event', setJsonToSend, setCurrentEvent)
        }
      >
        general-component-event
      </button>

      {/* // page-products-displayed  */}
      <button
        class="nudge"
        onClick={() =>
          setTheEvent('page-products-displayed', setJsonToSend, setCurrentEvent)
        }
      >
        page-products-displayed
      </button>

      {/* product-interaction */}
      <button
        class="nudge"
        onClick={() =>
          setTheEvent('product-interaction', setJsonToSend, setCurrentEvent)
        }
      >
        product-interaction
      </button>

      {/* // purchase  */}
      <button
        class="nudge"
        onClick={() => setTheEvent('purchase', setJsonToSend, setCurrentEvent)}
      >
        purchase
      </button>

      {/* // search  */}
      <button
        class="nudge"
        onClick={() => setTheEvent('search', setJsonToSend, setCurrentEvent)}
      >
        search
      </button>
    </div>
  );
};
