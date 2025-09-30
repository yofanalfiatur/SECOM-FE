'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { notFound } from 'next/navigation';

export default function NewsDetailPage({ params }) {
   //  const t = useTranslations();
   //  const newsList = t.raw('NewsSingle');

   //  const news = newsList.find((item) => item.slug === params.id);

   //  if (!news) {
   //     notFound();
   //  }

   return (
      <>
         <section className="d-news flex flex-col">
            <div className="d-news__meta border-b border-[#13223320] uppercase py-5 ">
               <div className="container mx-auto flex flex-row gap-2 items-center xl:w-[71%] md:text-lg text-sm">
                  <p>Category</p>|<p>17 june 2025</p>
               </div>
            </div>
            <div className="container mx-auto xl:w-[71%]">
               <div className="d-news__content pb-10">
                  <h1 className="d-news__title font-semibold my-5 md:text-4xl text-3xl">
                     Heading 1 : Cum sociis natoque penatibus et magnis dis parturient.
                  </h1>
                  <Image
                     src="/img/temp/solutions/sol-bg-2x.jpg"
                     width={1000}
                     height={558}
                     alt="news"
                     className="w-full lg:h-[588px] md:h-[380px] object-cover mb-5 h-news__featured"
                  />
                  <div className="d-news__detail text-lg mb-5">
                     <p>
                        Cum sociis natoque penatibus et magnis dis parturient. Quo usque tandem
                        abutere, Catilina, patientia nostra? Tityre, tu patulae recubans sub tegmine
                        fagi dolor. Gallia est omnis divisa in partes tres, quarum. Quis aute iure
                        reprehenderit in voluptate velit esse. Cum sociis natoque penatibus et
                        magnis dis parturient. Quo usque tandem abutere, Catilina, patientia nostra?
                        Tityre, tu patulae recubans sub tegmine fagi dolor. Gallia est omnis divisa
                        in partes tres, quarum. Quis aute iure reprehenderit in voluptate velit
                        esse.
                     </p>
                     <br></br>
                     <h2>Heading 2</h2>
                     <p>
                        Cum sociis natoque penatibus et magnis dis parturient. Quo usque tandem
                        abutere, Catilina, patientia nostra? Tityre, tu patulae recubans sub tegmine
                        fagi dolor. Gallia est omnis divisa in partes tres, quarum. Quis aute iure
                        reprehenderit in voluptate velit esse.
                        <br></br>Cum sociis natoque penatibus et magnis dis parturient. Quo usque
                        tandem abutere, Catilina, patientia nostra? Tityre, tu patulae recubans sub
                        tegmine fagi dolor. Gallia est omnis divisa in partes tres, quarum. Quis
                        aute iure reprehenderit in voluptate velit esse.
                     </p>
                     <br></br>
                     <ul>
                        <li>Me non paenitet nullum festiviorem excogitasse ad hoc.</li>
                        <li>Quis aute iure reprehenderit in voluptate velit esse.</li>
                        <li>Quo usque tandem abutere, Catilina, patientia nostra?</li>
                     </ul>
                     <br></br>
                     <ol>
                        <li>Me non paenitet nullum festiviorem excogitasse ad hoc.</li>
                        <ul>
                           <li>Fabio vel iudice vincam, sunt in culpa qui officia.</li>
                           <ol>
                              <li>Vivamus sagittis lacus vel augue laoreet rutrum faucibus.</li>
                              <li>
                                 Gallia est omnis divisa in partes tres, quarum. Ut enim ad minim
                                 veniam, quis nostrud exercitation. Excepteur sint obcaecat
                                 cupiditat non proident culpa.
                              </li>
                           </ol>
                           <li>Quo usque tandem abutere, Catilina, patientia nostra?</li>
                        </ul>
                        <li>Me non paenitet nullum festiviorem excogitasse ad hoc.</li>
                        <ul>
                           <li>Gallia est omnis divisa in partes tres, quarum.</li>
                        </ul>
                     </ol>
                     <br></br>
                     <h3>Heading 3 : Tityre, tu patulae recubans sub tegmine fagi dolor.</h3>
                     <Image
                        src="/img/temp/solutions/sol-bg-2x.jpg"
                        width={1000}
                        height={258}
                        alt="news"
                        className="center"
                     />
                     <p>
                        Cum sociis natoque penatibus et magnis dis parturient. Quo usque tandem
                        abutere, Catilina, patientia nostra? Tityre, tu patulae recubans sub tegmine
                        fagi dolor. Gallia est omnis divisa in partes tres, quarum. Quis aute iure
                        reprehenderit in voluptate velit esse.Cum sociis natoque penatibus et magnis
                        dis parturient. Quo usque tandem abutere, Catilina, patientia nostra?
                        Tityre, tu patulae recubans sub tegmine fagi dolor.{' '}
                     </p>
                     <br></br>
                     <h4>Heading 4 : Tityre, tu patulae recubans sub tegmine fagi dolor.</h4>
                     <blockquote>
                        <p>
                           Pellentesque habitant morbi tristique senectus et netus. Tityre, tu
                           patulae recubans sub tegmine fagi dolor.
                        </p>
                     </blockquote>
                     <br></br>
                     <h5>Heading 5 : Tityre, tu patulae recubans sub tegmine fagi dolor.</h5>
                     <p>
                        Cum sociis natoque penatibus et magnis dis parturient. Quo usque tandem
                        abutere, Catilina, patientia nostra? Tityre, tu patulae recubans sub tegmine
                        fagi dolor. Gallia est omnis divisa in partes tres, quarum. Quis aute iure
                        reprehenderit in voluptate velit esse. Cum sociis natoque penatibus et
                        magnis dis parturient. Quo usque tandem abutere, Catilina, patientia nostra?
                        Tityre, tu patulae recubans sub tegmine fagi dolor. Gallia est omnis divisa.
                     </p>
                  </div>
               </div>
            </div>
         </section>
         <section className="d-news__related">
            <div className="border-t border-b border-[#13223320] py-4 w-full flex items-center justify-center">
               <div className="container">
                  <h2 className="font-semibold font-darkblue text-center uppercase">
                     Related Articles
                  </h2>
               </div>
            </div>
            <div className="flex flex-col items-center justify-center">
               <div className="d-news__list grid lg:grid-cols-3">
                  <div className="d-news__item relative lg:p-16 md:p-10 p-7 flex flex-col gap-3">
                     <div className="meta flex flex-row gap-2 items-center uppercase md:text-base text-xs">
                        <p>Category</p> | <p>17 june 2025</p>
                     </div>
                     <h3 className="md:text-3xl text-2xl font-medium font-raleway leading-snug text-darkblue">
                        Me non paenitet nullum festiviorem excogitasse ad hoc.
                     </h3>
                  </div>
                  <div className="d-news__item relative lg:p-16 md:p-10 p-7 flex flex-col gap-3">
                     <div className="meta flex flex-row gap-2 items-center uppercase md:text-base text-xs">
                        <p>Category</p> | <p>17 june 2025</p>
                     </div>
                     <h3 className="md:text-3xl text-2xl font-medium font-raleway leading-snug text-darkblue">
                        Me non paenitet nullum festiviorem excogitasse ad hoc.
                     </h3>
                  </div>
                  <div className="d-news__item relative lg:p-16 md:p-10 p-7 flex flex-col gap-3">
                     <div className="meta flex flex-row gap-2 items-center uppercase md:text-base text-xs">
                        <p>Category</p> | <p>17 june 2025</p>
                     </div>
                     <h3 className="md:text-3xl text-2xl font-medium font-raleway leading-snug text-darkblue">
                        Me non paenitet nullum festiviorem excogitasse ad hoc.
                     </h3>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
}
