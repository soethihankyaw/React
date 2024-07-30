/* eslint-disable react/prop-types */
export function Information(props) {
  return (
    <div id="information">
      <div id="username">
        <b>Username : </b>
        <span>{props.username}</span>
      </div>
      <div id="age">
        <b>Age : </b>
        <span>{props.age}</span>
      </div>
      <div id="married">
        <b>Married : </b>
        <span>{String(props.isMarried)}</span>
      </div>
    </div>
  );
}
