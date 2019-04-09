import { Store } from 'vuex'

type penderObjs = {
  action: (store: Store<any>, payload: any)=> Promise<any> | void
  pending?: (store: Store<any>, payload: any)=> void
  success?: (store: Store<any>, payload: any)=> void
  fail?: (store: Store<any>, payload: any)=> void
}

export const createPender = ({action, pending, success, fail}: penderObjs) => {
  const successF = success || defaultF
  const failF = fail || defaultF
  const pendingF = pending || defaultF

    return (store: Store<any>, payload: any) => {
      try{
        let promist = action(store, payload)
        pendingF(store, payload)
        if (promist instanceof Promise){
          promist.then(successF.bind(null, store)).catch(failF.bind(null, store))
        }
  
      }catch(e){
        console.error(e)
      }
    }

}

const defaultF = () => {
  return null
}


