import baby from '../../assets/images/toys.png'
import headerBG from '../../assets/images/hero-bg.jpg'
import client1 from '../../assets/images/client/01.jpg'
import client2 from '../../assets/images/client/02.jpg'
import client3 from '../../assets/images/client/03.jpg'

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './Home.css'
import { useEffect, useState } from 'react';
import ToyCard from './ToyCard';
const Home = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://kids-zone-server-beta.vercel.app/toys')
            .then(res => res.json())
            .then(data => setProducts(data))
            .catch(error => console.log(error))
    }, [])

    console.log(products)

    // console.log(products)
    // Filtering COW
    const cows = products.filter(toy => toy.category == "cows")


    // Filtering COW
    const dinosours = products.filter(toy => toy.category == "dinosours")


    // Filtering COW
    const dogs = products.filter(toy => toy.category == "dogs")


    // Filtering COW
    const horses = products.filter(toy => toy.category == "horses")


    // Filtering COW
    const teddys = products.filter(toy => toy.category == "teddy")


    // Filtering COW
    const unicorns = products.filter(toy => toy.category == "unicorns")

    // For The Gallary
    const gallary = products.slice(0, 12)


    return (
        <>
            <section className="home-wrapper py-32" style={{ background: `url(${headerBG}) no-repeat scroll center center / cover` }}>
                <div className="container">
                    <div className="banner-wrap lg:flex lg:items-center lg:justify-between">
                        <div className="text-wrap text-center md:text-left">
                            <h5 className='text-pink-100 text-xl md:text-2xl font-bold mb-5'>Get the</h5>
                            <h1 className="text-4xl md:text-7xl font-extrabold leading-tight">Best Animals <span className='text-blue'>Toys</span> <br /> In The <span className='text-pink-100'>Market</span></h1>
                            <button className="btn py-5 px-12 text-lg leading-none h-auto mt-8 bg-pink-100 border-2 border-pink-100 hover:bg-pink-200 hover:border-pink-200">Shop Now</button>
                        </div>
                        <div className="img-wrap">
                            <img src={baby} alt="" className='lg:w-[800px] mx-auto ' />
                        </div>
                    </div>
                </div>
            </section>


            <section className='category py-20'>
                <div className="container">
                    <div className="section-title text-center mb-10">
                        <h5 className='text-pink-100 font-bold text-xl mb-3'>Our Best Pick</h5>
                        <h1 className='text-4xl font-extrabold'>Shop By <span className='text-blue'>Categories</span></h1>
                    </div>
                    <div className="tabs-wrap">
                        <Tabs>
                            <TabList className='react-tabs__tab-list grid grid-col-1 gap-6 md:gap-0 md:grid-cols-6 items-center'>
                                <Tab className='text-center font-bold text-2xl py-5 px-5 h-auto'>Cows</Tab>
                                <Tab className='text-center font-bold text-2xl py-5 px-5 h-auto'>Dinosours</Tab>
                                <Tab className='text-center font-bold text-2xl py-5 px-5 h-auto'>Dogs</Tab>
                                <Tab className='text-center font-bold text-2xl py-5 px-5 h-auto'>Horses</Tab>
                                <Tab className='text-center font-bold text-2xl py-5 px-5 h-auto'>Teddy Bears</Tab>
                                <Tab className='text-center font-bold text-2xl py-5 px-5 h-auto'>Unicorns</Tab>
                            </TabList>

                            <TabPanel>
                                <div className="toyCard_wrap lg:grid lg:grid-cols-3 gap-8">
                                    {
                                        cows.map(cow => <ToyCard toy={cow} key={cow._id}></ToyCard>)
                                    }
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="toyCard_wrap lg:grid lg:grid-cols-3 gap-8">
                                    {
                                        dinosours.map(dinos => <ToyCard toy={dinos} key={dinos._id}></ToyCard>)
                                    }
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="toyCard_wrap lg:grid lg:grid-cols-3 gap-8">
                                    {
                                        dogs.map(dog => <ToyCard toy={dog} key={dog._id}></ToyCard>)
                                    }
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="toyCard_wrap lg:grid lg:grid-cols-3 gap-8">
                                    {
                                        horses.map(hors => <ToyCard toy={hors} key={hors._id}></ToyCard>)
                                    }
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="toyCard_wrap lg:grid lg:grid-cols-3 gap-8">
                                    {
                                        teddys.map(teddy => <ToyCard toy={teddy} key={teddy._id}></ToyCard>)
                                    }
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="toyCard_wrap lg:grid lg:grid-cols-3 gap-8">
                                    {
                                        unicorns.map(unicorn => <ToyCard toy={unicorn} key={unicorn._id}></ToyCard>)
                                    }
                                </div>
                            </TabPanel>

                        </Tabs>
                    </div>
                </div>
            </section>


            <section className="testimonial pb-20"
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-delay="100"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
                data-aos-anchor-placement="top-center"
            >
                <div className="container">
                    <div className="section-title text-center mb-10">
                        <h5 className='text-pink-100 font-bold text-xl mb-3'>Love for all</h5>
                        <h1 className='text-4xl font-extrabold'>{`Client's`} <span className='text-blue'>Speech</span></h1>
                    </div>
                    <div className="testi-wrap grid lg:grid-cols-3 text-center gap-8">
                        <div className="testi border border-neutral-100 shadow-lg rounded-md p-10 hover:shadow-xl transition-all">
                            <h2 className='capitalize font-bold italic text-2xl mb-5'>Awesome Collection</h2>
                            <p>Kid Zones has the most attractive collection of toy. I have been buying toys from here for my children.</p>
                            <img src={client1} alt="" className='w-28 mx-auto my-5 rounded-full border border-neutral-400 hover:border-pink-100' />
                            <h5 className='font-bold uppercase'>Shanta Islam</h5>
                        </div>
                        <div className="testi border border-neutral-100 shadow-lg rounded-md p-10 hover:shadow-xl transition-all">
                            <h2 className='capitalize font-bold italic text-2xl mb-5'>Loved Places</h2>
                            <p>I have two children and both of them love the shop for their toys. Best places for quality toys</p>
                            <img src={client2} alt="" className='w-28 mx-auto my-5 rounded-full border border-neutral-400 hover:border-pink-100' />
                            <h5 className='font-bold uppercase'>Abdullah Naim</h5>
                        </div>
                        <div className="testi border border-neutral-100 shadow-lg rounded-md p-10 hover:shadow-xl transition-all">
                            <h2 className='capitalize font-bold italic text-2xl mb-5'>Best of Best</h2>
                            <p>Best for low price and quality. If you looking something for new, low price and best quality it is for you.</p>
                            <img src={client3} alt="" className='w-28 mx-auto my-5 rounded-full border border-neutral-400 hover:border-pink-100' />
                            <h5 className='font-bold uppercase'>Shamima Sumi</h5>
                        </div>
                    </div>
                </div>
            </section>

            <section className='gallary-area pb-20'

                data-aos="fade-right"
                data-aos-offset="200"
                data-aos-delay="100"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
                data-aos-anchor-placement="top-center"

            >
                <div className="container">
                    <div className="section-title text-center mb-10">
                        <h5 className='text-pink-100 font-bold text-xl mb-3'>For the Best</h5>
                        <h1 className='text-4xl font-extrabold'>Awesome <span className='text-blue'>Gallaries</span></h1>
                    </div>
                    <div className="gallary grid md:grid-cols-3 lg:grid-cols-4 gap-10">
                        {
                            gallary.map(p => <img src={p.picture} alt="" key={p._id} className='border border-neutral-300 rounded-lg' />)
                        }
                    </div>
                </div>
            </section>

            <section className="contact pb-20"
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-delay="100"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
                data-aos-anchor-placement="top-center"
            >
                <div className="container">
                    <div className="contact-box p-10 lg:p-32 bg-gray rounded-md">
                        <div className="section-title text-center mb-10">
                            <h5 className='text-pink-100 font-bold text-xl mb-3'>Get in Touch</h5>
                            <h1 className='text-4xl font-extrabold'>Contact <span className='text-blue'>Us</span></h1>
                        </div>
                        <div className="contact-wrap">
                            <form>
                                <div className="field mb-4">
                                    <input type="text" placeholder='Your Name' className='w-full border border-neutral-300 py-3 px-4 rounded-md text-lg focus:outline-none hover:border-neutral-500 focus:border-pink-100 transition-all placeholder:text-neutral-500 text-black' />
                                </div>
                                <div className="field mb-4">
                                    <input type="email" placeholder='Your email' className='w-full border border-neutral-300 py-3 px-4 rounded-md text-lg focus:outline-none hover:border-neutral-500 focus:border-pink-100 transition-all placeholder:text-neutral-500 text-black' />
                                </div>
                                <div className="field mb-4">
                                    <textarea name="" id="" cols="30" rows="5" placeholder='Your Message' className='w-full border border-neutral-300 py-3 px-4 rounded-md text-lg focus:outline-none hover:border-neutral-500 focus:border-pink-100 transition-all placeholder:text-neutral-500 text-black' ></textarea>
                                </div>
                                <input type="submit" value="Send Message" className='w-full btn py-3 px-5 font-bold text-base leading-none h-auto bg-pink-100 border-2 border-pink-100 hover:bg-pink-200 hover:border-pink-200' />
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <section className='promo-area pb-20'>
                <div className="container">
                    <div className="promo-wrap grid lg:grid-cols-4 gap-8">
                        <div className="promo flex gap-3 shadow-lg rounded-md p-8 hover:shadow-xl transition-all">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
                            </svg>
                            <div className="info">
                                <h3 className='font-bold text-xl'>Worldwide Delivery</h3>
                                <p>No Walls Only Love</p>
                            </div>
                        </div>
                        <div className="promo flex gap-3 shadow-lg rounded-md p-8 hover:shadow-xl transition-all">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                            </svg>

                            <div className="info">
                                <h3 className='font-bold text-xl'>Gift Voucher</h3>
                                <p>We Love Your Spirits</p>
                            </div>
                        </div>
                        <div className="promo flex gap-3 shadow-lg rounded-md p-8 hover:shadow-xl transition-all">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
                            </svg>


                            <div className="info">
                                <h3 className='font-bold text-xl'>24X7 Helpline</h3>
                                <p>We are live all time</p>
                            </div>
                        </div>
                        <div className="promo flex gap-3 shadow-lg rounded-md p-8 hover:shadow-xl transition-all">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
                            </svg>


                            <div className="info">
                                <h3 className='font-bold text-xl'>Great Saving</h3>
                                <p>Save money buy more</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>
    );
};

export default Home;