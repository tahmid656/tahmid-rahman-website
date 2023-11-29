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
    return (
        <>
            <nav className="fixed top-0 left-0 right-0 text-white z-50 transition-all ease-in duration-200">
                <div className="sm:mx-12 sm:pt-3">
                    <ul className="global-container sm:rounded-2xl bg-tahurple/80 border border-purple-600/30 backdrop-blur-md flex flex-row justify-evenly sm:justify-center md:justify-between lg:justify-between items-center sm:pl-8">
                        <li className="align-middle hidden md:flex pr-6">
                            <Image src={ Logo } alt="Logo" width="90%" height="25" objectFit="contain"></Image>
                        </li>
                        <li className="flex align-middle flex md:hidden">
                            <Image src={ MobileLogo } alt="Logo" width="50" height="25" objectFit="contain"></Image>
                        </li>
                        {
                            navigations.map((navigation, index) => {
                                const NavIcon = navigation.path === router.pathname ? navigation.activeIcon : navigation.icon;
                                return (
                                    <Link key={navigation.name} href={navigation.path}>
                                        <li key={index} className="tooltip border-[1px] border-transparent hover:border-[1px] hover:border-purple-600/30 hover:bg-purple-600/20 flex flex-col items-center py-3 px-6 sm:px-11 md:px-12 lg:px-16 rounded-2xl cursor-pointer transition-all ease-in duration-75">
                                            <NavIcon className="w-6 text-3xl"/>
                                            <span className="hidden sm:block tooltip-text invisible group-hover:visible absolute top-[3.5rem] z-[60] text-center text-white bg-tahurple text-xs p-2 rounded-lg transition-all ease-in duration-75">{navigation.name}</span>
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
