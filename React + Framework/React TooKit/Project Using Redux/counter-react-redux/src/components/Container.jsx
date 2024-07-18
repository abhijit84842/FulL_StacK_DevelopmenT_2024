const Container = ({ children }) => {
  return (
    <div className="card" style={{ width: "40rem" }}>
      <div className="card-body">{children}</div>
    </div>
  );
};

export default Container;
