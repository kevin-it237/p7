import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";
import { AiFillSetting } from "react-icons/ai";


const ShowProfile = () => {
  let [image, setImage] = useState("");
  let [username, setUsername] = useState("");
  let [bio, setBio] = useState("")

  const navigate = useNavigate();

  // deconnexion
  const handleLogout = () => {
    localStorage.clear();
    navigate("/connexion");
    alert('Vous êtes déconnecté')
  };

// ******* Backend *******
  // get profile
  useEffect(() => {
    const showMyProfile = async () => {
      const res = await axios.get("http://localhost:3000/api/users/profile", {
          headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`
          },
      }); 
      setImage(res.data.data.profile.image);
      setUsername(res.data.data.username);
      setBio(res.data.data.profile.bio);
      localStorage.setItem('isAdmin', res.data.data.isAdmin);
    }
    showMyProfile();
  }, []);

 

  return (
    <div>
      <div className="showProfilInfo">
        <div className="hello">
          <h1>Votre profil </h1>
          <NavLink to="/edit-profile" className="edit-profile">
            <AiFillSetting />
          </NavLink>
        </div>
        <div className="picture">
            <img src={image} id="avatar"alt="" />
        </div>
        <div className="pseudo">
          <p>Pseudo <br/></p>{username}
        </div>
        <div className="bio">
          <p>Bio<br/> </p>{bio}
        </div>
        <p className="logout" onClick={handleLogout}>
           Se déconnecter
          </p>
      </div>
    </div>
  );
};

export default ShowProfile;
