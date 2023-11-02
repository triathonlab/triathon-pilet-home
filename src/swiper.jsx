import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
const Container = styled.div`
    .swiper-container,.swiper-wrapper,.swiper-slide{
        width: 100vw;
        height: 100vh;
    }
    .swiper-wrapper{
        position: relative;
    }
    .swiper-pagination{
        position: absolute;
        left: 0.4rem;
        bottom: 0;
        z-index: 33;
        width: 2rem;
        >span{
            display: flex;
            align-items: center;
            &.swiper-pagination-bullet{
                position: relative;
                margin-bottom: 0.32rem;
                width: 0.08rem;
                height: 0.08rem;
                background: rgba(136, 136, 136, 1);
                color: #fff;
                &:hover{
                    i{
                        color: #fff !important;
                    }
                }
            }
            &:nth-child(1){
                display: none;
            }
            &.swiper-pagination-bullet-active{
                background-color: #fff;
                i{
                    opacity: 1;
                }
            }
            i{
                opacity: 0;
                min-width: 3rem;
                font-style: normal;
                text-align: left;
                position: absolute;
                display: inline-block;
                left: 0.23rem;
                top: -0.07rem;
                color: #fff;
                text-transform: uppercase;
            }
            &:hover{
                i{
                    opacity: 1;
                }
            }
        }
        &:hover{
            >span i{
                opacity: 1;
                transition: all 1s;
            }
        }
    }
    .swiper-container-vertical>.swiper-pagination-bullets{
       bottom: 0;
       top: auto;
    }
`
let text;
export const SwiperContainer = ({ children }) => {

    const ref = useRef()
    useEffect(() => {
        const Pagation = document.getElementsByClassName('swiper-pagination')[0]
        const Config = {
            direction: 'vertical',
            spaceBetween: 0,
            parallax: true,
            followFinger: false, // 
            speed: 200,//滚动速度
            mousewheel: {
                releaseOnEdges: true,//PC端释放滑动	
                thresholdTime: 2000,
            },
            loop: false, // 循环
            pagination: {
                el: '.swiper-pagination',
                clickable: true,

                renderBullet: function (index, className) {
                    // eslint-disable-next-line 
                    switch (index) {
                        case 0: text = ''; break;
                        case 1: text = 'WORLDVIEW'; break;
                        case 2: text = 'project highlights'; break;
                        case 3: text = 'Explore'; break;
                        case 4: text = 'web3'; break;
                        case 5: text = 'MILESTONE'; break;
                    }
                    // eslint-disable-next-line 
                    return '<span class="' + className + '">' + '<i>' + text + '</i>' + '</span>';
                },
            },
            on: {
                slideChange: function () {
                    const home3_piCon = document.getElementById('home3_piCon')
                    const home1_titleText = document.getElementById('home1_titleText')
                    const home1_titleText_intro = document.getElementById('home1_titleText_intro')
                    const home2_container = document.getElementById('home2_container')
                    const home2_Title_show = document.getElementById('home2_Title_show')

                    const home3_title = document.getElementById('home3_title')
                    const home3_Positions = document.querySelectorAll('.position')
                    const home4_title = document.getElementById('home4_title')
                    const home4_con = document.getElementById('home4_con')
                    const home5_con = document.getElementById('home5_con')
                    const home5_title = document.getElementById('home5_title')
                    const home6_con = document.getElementById('home6_con')
                    const home6_title = document.getElementById('home6_title')



                    if (this.activeIndex === 2) {
                        setTimeout(() => {
                        home3_piCon.style.animation = `move 3s ease-out`
                            
                        }, 1500);
                    } else {
                        home3_piCon.style.animation = `none`
                    }
                    if (this.activeIndex !== 0) {
                        Pagation.style.display = 'block'
                        home1_titleText.classList.remove('animate__lightSpeedInLeft')
                        home1_titleText_intro.classList.remove('animate__fadeIn')
                    } else {
                        Pagation.style.display = 'none'
                        home1_titleText.classList.add('animate__lightSpeedInLeft')
                        home1_titleText_intro.classList.add('animate__fadeIn')
                    }
                   
                    switch (this.activeIndex) {
                        case 0:
                            home2_container.classList.remove('animate__fadeIn')
                            home2_Title_show.classList.remove('animate__fadeInUp')
                            break;
                        case 1:
                            home2_container.classList.add('animate__fadeIn')
                            home2_Title_show.classList.add('animate__fadeInUp')
                            home3_title.classList.remove('animate__fadeInDown')
                            home3_Positions.forEach(item=>{
                                item.style.display='none'
                            })
                            break;
                        case 2:
                            home2_container.classList.remove('animate__fadeIn')
                            home2_Title_show.classList.remove('animate__fadeInUp')
                            home3_title.classList.add('animate__fadeInDown')
                            home3_Positions.forEach((item,index)=>{
                               setTimeout(() => {
                                setTimeout(() => {
                                    item.style.display='block'
                                }, index*300);
                               }, 3900);
                            })
                            home4_title.classList.remove('animate__fadeInDown')
                            home4_con.classList.remove('animate__fadeIn')

                            console.log(2);

                            break;
                        case 3:
                            home3_title.classList.remove('animate__fadeInDown')
                            home3_Positions.forEach(item=>{
                                item.style.display='none'
                            })
                            home4_title.classList.add('animate__lightSpeedInLeft')
                            home4_con.classList.add('animate__fadeIn')
                            home5_title.classList.remove('animate__fadeInDown')
                            home5_con.classList.remove('animate__fadeIn')
                            console.log(3,'3')
                            break;
                        case 4:
                            home4_title.classList.remove('animate__lightSpeedInLeft')
                            home4_con.classList.remove('animate__fadeIn')
                            home5_title.classList.add('animate__fadeInDown')
                            home5_con.classList.add('animate__fadeIn')
                            home6_title.classList.remove('animate__fadeInLeft')
                            home6_con.classList.remove('animate__fadeIn')
                            console.log(4,'4')
                            break;
                    
                        default:
                            home5_title.classList.remove('animate__fadeInDown')
                            home5_con.classList.remove('animate__fadeIn')
                            home6_title.classList.add('animate__fadeInLeft')
                            home6_con.classList.add('animate__fadeIn')
                            console.log(5,'5')
                            break;
                    }

                },
            },
            navigation: {
                nextEl: '.swiper-button-next',
              },
        };

        Pagation.style.display = 'none'
        new Swiper(ref.current, Config);

        return () => {
        }

  }, [])

 

  return (
    <Container>
      <div className="swiper-container" ref={ref} >
        <div className="swiper-wrapper">{children}</div>
        <div className="swiper-pagination"></div>
      </div>
    </Container>
  )
}
