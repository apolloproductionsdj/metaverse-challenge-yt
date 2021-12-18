import Image from "next/image";
import { useMoralis } from "react-moralis";

function Header() {
  const { user } = useMoralis();

  return (
    <div>
      <div>
        <Image
          layout="fill"
          className="rounded-full"
          src="https://links.papareact.com/3pi"
        />
      </div>
    </div>
  );
}

export default Header;
