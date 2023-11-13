"use client"
import React from 'react'
import cl from './styles/Tabs.module.css';
export const Tabs = () => {
    const tabsContent = [
        { img: "/imgs/Group 465.png", title: "Погашение с помощью карты", text: "Быстрый способ погашения займа" },
        { img: "/imgs/Group 474.png", title: "Погашение с помощью электронных кошельков", text: "Быстрый способ погашения займа loredm ipsum*20 " },
        { img: "/imgs/Group 476.png", title: "Погашение с помощью Азерпочта", text: "Быстрый способ погашения займа" },];
    const tabsName = ['Погашение с помощью карты', 'Погашение с помощью электронный кошельков', 'Погашение с помощью Азерпочта'];
    const [toggleState, setToggleState] = React.useState(0);
    return (<>
        <div style={{ position: 'relative' }}>
            <div className={cl.container}>
                <div className={cl.content}>
                    {tabsContent.map((item: any, index: any) => (
                        <div
                            key={index}
                            className={toggleState === index ? cl.activeTab : cl.tab}
                        >

                            <img className={cl.tabs_img} src={item.img} alt='someimg' />
                            <div>
                                <p className={cl.title}>{item.title}</p>
                                <p className={cl.text}>{item.text}</p>
                            </div>

                        </div>
                    ))}
                </div>

            </div >
            <div className={cl.navigation}>
                {tabsName.map((item: any, index: any) => (
                    <button
                        key={index}
                        className={toggleState === index ? cl.activeNav : cl.nav}
                        onClick={() => {
                            setToggleState(index); console.log(index);
                        }}
                    >
                        <div className={cl.buttonsTab}><div className={cl.tabsNumber}>{index + 1}</div><p className={cl.navText}>{item}</p></div>
                    </button>
                ))}
            </div>
            <div className={cl.tab_back}>
                {toggleState == 0 ?
                    <svg xmlns="http://www.w3.org/2000/svg" width="1230" height="598" viewBox="0 0 1230 598" fill="none">
                        <g filter="url(#filter0_d_239_1364)">
                            <path d="M34 588H373C386.255 588 397 577.255 397 564V464C397 450.745 407.745 440 421 440H1186C1199.25 440 1210 429.255 1210 416V34C1210 20.7452 1199.25 10 1186 10H34C20.7452 10 10 20.7452 10 34V564C10 577.255 20.7452 588 34 588Z" fill="url(#paint0_linear_239_1364)" />
                        </g>
                        <defs>
                            <filter id="filter0_d_239_1364" x="0" y="0" width="1230" height="598" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset />
                                <feGaussianBlur stdDeviation="5" />
                                <feComposite in2="hardAlpha" operator="out" />
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_239_1364" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_239_1364" result="shape" />
                            </filter>
                            <linearGradient id="paint0_linear_239_1364" x1="610" y1="10" x2="610" y2="588" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#F7FFD3" />
                                <stop offset="1" stopColor="#FCFFEE" />
                            </linearGradient>
                        </defs>
                    </svg>
                    : toggleState == 1 ? <svg xmlns="http://www.w3.org/2000/svg" width="1230" height="598" viewBox="0 0 1230 598" fill="none">
                        <g filter="url(#filter0_d_239_1636)">
                            <path d="M779 588C792.255 588 803 577.255 803 564V464C803 450.745 813.745 440 827 440H1186C1199.25 440 1210 429.255 1210 416V34C1210 20.7452 1199.25 10 1186 10H34C20.7452 10 10 20.7452 10 34V416C10 429.255 20.7452 440 34 440H392C405.255 440 416 450.745 416 464V564C416 577.255 426.745 588 440 588H779Z" fill="url(#paint0_linear_239_1636)" />
                        </g>
                        <defs>
                            <filter id="filter0_d_239_1636" x="0" y="0" width="1230" height="598" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset />
                                <feGaussianBlur stdDeviation="5" />
                                <feComposite in2="hardAlpha" operator="out" />
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_239_1636" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_239_1636" result="shape" />
                            </filter>
                            <linearGradient id="paint0_linear_239_1636" x1="610" y1="10" x2="610" y2="588" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#F7FFD3" />
                                <stop offset="1" stopColor="#FCFFEE" />
                            </linearGradient>
                        </defs>
                    </svg> : <svg xmlns="http://www.w3.org/2000/svg" width="1230" height="598" viewBox="0 0 1230 598" fill="none">
                        <g filter="url(#filter0_d_239_1891)">
                            <path d="M1186 588H847C833.745 588 823 577.255 823 564V464C823 450.745 812.255 440 799 440H34C20.7451 440 10 429.255 10 416V34C10 20.7452 20.7451 10 34 10H1186C1199.25 10 1210 20.7452 1210 34V564C1210 577.255 1199.25 588 1186 588Z" fill="url(#paint0_linear_239_1891)" />
                        </g>
                        <defs>
                            <filter id="filter0_d_239_1891" x="0" y="0" width="1230" height="698" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset />
                                <feGaussianBlur stdDeviation="5" />
                                <feComposite in2="hardAlpha" operator="out" />
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_239_1891" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_239_1891" result="shape" />
                            </filter>
                            <linearGradient id="paint0_linear_239_1891" x1="610" y1="10" x2="610" y2="588" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#F7FFD3" />
                                <stop offset="1" stopColor="#FCFFEE" />
                            </linearGradient>
                        </defs>
                    </svg>
                }
            </div>
        </div>

    </>
    )
}
