import { FC } from "react";

interface HeaderProps {
  name: string;
}

const Header: FC<HeaderProps> = ({ name }) => {
  return <div className="text-2xl font-semibold text-gray-700">{name}</div>;
};

export default Header;
