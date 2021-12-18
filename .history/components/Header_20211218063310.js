import { useMoralis } from "react-moralis";

function Header() {
  const { user } = useMoralis();

  return (
    <div>
      <h1>I am header</h1>
    </div>
  );
}

export default Header;
