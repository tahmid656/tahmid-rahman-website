import {NextPage} from "next";
import { Header } from '../../components/header/Header';
import React from 'react';
import Image from 'next/image';
import Me from '../../public/assets/me.png';
import TextLogo from '../../public/assets/tr-text-logo.svg';
import Location from '../../public/assets/location-pin.png';
import {
    SiAdobeaftereffects,
    SiAdobeillustrator,
    SiAdobephotoshop,
    SiAngular,
    SiCapacitor,
    SiExpo,
    SiIonic, SiPython,
    SiReact
} from 'react-icons/si';

const AboutMe: NextPage = () => {
    return (
        <section id="about-me" className="w-full pt-16 bg-tahurple">
            <Header title="About me" description="Get to know more about me." />
            <div className="flex justify-center bg-[url('../public/assets/about-me-bg.svg')] bg-no-repeat bg-center bg-cover bg-fixed border-t border-purple-600/30">
                <div className="w-full flex flex-col items-center relative mx-5 sm:mx-8 md:mx-12 lg:mx-0 pt-24 pb-24">
                    <div className="w-[8rem] my-8 rounded-[5rem] border border-purple-600/90 absolute top-0">
                        <Image className="border border-purple-600/30 rounded-[5rem] z-10" src={ Me } layout="responsive" objectFit="cover" />
                    </div>
                    <div className="w-full global-container flex flex-col gap-4 bg-tahurple/80 backdrop-blur-lg border border-purple-600/30
                    rounded-3xl px-8 pt-32 pb-8 top-36 items-center">
                        <div className="flex flex-col items-center gap-4">
                            <div className="w-[8rem]">
                                <Image src={ TextLogo } layout="responsive" objectFit="cover" />
                            </div>
                            <p className="font-[swiss] text-white">Front End Team Lead & UI/UX Designer</p>
                        </div>
                        <img className="absolute right-8 top-8" src="./assets/clean.png" width="50rem" />
                        {/*<WiStars className="text-[8rem] text-white absolute right-0 top-0 text-[#D9BFFF]" />*/}
                        <div className="text-white flex flex-col gap-2">
                            <p>
                                { `
                                Hey there! If there's one thing you've probably caught onto about me by now, I'm practically married to purple – it's my main squeeze! Raised in Chattogram, Bangladesh, I soaked up enough creativity to become the designer you see here.
                                ` }
                            </p>
                            <p>
                                { `
                                As a little troublemaker, my two passions were solving problems and hanging out with my computer. Fast forward, and I'm the proud parent of the term "dev + igner." Yeah, I'm basically the Dr. Frankenstein of the tech world.
                                ` }
                            </p>
                            <p>
                                { `
                                I've designed brand identities, birthed apps, and played the ringmaster for dev teams. And when I'm not conquering the digital realm, you can catch me tickling the ivories, composing tunes, creating masterpieces (and by that, I mean art, not chaos), shredding on a skateboard, gobbling up books, and flexing my YouTube muscles.
                                ` }
                            </p>
                            <p>
                                { `
                                Here's to hoping your day is as fantastic as finding a fiver in your jeans pocket! Cheers!
                                ` }
                            </p>
                        </div>

                        <div className="w-full flex md:flex-row flex-col gap-4">
                            <div className="flex flex-row relative gap-2 text-[#D9BFFF] items-center md:basis-1/2 basis-1 p-4 border border-purple-600/30 rounded-3xl">
                                <img src="./assets/location-pin.png" width="50rem" />
                                <div className="flex flex-col font-['swiss'] text-3xl">
                                    <h3>Based in</h3>
                                    <h3>Kuala Lumpur</h3>
                                </div>
                            </div>
                            <div className="flex flex-col gap-2 text-white md:basis-1/2 basis-1 p-4 border border-purple-600/30 rounded-3xl">
                                <h4 className="font-['swiss'] text-lg`">
                                    Cup of tea
                                </h4>
                                <div className="flex flex-col gap-4 text-3xl">
                                    <div className="flex flex-row gap-4">
                                        <SiReact className="text-[#5ED4F3]" />
                                        <SiExpo />
                                        <SiAngular className="text-[#BD002E]" />
                                        <SiPython className="text-[#F7CC40]" />
                                        <SiIonic className="text-[#4786F7]" />
                                        <SiCapacitor className="text-[#50B3F7]" />
                                    </div>
                                    <div className="flex flex-row gap-4">
                                        <SiAdobeillustrator className="text-[#8F5904]" />
                                        <SiAdobephotoshop className="text-[#59C9F3]" />
                                        <SiAdobeaftereffects className="text-[#C991F5]" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutMe;
