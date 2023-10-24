"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination } from 'swiper/modules';
import RecommendCard from './RecommendCard';
import { SwiperNavButtons } from './SwiperButtons';
import { setType, setTypeArray } from 'types';
import { montserrat } from '@/app/fonts';


function Recommended({ relatedPosts, title, caption }: { relatedPosts: setTypeArray, title: string, caption: string }) {

    return (
        <div className="text-center my-32">
            <div className="mb-10">
                <h3 className="text text-4xl mb-6">{title}</h3>
                <span className={`${montserrat.className} text-baseline text-lg`}>{caption}</span>
            </div>
            <div className='flex items-center justify-center group flex-wrap'>

                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    breakpoints={
                        {
                            // When window width is >= 640px
                            320: {
                                slidesPerView: 1,
                            },
                            // When window width is >= 768px
                            640: {
                                slidesPerView: 2,
                            },
                            1000: {
                                slidesPerView: 3,
                            }
                        }
                    }
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className=''
                    touchRatio={0.5}
                    wrapperClass='items-stretch'
                >

                    {relatedPosts.map((post: setType) => (
                        <SwiperSlide className='!h-auto' key={post.title}>
                            <RecommendCard
                                src={post.HeroImg[0].link}
                                alt={`${post.hero} ${post.title} ${post.category?.title}`}
                                hero={post.hero}
                                setName={post.title}
                                price={post.price}
                            />
                        </SwiperSlide>
                    ))}

                    <SwiperNavButtons />
                </Swiper>
            </div>
        </div>
    )
}

export default Recommended