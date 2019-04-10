[![Build Status](https://travis-ci.com/gring2/vuex-action-pender.svg?branch=master)](https://travis-ci.com/gring2/vuex-action-pender)
# vuex-action-pender
wrapper to write async vuex action simply and clean

## How to install
npm i vuex-pender

## How to use
```javascript
import { createPender } from '../src/pender';

  new Vuex.Store({
      actions: {
            'ACTION NAME': createPender({
                'action': (store, payload) => {
                  return new Promise((resolve, reject)=>{
                      resolve()
                      reject()
                  })
                },
                'pending': (store, response, ) => {
                  },
                'success': (store, response, )=> {
  
                },
                'fail':  (store, response, )=> {
                },
              }),

      }
  })
```
