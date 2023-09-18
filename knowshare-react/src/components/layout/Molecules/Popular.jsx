import CardBg from "../Atoms/CardBg";

const Popular = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-4 py-8">
      <CardBg
        label="Tech Talks That Matter"
        content="Explore a library of thought-provoking tech talks. Gain insights from experts who are shaping the future.Explore a library of thought-provoking tech talks. Gain insights from experts who are shaping the future."
        image="assets/images/fullstack2.jpg"
      />
      <CardBg
        label="Tutorials Made Simple"
        content="Step-by-step video tutorials for tech enthusiasts of all levels. From coding to hardware hacks, we've got you covered."
        image="assets/images/fullstack.jpg"
      />
      <CardBg
        label="Valuable Tech Insights"
        content="Dive into our blog for in-depth articles on cutting-edge tech topics. From AI to cybersecurity, we've got your tech cravings covered."
        image="assets/images/cc.jpg"
      />
    </div>
  );
};

export default Popular;
