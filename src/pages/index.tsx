/**
 * v0 by Vercel.
 * @see https://v0.dev/t/jh5IZ8lkdV9
 */
// import Link from "next/link"
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function Home() {
    return (
        <div id="tailwind" className="bg-gradient-to-r from-blue-900 to-black text-white">
            <nav className="w-full py-4">
                <div className="container px-4 md:px-6 flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                        <img
                            alt="Startup Logo"
                            className="rounded-full bg-white p-1"
                            height="40"
                            src="/placeholder.svg"
                            style={{
                                aspectRatio: "40/40",
                                objectFit: "cover",
                            }}
                            width="40"
                        />
                        <h1 className="text-2xl font-bold">Our Startup</h1>
                    </div>
                    <div className="space-x-4">
                        <Link className="text-lg hover:text-gray-500" href="#">
                            Home
                        </Link>
                        <Link className="text-lg hover:text-gray-500" href="#">
                            Features
                        </Link>
                        <Link className="text-lg hover:text-gray-500" href="/blog">
                            Blog
                        </Link>
                    </div>
                </div>
            </nav>
            <section className="w-full py-12 md:py-24 lg:py-32">
                <div className="container px-4 md:px-6">
                    <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 text-center">
                        <div className='space-y-6'>
                            <h1 className="text-5xl font-bold tracking-tighter sm:text-6xl">Welcome to Our Startup</h1>
                            <p className="max-w-[900px] text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                We are dedicated to providing the best service in the industry. Join us as we innovate and create
                                solutions that make a difference.
                            </p>
                            <Link
                                className="inline-flex h-10 items-center justify-center rounded-md bg-green-500 px-8 text-sm font-medium shadow transition-colors hover:bg-green-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-green-700 disabled:pointer-events-none disabled:opacity-50"
                                href="#"
                            >
                                About Us
                            </Link>
                        </div>
                        <img
                            alt="Startup Logo"
                            className="rounded-full bg-white p-4"
                            height="200"
                            src="/placeholder.svg"
                            style={{
                                aspectRatio: "200/200",
                                objectFit: "cover",
                            }}
                            width="200"
                        />
                    </div>
                </div>
            </section>
            <section className="w-full py-12 md:py-24 lg:py-32 bg-black bg-opacity-20">
                <div className="container px-4 md:px-6">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Features</h2>
                        <p className="max-w-[900px] text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            Explore the features that set us apart from the competition and see how we can help your business grow.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
                        <div className="flex flex-col items-center space-y-4">
                            <svg
                                className=" h-6 w-6 text-green-500"
                                fill="none"
                                height="24"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                width="24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <polyline points="20 6 9 17 4 12" />
                            </svg>
                            <h3 className="text-xl font-bold">Feature 1</h3>
                            <p className="text-base text-gray-300">Description of feature 1.</p>
                        </div>
                        <div className="flex flex-col items-center space-y-4">
                            <svg
                                className=" h-6 w-6 text-green-500"
                                fill="none"
                                height="24"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                width="24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <polyline points="20 6 9 17 4 12" />
                            </svg>
                            <h3 className="text-xl font-bold">Feature 2</h3>
                            <p className="text-base text-gray-300">Description of feature 2.</p>
                        </div>
                        <div className="flex flex-col items-center space-y-4">
                            <svg
                                className=" h-6 w-6 text-green-500"
                                fill="none"
                                height="24"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                width="24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <polyline points="20 6 9 17 4 12" />
                            </svg>
                            <h3 className="text-xl font-bold">Feature 3</h3>
                            <p className="text-base text-gray-300">Description of feature 3.</p>
                        </div>
                    </div>
                    <div className="flex justify-center mt-40"/>
                    <div className="container space-y-4 px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
                                Get in Touch
                            </h2>
                            <p className="max-w-[900px] text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                Have any questions? We'd love to hear from you.
                            </p>    
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

