export default (
  state = {
    mobileNumber: '',
    customerHashId: '',
    authenticated: false,
  },
  action,
) => {
  switch (action.type) {
    case 'UPDATE_CREDS':
      return {
        ...state,
        mobileNumber: action.mobileNumber,
        customerHashId: action.customerHashId,
      };
    case 'AUTEHNTICATED':
      return {
        ...state,
        authenticated: true,
      };
    default:
      return state;
  }
};
