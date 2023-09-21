"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination } from 'swiper/modules';
import RecommendCard from './RecommendCard';
import { SwiperNavButtons } from './SwiperButtons';
import { setType, setTypeArray } from 'types';


function Recommended({ relatedPosts }: setTypeArray | any) {

    return (
        <div className="text-center my-20">
            <div className="mb-10">
                <h3 className="text text-3xl mb-6">Recommened for you</h3>
                <span className="text-baseline text-lg">Choose other cool sets from various collections</span>
            </div>
            <div className='flex items-center justify-center group '>

                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className=''
                    wrapperClass='items-stretch'
                >

                    {relatedPosts.map((post: setType) => (
                        <SwiperSlide className='!h-auto'>
                            <RecommendCard
                                src={post.HeroImg[0].link}
                                alt={`${post.hero} ${post.title} ${post.category?.title}`}
                                hero={post.hero}
                                setName={post.title}
                                price={post.price}
                            />
                        </SwiperSlide>
                    ))}
                    {/* <SwiperSlide className=''>
                        <RecommendCard
                            src="https://tecdn.b-cdn.net/img/new/standard/city/041.webp"
                            alt="Hollywood Sign on The Hill"
                            hero="Legion Commander"
                            setName="Bird of Prey Diretide Collector's Cache 2"
                            price={5.00}
                        />
                    </SwiperSlide>
                    <SwiperSlide className=''>
                        <RecommendCard
                            src="https://tecdn.b-cdn.net/img/new/standard/city/042.webp"
                            alt="Palm Springs Road"
                            hero="LC"
                            setName="Bird of Prey Diretide Collector's Cache 2"
                            price={15.00}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <RecommendCard
                            src="https://tecdn.b-cdn.net/img/new/standard/city/044.webp"
                            alt="Skyscrapers"
                            hero="LC"
                            setName="Bird of Prey Diretide Collector's Cache 2"
                            price={20.00}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <RecommendCard
                            src="https://tecdn.b-cdn.net/img/new/standard/city/043.webp"
                            alt="Los Angeles Skyscrapers"
                            hero="LC"
                            setName="Bird of Prey Diretide Collector's Cache 2"
                            price={8.00}
                        />
                    </SwiperSlide> */}
                    <SwiperNavButtons />
                </Swiper>
            </div>
        </div>
    )
}

export default Recommended