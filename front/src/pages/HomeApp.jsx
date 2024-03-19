import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import ActionsComponent from '../components/ActionsComponent';

function HomeApp() {
  const location = useLocation();
  const firstName = location.state?.firstName || '';

  return (
    <div>
      <Header firstName={firstName} />
      <ActionsComponent />
    </div>
  );
}

HomeApp.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      firstName: PropTypes.string
    })
  })
};

export default HomeApp;
