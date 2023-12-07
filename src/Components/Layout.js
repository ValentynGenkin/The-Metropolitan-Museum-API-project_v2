import { Outlet } from 'react-router-dom';
import NavigationBar from './NavigationBar';
import ScrollToTop from 'react-scroll-to-top';
import Footer from './Footer';

function Layout() {
  return (
    <>
      <NavigationBar />

      <Outlet />

      <ScrollToTop
        className="scroll-btn"
        smooth
        component={
          <p style={{ margin: '0', padding: '0', fontWeight: 'bold' }}>Up</p>
        }
      />

      <Footer />
    </>
  );
}

export default Layout;
