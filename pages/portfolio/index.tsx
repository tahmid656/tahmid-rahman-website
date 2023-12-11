import React, { useEffect, useState } from 'react';
import { NextPage } from 'next';
import { Header } from '../../components/header/Header';
import { portfolio } from '../api/portfolio';
import Masonry, {ResponsiveMasonry} from 'react-responsive-masonry';
import { availableTags, Portfolio } from '../api/types';
import { ImageModal } from '../../components/image-modal/ImageModal';

const Portfolio: NextPage = () => {
    const [tag, setTag] = useState<Portfolio['tag'][number]>('all');
    const [modalImageUrl, setModalImageUrl] = useState('');
    const [contentType, setContentType] = useState<'img' | 'vid'>('img');

    const closeModal = () => setModalImageUrl('');

    useEffect(() => {
        if (modalImageUrl) {
            // When the modal is open, add a class to the body to hide the scroll
            document.body.classList.add('modal-open');
        } else {
            // When the modal is closed, remove the class to enable scrolling
            document.body.classList.remove('modal-open');
        }
    }, [modalImageUrl]);

    const filteredItems = portfolio.filter(res => res.tag.some(pTag => tag === pTag));
    const TagList = () => {
        return (
            <>
                {
                    availableTags.map((res, index) => {
                        return (
                            <div onClick={() => setTag(res)} key={index} className={`cursor-pointer px-4 py-2 border
                             ${res === tag ? `text-tahmustard border-tahmustard` : `text-white/60 border-tahpurple-light`} 
                             hover:border-tahpantone hover:text-tahpantone rounded-xl`}>
                                {res}
                            </div>
                        );
                    })
                }
            </>
        )
    };

    const contentProps = (img: string, type: 'img' | 'vid') => {
        setModalImageUrl(img);
        setContentType(type);
    };

    return (
        <>
            {
                modalImageUrl && <ImageModal imgUrl={modalImageUrl} imgType={contentType} onClose={closeModal}/>
            }
            <section id="portfolio" className="bg-tahurple w-full min-h-[70rem] pt-16 pb-8">
                <Header title="Portfolio" description="Explore my work adventure with different companies, non-profit organizations and more" />
                <div className="border-t lg:mx-8 border-purple-600/30">
                    <div className="global-container flex flex-row flex-wrap gap-4 px-5 sm:px-4 md:px-12 lg:px-0 py-8">
                        <TagList />
                    </div>
                </div>
                <ResponsiveMasonry columnsCountBreakPoints={{640: 2, 1000: 4}} className="px-4 sm:px-8">
                    <Masonry columnsCount={4} gutter="1rem">
                        {
                            filteredItems.map(res => {
                                return (
                                    <div key={res.id} onClick={() => contentProps(res.imageUri, res.type)} className="portfolio-container
                                    border relative border-purple-600/90 rounded-3xl min-h-[4rem]">
                                        {
                                            res.type === 'img' ?
                                                <img loading="lazy" className="rounded-3xl" srcSet={res.imageUri} alt=""/> :
                                                <video className="rounded-3xl" src={res.imageUri} autoPlay loop playsInline muted />
                                        }
                                        <div className="portfolio-info top-0 w-full h-full absolute invisible flex flex-col
                                        items-center justify-end gap-2 text-white px-3 py-[-12] opacity-0 hover:pb-6 hover:opacity-100
                                        text-3xl rounded-3xl bg-gradient-to-t from-black/90 to-black/10 rounded-tl-lg transition-all
                                        ease-[cubic-bezier(0.65,0,0.076,1.5)] duration-[.45s]">
                                            <p className="font-['swiss'] text-2xl text-white">{res.title}</p>
                                            <p className="text-base">Learn more {'>'}</p>
                                            {
                                                res.icons.length > 0 && <div className="flex gap-3 text-white">
                                                    {
                                                        res.icons.map((icon, index) => {
                                                            const ProjectIcon = icon;
                                                            return (
                                                                <ProjectIcon key={index}></ProjectIcon>
                                                            );
                                                        })
                                                    }
                                                </div>
                                            }
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </Masonry>
                </ResponsiveMasonry>
                {/*If there are no images to display*/}
                {
                    filteredItems.length === 0 && <div className="h-[28rem] font-['swiss'] text-tahpurple-light text-2xl
                    flex justify-center items-center">
                        <h3>bruh, no stuff to show :(</h3>
                    </div>
                }
            </section>
        </>
    );
};

export default Portfolio;
