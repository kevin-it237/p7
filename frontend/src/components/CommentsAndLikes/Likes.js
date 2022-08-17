import React, { useState, useEffect } from "react";
import { AiFillHeart } from "react-icons/ai";
import axios from 'axios';

const Likes = ({ id }) => {
    const [like, setLike] = useState();

    useEffect(() => {
      checkIsLike();
    }, []);

    const checkIsLike = async () => {
      try {
        const res = await axios.get(
          `http://localhost:3000/api/posts/${id}/likes`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
  
        if(res.data.data.length) {
          setLike(res.data.data[0])
        }
      } catch (error) {
      }
    }

    // add like
    const handleLike = async () => {
      try {
        const res = await axios.post(
          `http://localhost:3000/api/posts/${id}/likes`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        setLike(res.data.data)
      } catch (error) {
        console.log(error)
      }
    }
    // add like
    const deleteLike = async () => {
      if(!like) return;
      try {
        await axios.delete(
          `http://localhost:3000/api/posts/${id}/likes/${like.id}`,
          {},
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        setLike(null)
      } catch (error) {
        console.log(error)
      }
    }

  return (
    <div className="like">
      <p onClick={() => like ? deleteLike(): handleLike()} className={`icon-heart ${like ? "liked": ""}`}>
        <AiFillHeart /> J'aime
      </p>
      {/* <p className="likes_length">{0}</p> */}
    </div>
  );
};

export default Likes;
