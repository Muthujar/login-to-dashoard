import React, { useEffect, useState } from "react";
import axios from "axios";
import { GetApi, postApi } from "./apiservice";
import "../components/practice.css";

export const Practice = () => {
  const [user, setUser] = useState([]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  useEffect(() => {
    getUsers();
  }, []);

  useEffect(() => {
    console.log(user, "ff");
  }, [user]);

  const getUsers = async () => {
    await GetApi("https://jsonplaceholder.typicode.com/posts", (res) => {
      setUser(res);
    });

    // setUser(data);
  };
  const postUsers = () => {
    // e.preventDefault();

    postApi("https://jsonplaceholder.typicode.com/posts", {
      title,
      body,
    });

    // setUser(data);
  };

  return (
    <div>
      <div>
        <label>Title</label>
        <input
          typeof="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="title"
        />{" "}
        <br />
        <label>body</label>
        <input
          typeof="text"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder="body"
        />
        <button onClick={postUsers}>post</button>
      </div>
      <table>
        <thead>
          <tr>
            <td>id</td>

            <td>title</td>
            <td>body</td>
          </tr>
        </thead>
        <tbody>
          {user.map((list) => (
            <tr tr key={list.id}>
              <td>{list.id}</td>

              <td>{list.title}</td>
              <td>{list.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
