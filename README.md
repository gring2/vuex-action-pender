#vuex-action-pender
wrapper to write async vuex action simply and clean

##How to use
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