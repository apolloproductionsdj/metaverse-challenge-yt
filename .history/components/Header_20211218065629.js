import Image from "next/image";
import { useMoralis } from "react-moralis";
import Avatar from "./Avatar";

function Header() {
  const { user } = useMoralis();

  return (
    <div>
      <div
        className="relative h-24 w-24 mx-auto 
        hidden lg:inline-grid"
      >
        <Image
          layout="fill"
          objectFit="cover"
          className="rounded-full"
          src="https://links.papareact.com/3pi"
        />
      </div>
      <div>
        <div className="h-48 w-48 relative lg:mx-auto border-pink-500 border-8">
          <Avatar logoutOnPress />
        </div>
        {/* Welcome Message */}
        {/* username */}

        {/* Change user */}
      </div>
    </div>
  );
}

export default Header;
