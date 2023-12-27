const ShopNow = () => {
  return (
    <div className="mb-28">
      <h1 className="text-sky-300 text-3xl font-bold font-['Poppins'] capitalize text-center">
        Shop with confidence
      </h1>
      <div className="flex px-20 space-x-36 pt-16">
        <div>
          <img
            className="w-[167px] h-[131px]"
            src="/src/assets/Images/sh1.png"
          />
          <h2 className="text-black text-2xl font-semibold font-['Poppins'] capitalize">
            Customer Testimonials
          </h2>
          <p className="">Hear about our customer experience, Veiw all</p>
        </div>
        <div>
          <div>
            <img
              className="w-[167px] h-[131px]"
              src="/src/assets/Images/sh2.png"
            />
            <h2 className="text-black text-2xl font-semibold font-['Poppins'] capitalize">
              Customer Testimonials
            </h2>
            <p>Simple. we accept returns up to
365 days froms the delivery date.</p>
          </div>
        </div>
        <div>
          <div>
            <img
              className="w-[167px] h-[131px]"
              src="/src/assets/Images/sh3.png"
            />
            <h2 className="text-black text-2xl font-semibold font-['Poppins'] capitalize">
              Customer Testimonials
            </h2>
            <p className="">Patch Collection account holders
earn rewards on every purchase</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopNow;
