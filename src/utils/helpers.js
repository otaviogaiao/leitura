export function byId(array, id){
    if(array && array.length > 0){
       let index = array.findIndex( valor => valor.id === id )
       if(index !== -1)
          return array[index]
    }
    return null
}