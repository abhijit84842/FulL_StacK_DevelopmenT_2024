const Layout = ({ children }) => {
  return (
    <div>
      <h1>Common Layout Header</h1>
      {children}
      <h1>Common Layout Footer</h1>
    </div>
  );
};

export default Layout;
