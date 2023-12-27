import Bcard from "./global/BCard";

const Blog = () => {
  return (
    <div className="">
      <div className=" text-center p-6">
        <h1 className="text-blue-400 font-bold text-4xl">
          Custom Patches Categories
        </h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type.{" "}
        </p>
      </div>
      <div className="grid grid-cols-4 px-32 space-y-5 my-7">
        <Bcard
          title="Patches"
          imsrc="/src/assets/Images/blog1.png"
          para="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
          sname="Create a Custom patch  ➝"
        />
        <Bcard
          title="Leather Patches"
          imsrc="/src/assets/Images/blog2.png"
          para="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
          sname="Create a Custom patch  ➝"
        />
        <Bcard
          title="Sublimated Patches"
          imsrc="/src/assets/Images/blog3.png"
          para="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
          sname="Create a Custom patch  ➝"
        />
        <Bcard
          title="PVC Patches"
          imsrc="/src/assets/Images/blog4.png"
          para="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
          sname="Create a Custom patch  ➝"
        />
        <Bcard
          title="Leather Patches"
          imsrc="/src/assets/Images/blog2.png"
          para="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
          sname="Create a Custom patch  ➝"
        />
        <Bcard
          title="PVC Patches"
          imsrc="/src/assets/Images/blog4.png"
          para="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
          sname="Create a Custom patch  ➝"
        />
        <Bcard
          title="Patches"
          imsrc="/src/assets/Images/blog1.png"
          para="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
          sname="Create a Custom patch  ➝"
        />
        <Bcard
          title="Sublimated Patches"
          imsrc="/src/assets/Images/blog3.png"
          para="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
          sname="Create a Custom patch  ➝"
        />
      </div>
      <div>
        <div className="bg-blue-50">
          <h1 className="text-blue-400 font-bold text-4xl text-center">
          Apparel
          </h1>
          <div className="grid grid-cols-4 px-32 my-7 py-6">
            <Bcard
              title="Embride keychains"
              imsrc="/src/assets/Images/a1.png"
            />
            <Bcard
              title="Sublimated  Patches"
              imsrc="/src/assets/Images/a2.png"
            />
            <Bcard
              title="PVC  Keychains"
              imsrc="/src/assets/Images/a3.png"
            />
            <Bcard title="Stickers" imsrc="/src/assets/Images/a4.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
