import Card from "../Atoms/Card";

const Category = () => {
  return (
    <div className="flex justify-around items-center p-4">
      <Card
        image="/assets/images/fullstack.jpg"
        label="FullStack Web Development"
      />
      <Card
        image="/assets/images/fullstack.jpg"
        label="FullStack Web Development"
      />
      <Card
        image="/assets/images/fullstack.jpg"
        label="FullStack Web Development"
      />
      <Card
        image="/assets/images/fullstack.jpg"
        label="FullStack Web Development"
      />
    </div>
  );
};

export default Category;
