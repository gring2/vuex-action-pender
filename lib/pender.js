const createPender = ({action, pending, success, fail}) => {
    const successF = success || defaultF
    const failF = fail || defaultF
    const pendingF = pending || defaultF

    try{
      return (store, payload) => {
        let promist = action(store, payload)
        pendingF(store, payload)
        if (promist){
          promist.then(successF.bind(null, store)).catch(failF)
        }
      }
  
    }catch(e){
      console.error(e)
    }
  
}

const defaultF = () => {
  return null
}


export default createPender
