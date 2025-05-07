import { styled } from "styled-components";
import User from "@/components/partials/user";
import { useEffect, useRef, useState } from "react";
import { Hook } from "@/app/hook/hook.ts";

const Users = styled.section`
  min-height: 100vh;
  padding: 86px;
`;

export default () => {
  const fetchUsers = async () => {
    const { data } = await Hook.push("/new-users/")
      .notify({
        good: {
          type: "good",
          notify: {
            title: "User successfully rescued!",
            message: "the request made to our API was completed successfully.",
          },
        },
      })
      .get();

    setUsers(data);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsers();
  });

  if (!loading) {
    return (
      <Users>
        {users.map((user) => {
          return <User username={user.username} photo={user.photo} />;
        })}
      </Users>
    );
  } else {
    return (
      <Users>
        <p>Hello World + Users </p>
      </Users>
    );
  }
};
