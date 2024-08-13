import PropTypes from "prop-types";
import styles from "./header.module.css";

const Header = (props) => {
  return (
    <>
      <h1 className={styles.head}>{props.heading}</h1>
    </>
  );
};

Header.propTypes = {
  heading: PropTypes.string.isRequired,
};

export default Header;
