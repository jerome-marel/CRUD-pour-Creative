import PropTypes from 'prop-types';

function Header(props) {
  const { firstName } = props;

  return (
    <header>
      <h1>Bienvenue, {firstName} !</h1>
    </header>
  );
}

Header.propTypes = {
  firstName: PropTypes.string.isRequired,
};

export default Header;