import Header from '../components/Header';

const Layout = ({ children }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <div style={{ flex: 1, padding: '20px', marginTop: '60px' }}>
        {children}
      </div>
    </div>
  );
};

export default Layout;
