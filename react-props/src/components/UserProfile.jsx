/* eslint-disable react/prop-types */
import { Information } from "./Information";

export default function UserProfile(props) {
  return (
    <div id="user-profile">
      <Information
        username="SoeThi"
        age={props.age}
        isMarried={props.isMarried}
      />
    </div>
  );
}
