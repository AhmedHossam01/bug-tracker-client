import { faker } from "@faker-js/faker";

const Avatar = () => {
  return (
    <div className="avatar">
      <div className="h-10 w-10 mask mask-squircle">
        <img
          src={faker.image.avatar()}
          alt="profile"
          className="bg-indigo-700"
        />
      </div>
    </div>
  );
};

export default Avatar;
