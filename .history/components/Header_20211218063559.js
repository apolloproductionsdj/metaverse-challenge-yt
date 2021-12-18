import Image from "next/image";
import { useMoralis } from "react-moralis";

function Header() {
  const { user } = useMoralis();

  return (
    <div>
      <div>
        <Image
          layout="fill"
          className=""
          src="https://links.papreact.com/3pi"
        />
      </div>
    </div>
  );
}

export default Header;
