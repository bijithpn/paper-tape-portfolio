// Pages and Components
import Landing from '../pages/';
import Navbar from '../components/Navbar';
import Footer from '../pages/Footer';
import Portfolio from '../pages/blog/Blog';


const renderWithNav = (
  component: JSX.Element,
  isLanding: boolean
): JSX.Element => {
  return (
    <>
      <Navbar isLanding={isLanding} />
      {component}
      <Footer />
    </>
  );
};

type RoutesType = {
  path: string;
  element: JSX.Element;
  errorElement?: JSX.Element;
};

// Routes we will visit
const routes: RoutesType[] = [
  {
    path: '/',
    element: renderWithNav(<Landing />, true),
  },
  {
    path: '/portfolio',
    element: renderWithNav(<Portfolio />, false),
  },
];

export default routes;

// ---------------
