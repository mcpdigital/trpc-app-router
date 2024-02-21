import Link from "next/link";

type NavLink = {
  title: string;
  url: string;
  role: string;
};
type NestedLink = {
  title: string;
  navlinks: NavLink[];
  role: string;
};
type NestedLinkGeneratorProps = {
  groups: NestedLink[];
  userRole: string;
};
// NestedLinkGenerator component
const NestedLinkGenerator = ({
  groups,
  userRole,
}: NestedLinkGeneratorProps) => {
  return groups.map((group) => {
    if (
      group.navlinks.some(
        (link) =>
          link.role.includes(userRole) ||
          (link.role.includes("org:member") && userRole.includes("org:ai")) ||
          userRole?.includes("org:admin") ||
          !link.role.length
      )
    ) {
      return (
        <div key={group.title} className="relative group">
          <p className="mr-5 cursor-pointer hover:text-gray-100 dark:hover:text-gray-100">
            {group.title}
          </p>
          <ul className="absolute hidden w-[160px] mt--1 text-sm space-y-2 bg-gray-800 rounded-md shadow-lg dark:bg-gray-800 dark:text-gray-300 text-gray-300 group-hover:block ">
            {group.navlinks.map((link) => {
              if (
                link.role.includes(userRole) ||
                (link.role.includes("org:member") &&
                  userRole.includes("org:ai")) ||
                userRole?.includes("org:admin") ||
                !link.role.length
              ) {
                return (
                  <li
                    key={link.title}
                    className=" z-50 px-4 py-2  dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-200 dark:text-gray-200 rounded-md "
                  >
                    <Link
                      className="hover:text-blue-400 text-gray-200 dark:hover:text-gray-100 w-full h-full transition duration-150 ease-in-out rounded-md dark:text-gray-300"
                      href={link.url}
                    >
                      {link.title}
                    </Link>
                  </li>
                );
              }
            })}
          </ul>
        </div>
      );
    }
  });
};
export default NestedLinkGenerator;
// In your MobileNavbar component
