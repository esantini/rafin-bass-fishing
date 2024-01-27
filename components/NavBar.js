import Image from 'next/image';
import Menu from './Menu';

export default function NavBar() {
  return (
    <nav className="nav">
      <Image
        src="/l_rbfgao_wh90.png"
        height={90}
        width={93}
        border="0"
        alt="Rafin Bass Fishing Logo"
      />

      <Menu />
    </nav>
  )
};
