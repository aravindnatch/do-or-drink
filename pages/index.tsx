import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Script from 'next/script'
import { useEffect } from 'react'

const Home: NextPage = () => {
  useEffect(() => {
    document.body.style.backgroundColor = 'black';
  }, []);

  return (
    <div className="h-full bg-black">
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-4VZHMD1X2V"/>
      <Script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-4VZHMD1X2V');
          `,
        }}
      />
      <Head>
        <title>Do or Drink - Free & Unlimited Game</title>
        <meta name="description" content="Play Do or Drink online, a fun and ad-free drinking game. Choose from different game modes: Normal, Funny, Spicy, Puzzles, and Mixed." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col p-4 fixmobilevh items-center justify-center">
        <div className="flex flex-col">
          <div className="flex flex-col items-center border-2 border-[#363C3D] rounded-xl text-white p-7 px-20">
            <div className="select-none text-5xl text-header font-semibold text-center align-middle pb-2">
              DO
            </div>
            <span className="text-xl align-middle">O R</span> 
            <div className="select-none text-5xl text-header font-semibold text-center align-middle pb-2">
              DRINK
            </div>

            <Link href='/manipulate' className="mt-5 cursor-default">
              <div className="select-none rounded-lg bg-white text-black text-center font-bold px-4 m-auto">
                O N L I N E
              </div>
            </Link>
          </div>

          <div className="select-none text-center font-bold p-4 m-auto text-white opacity-80 mt-5">
            S E L E C T  &nbsp; M O D E:
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Link href='/game?mode=normal'>
              <div className="select-none cursor-pointer text-white font-bold text-xl rounded-xl p-4 shadow-xl w-full flex-1 text-center bg-gradient-to-r from-[#00C5FF] to-[#009BFF]">
                Normal
              </div>
            </Link>
            <Link href='/game?mode=funny'>
              <div className="select-none cursor-pointer text-white font-bold text-xl rounded-xl p-4 shadow-md w-full flex-1 mx-auto text-center bg-gradient-to-r from-[#FFC300] to-[#FF8900]">
                Funny
              </div>
            </Link>
          </div>

          <br/>

          <div className="grid grid-cols-2 gap-4">
            <Link href='/game?mode=spicy'>
              <div className="select-none cursor-pointer text-white font-bold text-xl rounded-xl p-4 shadow-md w-full flex-1 mx-auto text-center bg-gradient-to-r from-[#FF006D] to-[#FC0023]">
                Spicy
              </div>
            </Link>
            <Link href='/game?mode=puzzles'>
              <div className="select-none cursor-pointer text-white font-bold text-xl rounded-xl p-4 shadow-md w-full flex-1 mx-auto text-center bg-gradient-to-r from-[#EA00C3] to-[#BE00FF]">
                Puzzles
              </div>
            </Link>
          </div>

          <br/> 

          <Link href='/game?mode=mix' className="">
            <div className="select-none cursor-pointer text-black font-bold text-xl rounded-xl p-4 shadow-md w-full flex-1 mx-auto text-center bg-white">
              Mixed
            </div>
          </Link>

        </div>
      </div>
    </div>
  )
}

export default Home
