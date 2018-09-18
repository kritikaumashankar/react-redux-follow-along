
const todos = (state = [], action) => {
  switch(action.type){
    case 'ADD TODO':
        return[action.todo, ...state]
    default:
        return state
  }
}

export default todos