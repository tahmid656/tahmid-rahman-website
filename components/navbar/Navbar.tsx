import { NextPage } from 'next';
import Image from 'next/image';
import Logo from '../../public/assets/tr-nav.svg';
import MobileLogo from '../../public/assets/tr-nav-mobile.svg';
import Link from 'next/link';
import React from 'react';
import {
    HiBriefcase,
    HiDesktopComputer,
    HiHome,
    HiOutlineBriefcase,
    HiOutlineDesktopComputer,
    HiOutlineHome
} from 'react-icons/hi';
import { useRouter } from 'next/router';
import { RiUser6Fill, RiUser6Line } from 'react-icons/ri';

const navigations = [
    { name: 'Home', path: '/', icon: HiOutlineHome, activeIcon: HiHome },
    { name: 'Portfolio', path: '/portfolio', icon: HiOutlineBriefcase, activeIcon: HiBriefcase },
    { name: 'About Me', path: '/about-me', icon: RiUser6Line, activeIcon: RiUser6Fill },
    { name: 'Tutorials', path: '/tutorials', icon: HiOutlineDesktopComputer, activeIcon: HiDesktopComputer },
];


const Navbar: NextPage = () => {
    const router = useRouter();
    React.useEffect(() => {
        if (window.scrollY > 0) {
            document.querySelector('.navbar').style.backgroundColor = `rgba(49, 13, 52, .9)`;
        }
       window.addEventListener('scroll', function (e) {
           if (window.scrollY > 0) {
               document.querySelector('.navbar').style.backgroundColor = `rgba(49, 13, 52, .9)`;
           }
           else {
               document.querySelector('.navbar').style.backgroundColor = `rgba(49, 13, 52, 0)`;
           }
       });
    });
    return (
        <>
            <nav className="navbar bg-tahurple/0 py-1 max-w-full fixed top-0 left-0 right-0 text-white border-b border-b-purple-600/30 z-50 transition-all ease-in duration-200 backdrop-blur-lg">
                <div className="sm:mx-12">
                    <ul className="global-container flex flex-row justify-evenly sm:justify-center md:justify-between lg:justify-between items-center">
                        <li className="align-middle hidden sm:flex pr-6">
                            <Image src={ Logo } alt="Logo" width="90%" height="25" objectFit="contain"></Image>
                        </li>
                        <li className="flex align-middle flex sm:hidden">
                            <Image src={ MobileLogo } alt="Logo" width="50" height="25" objectFit="contain"></Image>
                        </li>
                        {
                            navigations.map((navigation, index) => {
                                const NavIcon = navigation.path === router.pathname ? navigation.activeIcon : navigation.icon;
                                return (
                                    <Link key={navigation.name} href={navigation.path}>
                                        <li key={index} className="tooltip hover:border-b-[2px] hover:border-r-[2px] hover:bg-purple-600/20 border-purple-600/30 flex flex-col items-center py-3 px-6 sm:px-11 md:px-12 lg:px-16 rounded-lg cursor-pointer transition-all ease-in duration-75">
                                            <NavIcon className="w-6 text-3xl"/>
                                            <p className="block sm:hidden text-[8px] sm:text-[12px] justify-self-center">{navigation.name}</p>
                                            <span className="hidden sm:block tooltip-text invisible group-hover:visible absolute top-[3.2rem] z-[60] text-center text-white bg-tahurple text-xs p-2 rounded-lg transition-all ease-in duration-75">{navigation.name}</span>
                                        </li>
                                    </Link>
                                );
                            })
                        }
                    </ul>
                </div>

            </nav>
        </>
    )
}

export default Navbar
