import { FunctionComponent } from 'react';
import { Category } from '../types';

const NavItem: FunctionComponent<{
  value: Category | 'all';
  active: string;
  handleFilterCategory: Function;
}> = ({ value, active, handleFilterCategory }) => {
  var className = 'capitalize cursor-pointer hover:text-green';
  if (active === value) className += ' text-green';

  return (
    <li className={className} onClick={() => handleFilterCategory(value)}>
      {value}
    </li>
  );
};

const ProjectsNavbar: FunctionComponent<{
  handleFilterCategory: Function;
  active: string;
}> = (props) => {
  return (
    <nav className="flex px-3 space-x-3 overflow-x-auto list-none">
      <NavItem value="all" {...props} />
      <NavItem value="react" {...props} />
      <NavItem value="nextjs" {...props} />
      <NavItem value="express" {...props} />
      <NavItem value="mobile" {...props} />
    </nav>
  );
};

export default ProjectsNavbar;
