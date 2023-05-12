import { useContext, useEffect, useState } from 'react';
import { Songs } from '../context';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function GlobalSongs() {
    const { DataSongs, Playlists, Albums, MVs, Artists, handleSetSong, song } = useContext(Songs);

    const [idSong, setIdSong] = useState(0)
    console.log(Playlists)

    const handlePlaySong = (idSong) => {
        setIdSong(idSong);
        handleSetSong(idSong);
    }
    useEffect(() => {
        setIdSong(song.id);
    }, [song])
    const [hoveredIndex, setHoveredIndex] = useState(-1);
    const settings = {
        className: "center",
        centerPadding: "20px",
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        swipeToSlide: true,
        autoplay: true,
        autoplaySpeed: 1400,
        fade: true,
        cssEase: 'linear'
    };
    const settingsTwo = {
        className: "center",
        centerMode: true,
        slidesToShow: 4,
        speed: 300,
        infinite: true,
        lazyLoad: 'ondemand',
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const settingsMvs = {
        className: "center",
        centerPadding: "60px",
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 500,
        infinite: true,
    };

    const settingsArtists = {
        className: "center",
        centerPadding: "20px",
        slidesToShow: 5,
        slidesToScroll: 1,
        speed: 500,
        infinite: true,
    };
    const [currentSlide, setCurrentSlide] = useState(0);

    return (
        <div className="">
            <div className="w-[100%] flex justify-center items-center flex-col mt-10">
                <div className=" w-[90%] flex justify-between items-center mb-6">
                    <span className='text-2xl font-[600] text-slate-100'>Bài Hát</span>
                    <div className='flex'>
                        <a href="#" className='border-[1px] rounded-full px-6 py-1'>
                            <i className="bi bi-upload text-slate-100"></i>
                            <span className='text-slate-100 ml-2 text-xs'>TẢI LÊN</span>
                        </a>
                        <button className='ml-4 rounded-full bg-emerald-500 px-6 py-1 flex items-center'>
                            <i className="bi bi-caret-right-fill text-slate-100"></i>
                            <span className='text-slate-100 text-xs ml-2'>PHÁT TẤT CẢ</span>
                        </button>
                    </div>
                </div>
                <div className="box flex max-h-[300px]">
                    <div className='box-image-auto flex mr-6'>
                        <Slider {...settings} className=''>
                            {DataSongs.map((image, index) => (
                                <img src={image.links.images[1].url} alt="" className='rounded-2xl' />
                            ))}
                        </Slider>
                    </div>
                    <div className="table-view-song overflow-y-scroll">
                        <table className="">
                            <tbody>
                                {
                                    DataSongs.map((song, index) => (
                                        <tr
                                            key={index}
                                            onMouseEnter={() => setHoveredIndex(index)}
                                            onMouseLeave={() => setHoveredIndex(-1)}
                                            className={`row-songs bg-transparent h-[50px] hover:bg-slate-900 text-emerald-500 ${idSong === song.id && 'bg-slate-600 text-teal-200'}`}
                                            onClick={() => handlePlaySong(song.id)}
                                        >
                                            <td className="p-[10px] group">
                                                <div className="flex items-center">
                                                    {/* <i className="bi bi-music-note-beamed mr-3"></i> */}
                                                    {hoveredIndex === index ? (
                                                        <input type="checkbox" className=' mr-3 h-[16px] w-[16px] bg-transparent' />
                                                    ) : (
                                                        <i className="bi bi-music-note-beamed mr-3 text-[16px]"></i>
                                                    )}
                                                    <img className='w-[40px] rounded-lg mr-3' src={song.links.images[1].url} alt="avatar"></img>
                                                    <span>{song.name}</span>
                                                </div>
                                            </td>
                                            <td className='text-center'>{song.author}</td>
                                            <td className='text-center'>
                                                <div>
                                                    <i className="bi bi-mic-fill mr-3"></i>
                                                    <i className="bi bi-heart-fill text-red-500 mr-3"></i>
                                                    <i className="bi bi-three-dots mr-3"></i>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>

                        </table>
                    </div>
                </div>
            </div>
            <div className="w-[100%] flex justify-center items-center flex-col mt-10">
                <div className=" w-[90%] flex justify-between items-center mb-6">
                    <div className='flex items-center'>
                        <span className='text-2xl font-[600] text-slate-100'>Playlist</span>
                        <i className="bi bi-caret-right-fill text-3xl text-slate-100"></i>
                    </div>
                </div>
                <Slider {...settingsTwo} className='w-[90%]'>
                    {Playlists.map((playlist, index) => (
                        <div key={index} className={`ml-3 ${currentSlide === index ? "active" : ""}`}>
                            <div className='box-image-playlist w-[100%]'>
                                <img src={playlist.url_image} alt="" className='slide-img-playlist' />
                                <div className='hint-action-playlist hidden justify-center items-center'>
                                    <i className="bi bi-heart-fill text-pink-600 text-2xl hover:cursor-pointer"></i>
                                    <i className="bi bi-caret-right-fill text-slate-50 text-2xl hover:cursor-pointer"></i>
                                    <i className="bi bi-three-dots text-slate-50 text-2xl hover:cursor-pointer"></i>
                                </div>
                            </div>
                            <div className='box-descript-playlist flex flex-col items-center w-[100%] mt-2'>
                                <span className='text-slate-50 font-[600] w-[90%] text-center mr-[10%]'>{playlist.name}</span>
                                <span className='text-slate-600 text-sm font-[500] mr-[10%]'>{playlist.creator}</span>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
            <div className="w-[100%] flex justify-center items-center flex-col mt-10">
                <div className=" w-[90%] flex justify-between items-center mb-6">
                    <div className='flex items-center'>
                        <span className='text-2xl font-[600] text-slate-100'>Album</span>
                        <i className="bi bi-caret-right-fill text-3xl text-slate-100"></i>
                    </div>
                </div>
                <Slider {...settingsTwo} className='w-[90%]'>
                    {Albums.map((album, index) => (
                        <div key={index} className={`ml-3 ${currentSlide === index ? "active" : ""}`}>
                            <div className='box-image-playlist w-[100%]'>
                                <img src={album.image} alt="" className='slide-img-playlist' />
                                <div className='hint-action-playlist hidden justify-center items-center'>
                                    <i className="bi bi-heart-fill text-pink-600 text-2xl hover:cursor-pointer"></i>
                                    <i className="bi bi-caret-right-fill text-slate-50 text-2xl hover:cursor-pointer"></i>
                                    <i className="bi bi-three-dots text-slate-50 text-2xl hover:cursor-pointer"></i>
                                </div>
                            </div>
                            <span className='text-slate-50 font-[600] w-[90%] text-center mr-[10%]'>{album.name}</span>
                        </div>
                    ))}
                </Slider>
            </div>
            <div className="w-[100%] flex justify-center items-center flex-col mt-10">
                <div className=" w-[90%] flex justify-between items-center mb-6">
                    <div className='flex items-center'>
                        <span className='text-2xl font-[600] text-slate-100'>MV</span>
                        <i className="bi bi-caret-right-fill text-3xl text-slate-100"></i>
                    </div>
                </div>
                <Slider {...settingsMvs} className='w-[90%]'>
                    {MVs.map((mv, index) => (
                        <div key={index} className={`ml-4 ${currentSlide === index ? "active" : ""}`}>
                            <div className='box-image-mv w-[100%] relative'>
                                <img src={mv.image} alt="" className='slide-img-mv' />
                                <i class="bi bi-x-octagon-fill hidden hint-action-playlist text-red-500 text-2xl hover:cursor-pointer absolute top-0 right-0 p-2"></i>
                                <div className='hint-action-playlist hidden justify-center items-center'>
                                    <i className="bi bi-caret-right-fill text-slate-50 text-2xl hover:cursor-pointer"></i>
                                </div>
                            </div>
                            <div className='box-descript-playlist flex flex-col items-center w-[100%] mt-2'>
                                <span className='text-slate-50 font-[600] w-[90%] text-center mr-[10%]'>{mv.name}</span>
                                <span className='text-slate-600 text-sm font-[500] mr-[10%]'>{mv.author}</span>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>

            <div className="w-[100%] flex justify-center items-center flex-col mt-10 mb-24">
                <div className=" w-[90%] flex justify-between items-center mb-6">
                    <div className='flex items-center'>
                        <span className='text-2xl font-[600] text-slate-100'>Artists</span>
                        <i className="bi bi-caret-right-fill text-3xl text-slate-100"></i>
                    </div>
                </div>
                <Slider {...settingsArtists} className='w-[90%]'>
                    {Artists.map((artist, index) => (
                        <div key={index} className={`ml-4${currentSlide === index ? "active" : ""}`}>
                            <div className='box-image-artist w-[100%] relative'>
                                <img src={artist.image} alt="" className='slide-img-artist' />
                                <div className='hint-action-artist hidden justify-center items-center absolute'>
                                    <i className="bi bi-caret-right-fill text-slate-50 text-2xl hover:cursor-pointer"></i>
                                </div>
                            </div>
                            <div className='box-descript-artist flex flex-col items-center justify-center w-[100%] mt-2'>
                                <div className='flex justify-center mr-[10%] w-[100%]'>
                                    <span className='text-slate-50 font-[500] text-center mr-2'>{artist.name}</span>
                                    <i className="bi bi-star-fill text-yellow-300"></i>
                                </div>
                                <span className='text-slate-600 text-sm font-[500] mr-[20%] mb-3'>{artist.followers} quan tâm</span>
                                <button className='flex w-[80%] justify-center  mr-[10%] bg-pink-600 rounded-full py-2'>
                                    <i class="bi bi-check2 mr-2 text-slate-50 text-xs"></i>
                                    <span className='text-slate-50 text-xs'>ĐÃ QUAN TÂM</span>
                                </button>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>

        </div >
    );
}

export default GlobalSongs;