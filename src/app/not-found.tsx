'use client'

import Head from 'next/head';
import Link from 'next/link'

import useRedirectAfterSomeSeconds from '@/hooks/useRedirectAfterSomeSeconds';

export default function NotFound() {

    const { secondsRemaining } = useRedirectAfterSomeSeconds(3);
    
return (

    <>
        <Head>
            <title>Page not found - redirecting in 3 seconds</title>
        </Head>
        <main>
            <div className="container max-w-5xl mx-auto py-12 md:py-16 lg:py-20">
                <div className="flex flex-col items-center justify-center gap-12">
                    <p className=" text-2xl font-bold">
                        This repo is Private.
                    </p>          
                    <p className=" text-xl font-bold">
                       You will be redirect <br/>to Home in <span className="text-red-600">{secondsRemaining}</span> seconds
                    </p>          
                    <Link href={"/"}>
                    <button className="px-4 py-2 flex bg-gray-200 hover:bg-gray-300 text-gray-800 text-sm font-medium rounded-full pointer-cursor">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
                        </svg>
                        Back Home
                    </button>
                    </Link>
                </div>
            </div>
        </main>
    </>
)
}