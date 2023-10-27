'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Intro() {
    return (
            <section className='mb-28 max-w-[50rem] text-center sm:mb-0'>
                <div className='flex place-content-center'>
                    <div className='relative'>
                        <motion.div
                        initial={{ opacity: 0, scale: 0 }}  
                        animate={{ opacity: 1, scale: 1 }}  
                        transition={{
                            type: 'tween',
                            duration: 0.25
                        }}
                        >
                            <Image
                                src='https://scontent.fmbx2-1.fna.fbcdn.net/v/t1.6435-9/43743558_1348940148575614_1098813339108114432_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=be3454&_nc_ohc=FN3QvhplgcIAX-1PUkk&_nc_oc=AQnHsmuhC05WjmpcRGfXFHmk2fUkWvR5RyyCiQdKsWeQ272tnjUHldaCeXGr_rLPusT0BHvCmcBgC-BxPaYN6b4B&_nc_ht=scontent.fmbx2-1.fna&oh=00_AfBkza5Lr_Qe7mXGDhP0wlhu44wN-udv3xPFXNYWBhh-lg&oe=6563980B'
                                width='256'
                                height='256'
                                alt='profile-pic'
                                quality={95}
                                property='true'
                                className='h-24 w-24 object-cover rounded-full border-[0.35rem] border-white shadow-xl'
                            />
                        </motion.div>
                        <motion.span
                            className='absolute text-4xl bottom-0 right-0'
                            style={{
                                rotate: '-15deg'
                            }}
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{
                                type: 'spring',
                                stiffness: 128,
                                delay: 0.1,
                                duration: 0.64,
                            }}
                        >
                        🤘
                        </motion.span>
                    </div>
                </div> 
                <motion.p
                    className='my-10 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl'
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    >
                    <span>Hello my name is <b>Tilen</b>.</span><br />            
                    <span>I am a <u>software engineer</u> with <b>10 years of experience</b>. </span>             
                    <span>I enjoy <i>music, math, building websites & apps</i>. </span>            
                    <span>My current focus is <b>React(Next.js)</b>. </span>            
                </motion.p>

                <motion.div
                className='flex flex-col sm:flex-row place-content-center gap-2 px-4 text-lg font-medium' 
                initial={{y: 100, opacity: 0}}
                animate={{y: 0, opacity: 1}}
                transition={{
                    delay: 0.1
                }}
                >
                    <Link href="#contact"
                        className='group flex bg-gray-900 text-white px-7 py-3 items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 hover:bg-gray-950 active:scale-100 transition'
                    >Contect me here
                        <Image src="/arrow-top-right.svg" width="24" height="24" alt="phone-out" className="opacity-70 group-hover:translate-x-[0.15rem] group-hover:-translate-y-[0.15rem] group-hover:scale-120 transition"/>
                    </Link>
                    <a 
                      className='group flex bg-white px-7 py-3 items-center gap-2 border border-black/8 rounded-full outline-none focus:scale-105 hover:cursor-pointer hover:scale-105 active:scale-100 transition'
                      href='/CV.pdf'
                      download={true}
                    >Download CV
                        <Image src="/download.svg" width="24" height="24" alt="download" className="opacity-60 group-hover:translate-y-[0.15rem] transition"/>
                    </a>
                    <a
                        href="https://github.com/pwnker"
                        target='_blank'
                        title="github"
                        className='group flex bg-white px-4 py-3 items-center gap-2 border-black/8 rounded-full outline-none focus:scale-105 hover:cursor-pointer hover:scale-110 transition'
                    >
                        <Image src="/github.svg" width="28" height="28" alt="github" className='opacity-90 group-hover:scale-105'/>
                    </a>
                </motion.div>
            </section>
    )
}

