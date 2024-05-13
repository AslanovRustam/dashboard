import { lusitana } from './fonts';
import logo from '../../public/logo.png';
import Image from 'next/image';

export default function AcmeLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
      <Image src={logo} alt="logo" width={50} height={50} />
      <p className="ml-4 text-[34px]">Dashboard</p>
    </div>
  );
}
