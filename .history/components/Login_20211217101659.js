import Image from "next/image";
import { useMoralis } from "react-morlis";

function Login() {
  const { authenticate } = useMoralis();
    return (
        <div className="bg-black relative">
          <h1>I am the Login Screen</h1>
          <div className="flex flex-col absolute space-y-4 z-50 h-4/6 items-center justify-center w-full">
            <Image
              className="object-cover rounded-full"
              src="https://links.papareact.com/3pi"
              height={200}
              width={200}
            />

            <button

              className="bg-yellow-500 rounded-lg p-5 font-bold animate-pulse">Login to the METAVERSE
            </button>
          </div>

          <div className="w-full h-screen">
            <Image
              src="https://links.papareact.com/55n"
              layout="fill"
              objectFit="cover" />
              {/* Login Form */}

          </div>
        </div>
    )
}

export default Login
