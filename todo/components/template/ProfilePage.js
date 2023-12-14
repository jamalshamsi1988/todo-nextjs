import { useEffect, useState } from "react";
import { MdModeEdit } from "react-icons/md";

import ProfileForm from "../module/ProfileForm";
import ProfileData from "../module/ProfileData";
const ProfilePage = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    const res = await fetch("/api/profile");
    const data = await res.json();
    if (data.status === "success" && data.data.name && data.data.lastName) {
      setData(data.data);
    }
  };
  const submitHandler = async () => {
    const res = await fetch("/api/profile", {
      method: "POST",
      body: JSON.stringify({ name, lastName, password }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    console.log(data);
  };

  const editHandler = async () => {
    const res = await fetch(`/api/profileId/${user._id}`, {
      method: "PATCH",
      body: JSON.stringify({ name, lastName }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    console.log(data);
  };
  return (
    <div className="profile-form">
      <div className="profile-form__headr">
       
        <h2>Profile</h2>
        <button onClick={editHandler}>
          {" "}
          Edit <MdModeEdit />
        </button>
      </div>
      {data ? (
        <ProfileData data={data} />
      ) : (
        <ProfileForm
          name={name}
          lastName={lastName}
          password={password}
          setName={setName}
          setLastName={setLastName}
          setPassword={setPassword}
          submitHandler={submitHandler}
        />
      )}
    </div>
  );
};

export default ProfilePage;
