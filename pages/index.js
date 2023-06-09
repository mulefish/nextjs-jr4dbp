import Head from 'next/head';
import React, { useRef, useEffect, useState } from 'react';
import { ExternalScripts, SomeLinks, EventButtons } from './someComponents.jsx';
import { setTheEvent, green, isJSON } from './bagOfFunctions.js';

const HomepageLayout = () => {
  const rerenderCountRef = useRef(0);
  const [gotThisJson, setGotThisJson] = useState();
  const [jsonToSend, setJsonToSend] = useState();
  const [currentEvent, setCurrentEvent] = useState();

  async function sendIt() {
    // // if (jsonToSend.length > 40) {
    // const theResult = await MwaAnalytics.trackEvent(currentEvent, jsonToSend);
    // const payload =
    //   theResult['payload']['properties']['validationResult']['data']['payload'];
    // // console.log('YAY! ' + jsonToSend + ' \n ' + jsonToSend.length);
    // setGotThisJson(JSON.stringify(payload, null, 2));
    // // } else {
    // //   setGotThisJson('Need well formed json to send');
    // // }
    alert('sendIt');
    MwaAnalytics.trackEvent('product-interaction', {
      event: {
        attributes: {
          action: 'view',
          algorithm: 'personalized',
        },
      },
      component: {
        id: 'recommendation:recently-viewed',
        type: 'ProductCarousel',
        text: 'Buy now',
        position: 2,
        totalCount: 3,
      },
      product: {
        skuID: 'ca_123',
        productID: 'prod789',
        unifiedID: '',
        name: 'cool 22" pants',
        localizedName: '',
        price: '68.99',
        salePrice: '',
        isSale: false,
        categoryUnifiedID: '',
      },
      collection: {
        type: 'recommendation',
        id: 'recently-viewed',
      },
    });
  }

  // useEffect(() => {
  //   rerenderCountRef.current += 1;
  //   if (rerenderCountRef.current <= 1) {
  //     green(
  //       'MwaAnalytics.initializeAnalytics & rerenderCount ' +
  //         rerenderCountRef.current
  //     );
  //     MwaAnalytics.initializeAnalytics('TEST', {}, [], true);
  //   }
  // });

  function handleTextChange(event) {
    setJsonToSend(event.target.value);
  }
  function handleHostChange(event) {
    setHost(event.target.value);
  }

  return (
    <div>
      <Head>
        <title>Events!</title>
      </Head>
      <ExternalScripts />
      <SomeLinks />
      <EventButtons
        setTheEvent={setTheEvent}
        setJsonToSend={setJsonToSend}
        setCurrentEvent={setCurrentEvent}
      />

      <hr />
      <button class="nudge" onClick={() => sendIt()}>
        send
      </button>

      <span class="nudge">{rerenderCountRef.current}</span>
      <span class="nudge">{currentEvent}</span>

      <hr />
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        {/* JSON that will be sent */}
        <textarea
          style={{ width: 'calc(30.0% - 10px)', height: '600px' }}
          id="sendThis"
          value={jsonToSend}
          onChange={handleTextChange}
        ></textarea>

        {/* JSON that was recieved */}
        <textarea
          style={{ width: 'calc(70.0% - 10px)', height: '1000px' }}
          id="gotThis"
          value={gotThisJson}
        ></textarea>
      </div>
    </div>
  );
};

export default HomepageLayout;
