// UserProfile.js


const UserProfile = ({ username, age, location }) => {
  return (
    <div>
      <h1>User Profile</h1>
      <p><strong>Username:</strong> {username}</p>
      <p><strong>Age:</strong> {age}</p>
      <p><strong>Location:</strong> {location}</p>
    </div>
  );
};
// export default UserProfile;
// App.js

const Appp = () => {
  const userinfo = {
    username: "johndoe",
    age: 25,
    location: "New York",
  };

  return (
    <div>
      <UserProfile {...userinfo} />
    </div>
  );
};

export default Appp;