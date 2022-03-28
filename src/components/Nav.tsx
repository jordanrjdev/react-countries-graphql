import { Link } from 'wouter';
import { NavRoute } from '@/models';

const staticRoutes: NavRoute[] = [
  {
    link: 'https://jordanjaramillo.co',
    name: 'Portfolio'
  },
  {
    link: 'https://github.com/jordanrjdev',
    name: 'Github'
  }
];

const Nav = () => {
  const renderNavItem = (route: NavRoute, idRoute: number) => (
    <Link key={idRoute} href={route.link} target="_blank" role="links">
      {route.name}
    </Link>
  );

  return (
    <nav className="grid grid-cols-3 bg-indigo-600 content-center text-white px-10 py-3 space-y-3 md:space-y-0 ">
      <div className="col-span-3 md:col-span-2">
        <Link href="/" className="block text-center md:text-left text-2xl font-bold">
          CFT
        </Link>
      </div>
      <div className="col-span-3 md:col-span-1 flex justify-center font-bold text-xl md:justify-end items-center space-x-3">
        {staticRoutes.map(renderNavItem)}
      </div>
    </nav>
  );
};

export default Nav;
