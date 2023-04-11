let signals = {};
// signals['app-response'] = 'APP_RESPONSE see notes';
signals['error'] = {
  error: {
    errorType: ['ERROR TYPE <string>'],
    errorDetails: ['ERROR DETAILS <string>'],
    errorGuestFacing: ['ERROR GUEST FACING? <boolean>'],
    errorMessage: ['ERROR MESSAGE <string>'],
  },
};
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

signals['purchase'] = {
  orderId: 'ca91299292',
  screenCollections: ['purchase'],
  collectionList: [
    {
      type: 'purchase',
      id: 'purchase-id',
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
signals['search'] = 'SEARCH see notes';

export function filterNoise(x) {
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

// ----------------------
export const setTheEvent = (whichEvent, setJsonToSend, setCurrentEvent) => {
  console.log('%c Which Event? ' + whichEvent, 'background:lightblue;');
  const x = signals[whichEvent];
  setJsonToSend(JSON.stringify(x, null, 2));
  setCurrentEvent(whichEvent);
};
// ----------------------
export function tan(thing) {
  console.log('%c ' + thing, 'background:tan');
}
export function green(thing) {
  console.log('%c ' + thing, 'background:lightgreen');
}
export function pink(thing) {
  console.log('%c ' + thing, 'background:pink');
}

// ----------------------
export function isJSON(str) {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
}
