import TopForGuestContainer from "@/components/organisms/Top/ForGuest/Container";
import TopForUserContainer from "@/components/organisms/Top/ForUser/Container";
import { FC } from "react";

const Home: FC = () => {
  return (
    <>
      <TopForGuestContainer />
      <TopForUserContainer />
    </>
  );
};
export default Home;
