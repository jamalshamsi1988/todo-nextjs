import { useEffect, useState } from "react";
import ProfileForm from "../module/ProfileForm";
import ProfileData from "../module/ProfileData";
import { useRouter } from "next/router";
import EditProfilePage from "./EditProfilePage";
const ProfilePage = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState(null);
  const [edit, setEdit] = useState(false);
  const router = useRouter();
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
    setEdit(data);
    router.reload();
  };
  const editHandler = async () => {
    setEdit(setLastName(""), setName(""));
    const res = await fetch("/api/profileId", {
      method: "PATCH",
      body: JSON.stringify({ name, lastName }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    router.reload();
    console.log(data);
  };


  return (
    <div className="profile-form">
      <h2>Profile</h2>
      {data ?  <EditProfilePage  name={name}
          lastName={lastName}
          password={password}
          setName={setName}
          setLastName={setLastName}
          setPassword={setPassword} 
          editHandler={editHandler}
          submitHandler={submitHandler}
          />
      ?(
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
          editHandler={editHandler}
        />
      ) : data}
    </div>
  );
};

export default ProfilePage;
