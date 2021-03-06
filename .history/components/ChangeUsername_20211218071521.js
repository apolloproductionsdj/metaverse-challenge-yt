import { useMoralis } from "react-moralis";

function ChangeUsername() {
  const { setUserData, isUserUpdating, userError, user } = useMoralis();
  const setUserName = () => {
    const username = prompt(
      `Enter your new username (current: ${user.getUsername()})`
    );

    if (!username) return;
  };

  return (
    <div className="text-sm absolute top-5 right-5">
      <button
        disabled={isUserUpdating}
        onClick={setUserName}
        className="hover:text-pink-700"
      >
        Change your Username
      </button>
    </div>
  );
}

export default ChangeUsername;
