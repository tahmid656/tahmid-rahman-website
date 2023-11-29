import React from 'react';
import { NextPage } from 'next';
import Image from 'next/image';
import LogoFooter from '../../public/assets/tr-footer.svg';
import { FaGithub, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

const Footer: NextPage = () => {
    const socialLinks = [
        { name: 'LinkedIn', link: 'https://www.linkedin.com/in/tahmid-rahman-b38784131/', icon: FaLinkedinIn },
        { name: 'GitHub', link: 'https://github.com/tahmid656/', icon: FaGithub },
        { name: 'Instagram', link: 'https://www.instagram.com/tahmidrahmandesigns/', icon: FaInstagram },
        { name: 'YouTube', link: 'https://www.youtube.com/@diytutsofficial', icon: FaYoutube },
    ];

    const todaysDate = new Date().getFullYear();

    return (
        <section id="footer" className="bg-tahurple w-full border-t border-purple-600/30">
            <div className="flex flex-col sm:flex-row global-container text-white items-center px-5 sm:px-8 md:px-12 lg:px-0 py-4 justify-between">
                <div className="text-4xl font-black font-['abril'] sm:flex hidden">
                    <Image src={LogoFooter} alt="Logo" width="90%" height="25" objectFit="contain"></Image>
                </div>
                <div className="flex sm:flex-row flex-col text-sm text-tahpurple-light place-items-center gap-2 sm:gap-8">
                    <p className="order-2 sm:order-1">{`Copyright © ${todaysDate} Tahmid Rahman`}</p>
                    <div className="order-1 sm:order-2 flex flex-row text-xl gap-5">
                        {
                            socialLinks.map((icon, index) => {
                                const SocialIcon = icon.icon;
                                return (
                                    <a key={index} href={icon.link} target="_blank" rel="noreferrer">
                                        <SocialIcon className="cursor-pointer text-tahpurple-light hover:hover:text-tahpurple-light/70 transition-colors ease-in duration-75"></SocialIcon>
                                    </a>
                                );
                            })
                        }
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Footer
