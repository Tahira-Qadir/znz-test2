import Card from "./global/Card";

const Products = () => {
  return (
    <div className="">
      <div className="bg-blue-400 text-center text-white p-6">
        <p>
          The fastest way to grow your business with the leader in Technology
        </p>
        <p>Check out our options and features included.</p>
      </div>
      <div className="flex px-36 ">
      <Card title="Top Quality" />
      <Card title="Unlimited Customization" />
      <Card title="Low minimums" />
      <Card title="Quick Turnaround" />
      
      </div>
    </div>
  );
};

export default Products;
