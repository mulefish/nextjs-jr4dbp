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
    if (isJSON(jsonToSend) === true) {
      const theResult = await MwaAnalytics.trackEvent(currentEvent, jsonToSend);
      const payload =
        theResult['payload']['properties']['validationResult']['data'][
          'payload'
        ];
      setGotThisJson(JSON.stringify(payload, null, 2));
    } else {
      setGotThisJson('json is not well formed');
    }
  }

  useEffect(() => {
    rerenderCountRef.current += 1;
    if (rerenderCountRef.current <= 1) {
      green(
        'MwaAnalytics.initializeAnalytics & rerenderCount ' +
          rerenderCountRef.current
      );
      MwaAnalytics.initializeAnalytics('TEST', {}, [], true);
    }
  });

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
