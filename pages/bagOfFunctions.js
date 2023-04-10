let signals = {};
signals['product-interaction'] = {
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
};

signals['app-response'] = 'APP_RESPONSE see notes';
signals['error'] = 'ERROR see notes';
signals['purchase'] = 'PURCHASE see notes';
signals['search'] = 'SEARCH see notes';
signals['search'] = 'FILTER_INTERACTION see notes';
signals['general-component-event'] = 'COMPONENT_EVENT see notes';

signals['page-products-displayed'] = {
  screen: {
    attributes: {
      categoryDetails: 'test',
    },
  },
  headerUnified: 'leggings',
  screenCollections: ['leggings-pdp'],
  collectionList: [
    {
      type: 'pdp',
      id: 'leggings-pdp',
      name: {
        localized: 'pdp-test',
      },
      productList: [
        {
          productId: 'leggings',
          unifiedId: 'align-legging',
          skuList: [
            {
              sku: 'ca-123456',
            },
          ],
        },
      ],
    },
  ],
};

// export function unrollJSON(json) {
//   let result = {};
//   for (const [key, value] of Object.entries(json)) {
//     if (typeof value === 'object' && value !== null) {
//       const nested = unrollJSON(value);
//       for (const [nestedKey, nestedValue] of Object.entries(nested)) {
//         result[key + '.' + nestedKey] = nestedValue;
//       }
//     } else {
//       result[key] = value;
//     }
//   }
//   return result;
// }

export function filterNoise(x) {
  // The returned JSON from MwaAnalytics.trackEvent has gaint dumb array with entries like:
  // ["payload"]["properties"]["334"] =  "u"
  //
  // This function will snip that noise out and return a cleaner object
  //
  // Frankly, this weird data shape looks like a bug to me. Adobe's bug? Ours? Dunno.
  //

  const filteredProps = Object.fromEntries(
    Object.entries(x.payload.properties).filter(([key, value]) => isNaN(key))
  );

  const filteredX = {
    ...x,
    payload: {
      ...x.payload,
      properties: filteredProps,
    },
  };
  return filteredX;
}
/* 
export function flattenObject(obj, prefix = '') {
  let flatObj = {};
  for (const [key, value] of Object.entries(obj)) {
    const newKey = prefix + key;
    if (typeof value === 'object' && value !== null) {
      Object.assign(flatObj, flattenObject(value, newKey + '.'));
    } else {
      flatObj[newKey] = value;
    }
  }
  return flatObj;
}
*/
export function tan(thing) {
  console.log('%c ' + thing, 'background:tan');
}
export function green(thing) {
  console.log('%c ' + thing, 'background:lightgreen');
}
export function pink(thing) {
  console.log('%c ' + thing, 'background:pink');
}

export const setTheEvent = (whichEvent, setJsonToSend, setCurrentEvent) => {
  console.log('%c Which Event? ' + whichEvent, 'background:lightblue;');
  const x = signals[whichEvent];
  setJsonToSend(JSON.stringify(x, null, 2));
  setCurrentEvent(whichEvent);
};
