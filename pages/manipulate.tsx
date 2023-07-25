import type { NextPage } from 'next'
import { useEffect, useRef, useState } from 'react';
import Head from 'next/head'
import Script from 'next/script'

import normal from '../bank/normal.json';
import funny from '../bank/funny.json';
import spicy from '../bank/spicy.json';
import puzzles from '../bank/puzzles.json';

const Home: NextPage = () => {
  const [bank, setBank] = useState(normal);
  const ref = useRef(null);

  useEffect(() => {
    document.body.style.backgroundColor = 'white';
  }, []);

  useEffect(() => {
    const el = (document.getElementById('bank') as HTMLInputElement).value;
    bankSelector(el);
  }, [])

  const handleChange = (e: any) => {
    bankSelector(e.target.value);
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const mode = e.target[0].value;
    const question = e.target[1].value;
    const offset = e.target[2].value;
    const knownModes = ['normal', 'funny', 'spicy', 'puzzles', 'mix'];
    
    if (isNaN(question) || isNaN(offset) || !knownModes.includes(mode)) { return }

    const url = `/game?mode=${mode}&q=${question}&offset=${offset}`;
    window.location.href = url;
  }

  const bankSelector = (bank: any) => {
    switch (bank) {
      case "funny":
        setBank(funny);
        break;
      case "spicy":
        setBank(spicy);
        break;
      case "puzzles":
        setBank(puzzles);
        break;
      case "mix":
        setBank([...normal, ...funny, ...spicy, ...puzzles]);
        break;

      default:
        setBank(normal);
    }
  }

  return (
    <>
      <div className="h-full">
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
          <title>Truth or Drink</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="container flex mx-auto p-4 fixmobilevh">
          <div className="m-auto">
            <div className="max-w-3xl cursor-pointer">
              <form onSubmit={handleSubmit}>
                <div>
                  <select ref={ref} id={"bank"} onChange={handleChange}>
                    <option value="normal">Normal</option>
                    <option value="funny">Funny</option>
                    <option value="spicy">Spicy</option>
                    <option value="puzzles">Puzzles</option>
                    <option value="mix">Mix</option>
                  </select>
                </div>
                <div>
                  <select className="max-w-md text-ellipsis">
                    {
                      bank.map((item, index) => {
                        return <option key={index} value={index}>{item}</option>
                      })
                    }
                  </select>
                </div>
                <div>
                  <select>
                    {[...Array(10)].map((e, i) => <option key={i} value={i}>{i+1}</option>)}
                  </select>
                </div>
                <div>
                  <input type="submit" value="Submit" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
