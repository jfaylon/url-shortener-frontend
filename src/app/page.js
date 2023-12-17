import GenerateUrl from "@/components/GenerateUrl";
import VerifyKey from "@/components/VerifyKey";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-y-2.5"> 
      <div className="text-4xl">URL SHORTENER</div>
      <div className="flex flex-col gap-y-2.5 divide-y-2 divide-blue-300">
        <GenerateUrl />
        <VerifyKey />
      </div>
    </div>
  );
};

export default Home;
