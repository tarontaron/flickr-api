const initState = {
  message: []
}

export default function template(state = initState, action) {
  switch (action.type) {
    case 'SET_MESSAGE':
      return { ...state, message: [...action.value] }
    default:
      return state
  }
}
