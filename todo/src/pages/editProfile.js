import EditProfilePage from "../../components/template/EditProfilePage";
import Profile from "../../model/Profile";
import connectDB from "../../utils/connectDB";


const Edit = async ({ params: { profileId } }) => {
  await connectDB();
  const profile = await Profile.findOne({ _id: profileId });
  if (!profile) {
    return <h3>مشکلی پیش آمده لطفا دوباره امنحان کنید</h3>;
  }
  return <EditProfilePage data={profile} />;
};

export default Edit;