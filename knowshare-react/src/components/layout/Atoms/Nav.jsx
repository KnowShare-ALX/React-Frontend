const Nav = ({ label, navLink }) => {
  return (
    <a className="hover:text-slate-600 active:text-black" href={navLink}>
      {label}
    </a>
  );
};

export default Nav;
