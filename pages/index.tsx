import type { NextPage } from 'next'
import Image from 'next/image';
import Gal1 from '../public/assets/gal-1.png';
import Gal2 from '../public/assets/gal-2.png';
import Foreground1 from '../public/assets/foreground-1.svg';
import Foreground2 from '../public/assets/foreground-2.svg';
import Foreground3 from '../public/assets/foreground-3.svg';
import Foreground6 from '../public/assets/foreground-6.svg';
import Foreground7 from '../public/assets/foreground-7.svg';
import Foreground8 from '../public/assets/foreground-8.svg';
import ForegroundMobile from '../public/assets/foreground-mobile.svg';
import React from 'react';
import { FaGithub, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { SiAdobeaftereffects, SiAdobeillustrator, SiAdobephotoshop } from 'react-icons/si';
import Link from 'next/link';
import { IoIosArrowForward } from 'react-icons/io';

const Home: NextPage = () => {
    const socialLinks = [
        { name: 'LinkedIn', link: 'https://www.linkedin.com/in/tahmid-rahman-b38784131/', icon: FaLinkedinIn },
        { name: 'GitHub', link: 'https://github.com/tahmid656/', icon: FaGithub },
        { name: 'Instagram', link: 'https://www.instagram.com/tahmidrahmandesigns/', icon: FaInstagram },
        { name: 'YouTube', link: 'https://www.youtube.com/@diytutsofficial', icon: FaYoutube },
    ];

    const projects = [
        { name: 'Florida Tulip Agro', img: Gal1, icons: [SiAdobeillustrator, SiAdobephotoshop, SiAdobeaftereffects] },
        { name: 'Doge', img: Gal2 , icons: [SiAdobeillustrator, SiAdobephotoshop] },
        { name: 'Doge', img: Gal2 , icons: [SiAdobeillustrator, SiAdobephotoshop] },
        { name: 'Doge', img: Gal2 , icons: [SiAdobeillustrator, SiAdobephotoshop] }
    ];

    // const parallax = (e: any) => {
    //     document.querySelectorAll(".object").forEach(function (move) {
    //         const moving_value = move.getAttribute("data-value");
    //         const x = (e.clientX * moving_value) / 150;
    //         const y = (e.clientY * moving_value) / 150;
    //
    //         move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
    //         move.style.transition = ".45s cubic-bezier(0.65,0,0.076,1.5)";
    //     });
    // };

    const heroAnimation = function (scrollY: number) {
        const leftImageScroll = scrollY * 0.03;
        const rightImageScroll = scrollY * - 0.02;
        const zoomText = scrollY * .0002 + 1;
        const text = document.querySelector('.text-zoom');
        text.style.transform = `scale(${zoomText})`;
        const object = document.querySelector(".art");
        object.style.transform = `translate(0, ${leftImageScroll}rem)`;
        const objectTwo = document.querySelector(".art-2");
        objectTwo.style.transform =`translate(0, ${rightImageScroll}rem)`;
        object.style.transition = '.2s ease-in-out'
    };

    React.useEffect(() => {
        // requestAnimation for different browsers
        let raf = window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            window.oRequestAnimationFrame;

        // Capture the most recent scroll value
        let lastScrollTop = window.scrollY;

        // if the request animation is available then fire the loop function
        if (raf) {
            loop();
        }

        function loop() {
            let scrollTop = window.scrollY;
            // Compare the most recent scroll value with last scroll value
            if (lastScrollTop === scrollTop) {
                raf(loop); // pass loop as callbackfn to loop the animation on every render
                return;
            } else {
                console.log('bruh');
                lastScrollTop = scrollTop;
                heroAnimation(lastScrollTop);
                raf(loop);
            }
        }
    });


  return (
      <div>
          {/*Landing Page*/}
          <section id="hero" className="h-screen bg-[url('../public/assets/tr-bg.svg')] bg-no-repeat bg-center bg-cover bg-fixed">
              <div className="min-w-min-[100px] h-screen flex justify-center items-center flex-col">
                  {/*Hero Content*/}
                  <div className="z-20 text-zoom overflow-x-hidden">
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
                                        <SocialIcon className="cursor-pointer text-white hover:text-tahmustard transition-colors ease-in duration-75"></SocialIcon>
                                    </a>
                                  );
                              })
                          }
                      </div>
                  </div>
                  <div className="xs:flex hidden">
                      <Image src={ Foreground3 } className="object transition ease-in duration-150" data-value="3" layout="fill" objectFit="cover"></Image>
                      <Image src={ Foreground1 } className="object art transition ease-in duration-[50ms] zoom-on-scroll" data-value="-2" layout="fill" objectFit="cover"></Image>
                      <Image src={ Foreground2 } className="object art-2 transition ease-in duration-100 zoom-on-scroll" data-value="6" layout="fill" objectFit="cover"></Image>
                      <Image src={ Foreground6 } className="object transition ease-in duration-200" data-value="2" layout="fill" objectFit="cover"></Image>
                      <Image src={ Foreground7 } className="object transition ease-in duration-[80ms]" data-value="-2" layout="fill" objectFit="cover"></Image>
                      <Image src={ Foreground8 } className="object transition ease-in duration-75" data-value="-3" layout="fill" objectFit="cover"></Image>
                  </div>
                  <div className="xs:hidden flex">
                     <Image src={ ForegroundMobile } layout="fill" objectFit="cover"></Image>
                  </div>
              </div>
          </section>
          {/*Projects*/}
          <section id="projects" className="bg-tahurple w-full">
              <div className="flex flex-col md:flex-row global-container text-white items-start md:items-center px-5 sm:px-8 md:px-12 lg:px-0 py-4 md:py-8">
                  <h2 className="text-4xl font-black basis-2/4 font-['Abril_Fatface']">Projects</h2>
                  <h3 className="basis-2/4 md:border-l border-l-purple-600/40 md:px-4 pt-2 lg:py-4 text-sm sm:text-[1rem]">Dive down into the world of my imagination.</h3>
              </div>
              <div className="grid gap-3 grid-cols-1 md:grid-cols-2 px-3 pb-3">
                  {
                      projects.map((project, index) => {
                          return (
                              <div key={index} className="aspect-video project-container relative border-purple-600 rounded-3xl border-[1px]">
                                  <Image className="rounded-3xl" src={project.img} alt="Logo" objectFit="cover" layout="fill"></Image>
                                  <Link href="">
                                      <div className="project-info w-full h-full absolute invisible flex flex-col items-center justify-end gap-2 text-white px-3 py-[-12] opacity-0 hover:pb-6 hover:opacity-100 text-3xl rounded-3xl bg-gradient-to-t from-black/90 to-black/10 rounded-tl-lg transition-all ease-[cubic-bezier(0.65,0,0.076,1.5)] duration-[.45s] delay-200">
                                          <p className="font-['swiss'] text-2xl text-white">{project.name}</p>
                                          <p className="text-base">Learn more {'>'}</p>
                                          <div className="flex gap-3 text-white">
                                              {
                                                  project.icons.map((icon, index) => {
                                                      const ProjectIcon = icon;
                                                      return (
                                                        <ProjectIcon key={index}></ProjectIcon>
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
          <section id="more" className="bg-[url('../public/assets/bg-1.svg')] bg-no-repeat bg-center bg-cover bg-fixed flex flex-col text-white justify-center items-center py-24 px-4">
              <h1 className="text-4xl font-black font-['swiss'] text-center">like what you see?</h1>
              <p className="text-xl my-2">explore my portfolio</p>
              <Link href="/portfolio">
                  <div className="inline-block relative pt-3 w-[12rem] text-center group cursor-pointer">
                      <div className="rounded-full bg-gradient-to-r from-tahmustard to-tahpantone w-[3rem] py-[.875rem] relative group-hover:w-full transition-all duration-[.45s] ease-[cubic-bezier(0.65,0,0.076,1.5)]">
                          <IoIosArrowForward className="text-xl font-black left-[1rem] group-hover:left-[1.8rem] group-hover:opacity-0 relative transition-all duration-[.45s] ease-[cubic-bezier(0.65,0,0.076,1.5)]"></IoIosArrowForward>
                      </div>
                      <span className="block absolute top-0 left-0 bottom-0 right-0 my-6 text-tahmustard group-hover:text-white transition-all duration-[.45s] ease-[cubic-bezier(0.65,0,0.076,1.5)]">learn more</span>
                  </div>
              </Link>
          </section>
      </div>
  )
}

export default Home
