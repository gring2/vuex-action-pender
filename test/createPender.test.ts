import { createPender } from '../src/pender';
import Vuex, { Store, StoreOptions } from 'vuex';
import Vue from 'vue';

describe('createPender Test', () => {
  let storeOpion: StoreOptions<any> = {}
  let store: Store<any>;
  beforeEach(()=> {
    Vue.use(Vuex) 
    store = new Store<any>(storeOpion)
  
  
  })
  it('navie test', () => {
    let a = () => {
      return new Promise(function(resolve, reject){
        setTimeout(function() {
          resolve('foo');
        }, 1);
      })
    }

    let pender = createPender({
      'action': a
    })

    expect(typeof pender).toBe("function")
  })

  it('pending function is called', () => {
    let a = () => {
      return new Promise(function(resolve, reject){
        setTimeout(function() {
          resolve('foo');
        }, 1);
      })
    }

    let inner_mock = jest.fn();
    let p = jest.fn(() => {
      inner_mock();
     });
    let pender = createPender({
      'action': a,
      'pending': p
    })
    let payload = null
    let t = pender(store, payload)

    expect(inner_mock).toBeCalled()

  }),
  it('success function is called when action does not return promise', () => {
    let a = () => {
      
    }

    let inner_mock = jest.fn();
    let p = jest.fn(() => {
      inner_mock();
     });
    let pender = createPender({
      'action': a,
      'success': p
    })
    let payload = null
    let t = pender(store, payload)

    expect(inner_mock).not.toBeCalled()

  })
})