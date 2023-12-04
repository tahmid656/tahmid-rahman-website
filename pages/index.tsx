import type { NextPage } from 'next'
import Image from 'next/image';
import Gal1 from '../public/assets/gal-1.png';
import Gal2 from '../public/assets/gal-2.png';
import Foreground1 from '../public/assets/foreground-1.svg';
import Foreground2 from '../public/assets/foreground-2.svg';
import ForegroundMobile from '../public/assets/bg-mobile.png';
import React, { useEffect } from 'react';
import { FaGithub, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { SiAdobeaftereffects, SiAdobeillustrator, SiAdobephotoshop, SiAngular, SiIonic } from 'react-icons/si';
import Link from 'next/link';
import { IoIosArrowForward } from 'react-icons/io';
import { Header } from '../components/header/Header';

const heroAnimation = (scrollY: number, text: HTMLElement | null, object: HTMLElement | null, objectTwo: HTMLElement | null) => {
    if (text && object && objectTwo) {
        const leftImageScroll = scrollY * 0.06;
        const rightImageScroll = scrollY * -0.05;
        const zoomText = scrollY * 0.0003 + 1;

        text.style.transform = `scale(${zoomText})`;
        object.style.transform = `translate(0, ${leftImageScroll}rem)`;
        objectTwo.style.transform = `translate(0, ${rightImageScroll}rem)`;
        object.style.transition = '.2s ease-in-out';

        // Accessing img elements inside the divs
        const imgElement = object.querySelector('Image') as HTMLImageElement;
        const imgElementTwo = objectTwo.querySelector('Image') as HTMLImageElement;

        // Example: Manipulating the img elements
        if (imgElement && imgElementTwo) {
            // Manipulate the img elements as needed
            imgElement.style.opacity = `${scrollY * 0.002}`;
            imgElementTwo.style.opacity = `${scrollY * 0.002}`;
        }
    }
};

const debounce = <T extends (...args: any[]) => any>(func: T, wait: number) => {
    let timeout: NodeJS.Timeout;

    return function (this: ThisParameterType<T>, ...args: Parameters<T>) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
};

const Home: NextPage = () => {
    const socialLinks = [
        { name: 'LinkedIn', link: 'https://www.linkedin.com/in/tahmid-rahman-b38784131/', icon: FaLinkedinIn },
        { name: 'GitHub', link: 'https://github.com/tahmid656/', icon: FaGithub },
        { name: 'Instagram', link: 'https://www.instagram.com/tahmidrahmandesigns/', icon: FaInstagram },
        { name: 'YouTube', link: 'https://www.youtube.com/@diytutsofficial', icon: FaYoutube },
    ];

    const projects = [
        { name: 'APSpace Web App', img: 'https://i.imgur.com/Asw0IdO.png', icons: [SiAngular ,SiIonic], type: 'img'},
        { name: 'Curiosity', img: 'https://i.imgur.com/xAAE1bX.mp4' , icons: [SiAdobeillustrator, SiAdobeaftereffects], type: 'vid' },
        { name: 'Florida Tulip Agro', img: 'https://i.imgur.com/SHlpE6d.png', icons: [SiAdobeillustrator, SiAdobephotoshop], type: 'img' },
        { name: 'Doge', img: 'https://i.imgur.com/6t5rWNO.png', icons: [SiAdobeillustrator, SiAdobephotoshop], type: 'img'}
    ];

    const debouncedHeroAnimation = debounce((scrollY: number) => {
        heroAnimation(
            scrollY,
            document.querySelector('.text-zoom'),
            document.querySelector('.art'),
            document.querySelector('.art-2')
        );
    }, 50); // Adjust the debounce time as needed

    useEffect(() => {
        function handleScroll() {
            const scrollTop = window.scrollY;
            debouncedHeroAnimation(scrollTop);
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    const heroBg: React.CSSProperties = {
        backgroundImage: 'url("/assets/hero-lines.png"), url("/assets/tr-bg.png")',
        backgroundSize: 'cover, cover',
        backgroundAttachment: 'scroll, fixed',
        backgroundPosition: 'center, center',
        backgroundRepeat: 'no-repeat, no-repeat',
    };


  return (
      <div className="w-full">
          {/*Landing Page*/}
          <section id="hero" className="h-screen" style={heroBg}>
              <div className="min-w-min-[100px] h-screen flex justify-center items-center flex-col overflow-hidden">
                  {/*Hero Content*/}
                  <div className="text-zoom z-20 transition ease-in duration-100">
                      <p className="font-['swiss'] text-white lg:text-4xl md:text-3xl sm:text-3xl text-2xl uppercase">Your Friendly</p>
                      <div className="font-['swiss'] flex md:flex-row flex-col font-black lg:text-8xl md:text-7xl sm:text-8xl text-7xl text-white pb-2 tracking-wide uppercase">
                          <p className="overflow-hidden">Dev</p>
                          <p className="overflow-hidden">+</p>
                          <p className="overflow-hidden">Igner</p>
                      </div>
                      <div className="flex flex-row text-3xl gap-5">
                          {
                              socialLinks.map((social, index) => {
                                  const SocialIcon = social.icon;
                                  return (
                                    <a key={index} href={social.link} target="_blank" rel="noreferrer">
                                        <SocialIcon className="cursor-pointer text-white hover:text-tahmustard transition-colors ease-in duration-75" />
                                    </a>
                                  );
                              })
                          }
                      </div>
                  </div>
                  <div className="xs:flex hidden">
                      <Image src={ Foreground1 } className="art transition ease-in duration-[50ms]" layout="fill" objectFit="cover" />
                      <Image src={ Foreground2 } className="art-2 transition ease-in duration-100" layout="fill" objectFit="cover" />
                  </div>
                  <div className="xs:hidden flex">
                     <Image src={ ForegroundMobile } layout="fill" objectFit="cover"></Image>
                  </div>
              </div>
          </section>
          {/*Projects*/}
          <section id="projects" className="bg-tahurple w-full border-t border-b border-purple-600/30">
              <Header title="Projects" description="Dive down into the world of my imagination." />
              <div className="grid gap-3 grid-cols-1 md:grid-cols-2 px-3 pb-3">
                  {
                      projects.map((project, index) => {
                          return (
                              <div key={index} className="project-container aspect-video relative border-purple-600 rounded-3xl border-[1px]">
                                  {
                                      project.type === 'img' ?
                                          <Image className="rounded-3xl" src={project.img} alt="Logo" objectFit="cover" layout="fill" />
                                          : <video className="rounded-3xl" src={project.img} autoPlay loop playsInline />
                                  }
                                  <Link href="">
                                      <div className="project-info top-0 w-full h-full absolute invisible flex flex-col
                                      items-center justify-end gap-2 text-white px-3 py-[-12] opacity-0 hover:pb-6
                                      hover:opacity-100 text-3xl rounded-3xl bg-gradient-to-t from-black/90 to-black/10
                                      rounded-tl-lg transition-all ease-[cubic-bezier(0.65,0,0.076,1.5)] duration-[.45s] delay-200">
                                          <p className="font-['swiss'] text-2xl text-white">{project.name}</p>
                                          <p className="text-base">Learn more {'>'}</p>
                                          <div className="flex gap-3 text-white">
                                              {
                                                  project.icons.map((icon, index) => {
                                                      const ProjectIcon = icon;
                                                      return (
                                                        <ProjectIcon key={index} />
                                                      );
                                                  })
                                              }
                                          </div>
                                      </div>
                                  </Link>
                              </div>
                          );

                      })
                  }
              </div>
          </section>
          {/*More*/}
          <section id="more" className="bg-[url('../public/assets/bg-1.svg')] bg-no-repeat bg-center bg-cover
           bg-fixed flex flex-col text-white justify-center items-center py-24 px-4">
              <h1 className="text-4xl font-black font-['swiss'] text-center">like what you see?</h1>
              <p className="text-xl my-2">explore my portfolio</p>
              <Link href="/portfolio">
                  <div className="inline-block relative pt-3 w-[12rem] text-center group cursor-pointer">
                      <div className="rounded-full bg-gradient-to-r from-tahmustard to-tahpantone
                       w-[3rem] py-[.875rem] relative group-hover:w-full transition-all duration-[.45s] ease-[cubic-bezier(0.65,0,0.076,1.5)]">
                          <IoIosArrowForward className="text-xl font-black left-[1rem] group-hover:left-[1.8rem]
                          group-hover:opacity-0 relative transition-all duration-[.45s] ease-[cubic-bezier(0.65,0,0.076,1.5)]" />
                      </div>
                      <span className="block absolute top-0 left-0 bottom-0 right-0 my-6 text-tahmustard
                      group-hover:text-white transition-all duration-[.45s] ease-[cubic-bezier(0.65,0,0.076,1.5)]">
                          learn more
                      </span>
                  </div>
              </Link>
          </section>
      </div>
  )
}



export default Home
