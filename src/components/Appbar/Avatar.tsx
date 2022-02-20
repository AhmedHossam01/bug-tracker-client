import { useAppSelector } from "../../store/hooks";

const Avatar = () => {
  const avatar = useAppSelector((state) => state?.auth?.user?.avatar);

  return (
    <div className="avatar">
      <div className="h-10 w-10 mask mask-squircle">
        <img src={avatar} alt="profile" className="bg-indigo-700" />
      </div>
    </div>
  );
};

export default Avatar;
