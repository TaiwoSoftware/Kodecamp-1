/* eslint-disable react/prop-types */
export default function CardComponent({
  userName,
  userAge,
  userLocation,
  userHobbies,
}) {
  return (
    <div className="card">
      <h1>{userName}</h1>
      <p>{userAge}</p>
      <p>{userLocation}</p>
      <p>{userHobbies}</p>
    </div>
  );
}
