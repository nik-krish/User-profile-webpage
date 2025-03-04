export const fetchUsers =
  (page = 1) =>
  async (dispatch) => {
    try {
      dispatch({ type: "FETCH_USERS_START" });
      const response = await fetch(
        `https://66323d2dc51e14d69563d028.mockapi.io/api/v1/profile?page=${page}&limit=15`
      );
      const data = await response.json();

      if (data.length === 0) {
        dispatch({ type: "FETCH_USERS_COMPLETE" });
        return;
      }

      dispatch({
        type: "ADD_USERS",
        payload: data,
      });
    } catch (error) {
      console.error("Error fetching users:", error);
      dispatch({ type: "FETCH_USERS_FAILED" });
    }
  };
