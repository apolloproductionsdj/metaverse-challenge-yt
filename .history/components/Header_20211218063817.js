import Image from "next/image";
import { useMoralis } from "react-moralis";

function Header() {
  const { user } = useMoralis();

  return (
    <div>
      <div className="relative h-24 w-24 mx-auto">
        <Image
          layout="fill"
          objectFit="cover"
          className="rounded-full"
          src="https://links.papareact.com/3pi"
        />
      </div>
    </div>
  );
}

export default Header;
