const User = (props) => {
    const {name, location} = props
  return (
    <div className="user-card">
      <h1>This is the functional Component </h1>
      <h3>User Name - {name}</h3>
      <h3>User Location - {location}</h3>
    </div>
  );
};

export default User;
