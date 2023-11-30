import { NextPage } from 'next';
import { Header } from '../../components/header/Header';
import Masonry, {ResponsiveMasonry} from 'react-responsive-masonry';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';

const Tutorials: NextPage = () => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Replace "YOUR_API_KEY" with your actual API key
                const apiKey = "AIzaSyAYGfmdcNjQkh1uxTpgQFjlYMJt5gNk5P0";
                const channelID = "UCfKQJmCP7DMKMHUGbWxIRUQ";
                const response = await axios.get(
                    `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=${channelID}&key=${apiKey}`
                );

                const uploadsPlaylistId = response.data.items[0]?.contentDetails?.relatedPlaylists?.uploads;

                if (uploadsPlaylistId) {
                    // Fetch videos from the uploads playlist
                    const videosResponse = await axios.get(
                        `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${uploadsPlaylistId}&maxResults=10&key=${apiKey}`
                    );

                    setVideos(videosResponse.data.items);
                }
            } catch (error) {
                console.error("Error fetching YouTube data:", error.message);
            }
        };

        fetchData();
    }, []);
    return (
        <section id="tutorials" className="bg-tahurple w-full min-h-[70rem] pt-16 pb-8">
            <Header title="Tutorials" description="Check out my tutorials on youtube" />
            <div className="border-t border-purple-600/30 pt-8">
                <ResponsiveMasonry columnsCountBreakPoints={{640: 2, 1000: 4}} className="px-4 sm:px-8">
                    <Masonry columnsCount={4} gutter="1rem">
                        {videos.map((video) => (
                            <Link key={video.id} href={`https://www.youtube.com/watch?v=${video.snippet.resourceId.videoId}`}>
                                <a target="_blank">
                                    <div className="border border-purple-600/30 rounded-3xl">
                                        <div className="aspect-video relative">
                                            <Image src={video.snippet.thumbnails.high.url}
                                                   layout="fill"
                                                   objectFit="cover"
                                                   objectPosition="center"
                                                   className="rounded-t-3xl absolute"
                                            />
                                        </div>
                                        <h3 className="text-white text-sm font-bold px-4 pt-2 pb-4">{video.snippet.title}</h3>
                                    </div>
                                </a>
                            </Link>
                        ))}
                    </Masonry>
                </ResponsiveMasonry>
            </div>
        </section>
    )
}

export default Tutorials
