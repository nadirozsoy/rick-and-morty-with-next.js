import Navigation from "./navigation";

function layout({ children }) {
  return (
    <div>
      <Navigation></Navigation>
      <main>{children}</main>
      <footer>design by Nadir</footer>
    </div>
  );
}

export default layout;
