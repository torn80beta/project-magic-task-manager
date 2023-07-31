import './header.scss';
const Header = ({ children }) => {
  return (
    <div className="header">
      This is header
      {children}
    </div>
  );
};

export default Header;
