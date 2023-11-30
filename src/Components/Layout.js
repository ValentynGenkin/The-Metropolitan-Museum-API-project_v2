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
        component={<img src="" alt="" />}
      />

      <Footer />
    </>
  );
}

export default Layout;
