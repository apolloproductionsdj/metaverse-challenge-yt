import Image from "next/image";
import { useMoralis } from "react-moralis";
import Avatar from "./Avatar";
import ChangeUsername from "./ChangeUsername";

function Header() {
  const { user } = useMoralis();

  return (
    <div className="text-pink-500">
      <div className="grid grid-col-5 lg:grid-col-6 items-end">
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
        <div className="text-left lg:text-center">
          <div
            className="h-48 w-48 relative lg:mx-auto 
        border-pink-500 border-8 rounded-full"
          >
            <Avatar logoutOnPress />
          </div>
          <h1 className="text-3xl">Welcome to the PAPAFAM Metaverse</h1>
          <h2 className="text-5xl font-bold truncate">{user.getUsername()}</h2>

          <ChangeUsername />
        </div>
      </div>
    </div>
  );
}

export default Header;
