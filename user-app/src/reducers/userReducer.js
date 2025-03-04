const initialState = {
  users: [],
  status: "idle",
  hasMore: true,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_USERS_START":
      return { ...state, status: "loading" };
    case "ADD_USERS":
      const newUsers = action.payload;
      const hasMore = newUsers.length > 0;
      return {
        ...state,
        users: [...state.users, ...newUsers],
        status: "idle",
        hasMore,
      };
    case "FETCH_USERS_COMPLETE":
      return { ...state, hasMore: false };
    case "FETCH_USERS_FAILED":
      return { ...state, status: "failed" };
    default:
      return state;
  }
};

export default usersReducer;
