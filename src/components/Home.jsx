import ButtonComp from "./global/ButtonComp";

const Home = () => {
  return (
    <>
      <div className="px-10 p-10 items-center">
        <div className="flex">
          <div className="space-y-6 ">
            <div className="block space-y-9">
              <h1 className="text-4xl font-bold font-Poppins">
                Create Custom Embroided Patchces
              </h1>
              <p className="">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book. It
              </p>
            </div>
            <div className="space-x-8">
            <ButtonComp label="Get Started" style="button-primary"/>
            <ButtonComp label="Live Chat" />
            </div>
          </div>
          <img
            src="/src/assets/Images/pic.png"
            alt=""
            className="items-center h-[320px] pr-10"
          />
        </div>
      </div>
    </>
  );
};
export default Home;
