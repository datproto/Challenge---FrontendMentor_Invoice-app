import { useResource, useNavigation } from '@pankod/refine-core';
import routerProvider from '@pankod/refine-react-router';

const { Link } = routerProvider;

export const Layout: React.FC = ({ children }) => {
  const { resources } = useResource();
  const { list } = useNavigation();

  return (
    <div className="flex flex-col min-h-screen">
      <div className="py-2 mb-2 border-b">
        <div className="container mx-auto">
          <div className="flex items-center gap-2">
            <Link to="/">
              <img
                className="w-32"
                src="https://refine.dev/img/refine_logo.png"
                alt="Logo"
              />
            </Link>
            <ul>
              {resources.map(({ name, icon }) => (
                <li key={name} className="float-left">
                  <a
                    className="flex items-center gap-1 px-2 py-1 capitalize transition duration-300 ease-in-out rounded-sm cursor-pointer decoration-indigo-500 decoration-2 underline-offset-1 hover:underline"
                    onClick={() => list(name)}
                    href="/"
                  >
                    {icon}
                    <span>{name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-white">{children}</div>
    </div>
  );
};
