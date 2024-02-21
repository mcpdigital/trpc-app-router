import Link from "next/link";
type NavLink = {
  title: string;
  url: string;
  role: string;
};

type LinkGeneratorProps = {
  navlinks: NavLink[];
  userRole: string;
};
// LinkGenerator component
const LinkGenerator = ({ navlinks, userRole }: LinkGeneratorProps) => {
  console.log("NavLinks", navlinks);
  return navlinks.map((navlink: NavLink) => {
    if (
      navlink.role.includes(userRole) ||
      userRole?.includes("org:admin") ||
      !navlink.role.length
    ) {
      console.log("Navlink after", navlink);
      return (
        <>
          <Link key={navlink.title} href={navlink.url}>
            <div className="z-50 mr-5 cursor-pointer flex  dark:hover:text-gray-100 hover:text-gray-100">
              {navlink.title}
            </div>
          </Link>
        </>
      );
    }
  });
};
export default LinkGenerator;
