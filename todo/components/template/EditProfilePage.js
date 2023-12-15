import { MdModeEdit } from "react-icons/md";
import ProfileForm from "../module/ProfileForm";
import { useRouter } from "next/router";

const EditProfilePage = ({
  name,
  lastName,
  password,
  setName,
  setLastName,
  setPassword,
  submitHandler,
}) => {
  const router = useRouter();

  return (
    <div>
     
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
    </div>
  );
};

export default EditProfilePage;
