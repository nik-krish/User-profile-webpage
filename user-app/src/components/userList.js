import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../actions/userActions";
import { useNavigate } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";

const UserList = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  //const status = useSelector((state) => state.users.status);
  const hasMore = useSelector((state) => state.users.hasMore);
  const [page, setPage] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchUsers(page));
  }, [dispatch, page]);

  const handleUserClick = (userId) => {
    navigate(`/user/${userId}`);
  };

  const fetchMoreData = () => {
    if (hasMore) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <div className="sidebar" id="scrollableDiv">
      <h3>Users</h3>
      <InfiniteScroll
        dataLength={users.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<h3>Loading more users...</h3>}
        endMessage={<h3>End of user list</h3>}
        scrollableTarget="scrollableDiv"
      >
        <ul className="user-list">
          {users.map((user) => (
            <li
              key={user.id}
              className="user-item"
              onClick={() => handleUserClick(user.id)}
            >
              {user.firstName}
            </li>
          ))}
        </ul>
      </InfiniteScroll>
    </div>
  );
};

export default UserList;
