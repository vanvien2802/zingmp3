import React, { useContext, useState } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { Songs } from '../context';

export const Playing = () => {

    const { song, handleSetSong } = useContext(Songs)

    const handleClickNext = () => {
        handleSetSong(song.id + 1)
    }

    const handleClickPrevious = () => {
        handleSetSong(song.id - 1)
    }

    return (
        <div className='col-span-6 flex wrapper-playing-music relative items-center justify-between '>
            <div className='flex justify-around items-center'>
                <a className="h-[70px] w-[70px] flex items-center justify-center rounded-full ml-6">
                    <img src={song.links.images[1].url} alt="" className='rounded-full spin' />
                </a>
                <div className='flex flex-col mr-4 ml-4'>
                    <span className="text-white text-base">{song.name}</span>
                    <span className="text-slate-400 text-sm font-[600]">{song.author}</span>
                </div>
                <i className="bi bi-heart-fill text-red-500 mr-6 ml-6"></i>
                <i className="bi bi-three-dots"></i>
            </div>
            <AudioPlayer
                className="playing-music"
                src={song.url}
                style={{
                    boxShadow: 'none',
                    width : '1000px',
                    marginRight:'60px'
                }}
                layout="stacked-reverse"
                showSkipControls={true}
                showJumpControls={false}
                onClickNext={handleClickNext}
                onClickPrevious={handleClickPrevious}
            />
        </div>
    );
};