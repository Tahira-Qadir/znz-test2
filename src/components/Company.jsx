import ButtonComp from "./global/ButtonComp";
const Company = () => {
  return (
    <div className="w-full bg-zinc-800 my-12 h-[32rem]">
      <section className="overflow-hidden">
        <div className="mx-auto max-w-5xl py-6">
          <div className="mx-auto flex flex-wrap items-center">
            <img
              className="h-44 w-full rounded object-cover lg:h-96 lg:w-1/2"
              src="/src/assets/Images/Company.png"
            />
            <div className="w-full lg:mt-0 lg:w-1/2 lg:pl-10">
              <h1 className="my-4 text-3xl font-semibold text-blue-600">
                About Our Company
              </h1>
              <p className="leading-relaxed w-full text-white text-justify">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.It was popularised in the 1960s with the release of
                Letraset sheets containing Lorem Ipsum passages, and more
                recently with desktop publishing software like Aldus PageMaker
                including versions of Lorem Ipsum
              </p>
              <div className="flex items-center justify-between my-4">
                <ButtonComp label="View More" style="button-primary" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Company;
