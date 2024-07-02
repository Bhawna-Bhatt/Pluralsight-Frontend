export default function DisplayState(props) {
  return (
    <p>
      The values entered are : {props.name}
      {props.name}
      {props.lastname}
      {props.email}
      {props.dob}
      {props.gender}
      {props.country}
      {props.likesP}
    </p>
  );
}
