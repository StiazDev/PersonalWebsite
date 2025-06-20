import React from "react";
import BookCard from "./Components/BookCard";

function page() {
  return (
    <div className="flex flex-col px-[7.5rem] py-20 justify-center place-items-center gap-12 h-[70vh]">
      <h1 className="font-bold text-4xl">
        I haven't picked the best of the best in my collections yet, I will recommend really soon :)
      </h1>
      <div className="grid grid-cols-5 gap-8">
        <BookCard
          bookCover="https://m.media-amazon.com/images/I/51VFkbM2siL._SY466_.jpg"
          bookTitle="The Almanack of Naval Ravikant"
          bookURL="https://www.amazon.com/gp/product/1544514212/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=ericjorg-20&creative=9325&linkCode=as2&creativeASIN=1544514212&linkId=03fd8dbbeeecddf507f4f6a20312f00a"
        />
        <BookCard
          bookCover="https://m.media-amazon.com/images/I/51BP8E6JfEL._SY466_.jpg"
          bookTitle="Giftology"
          bookURL="https://www.amazon.com/dp/1732095604/?bestFormat=true&k=giftology&ref_=nb_sb_ss_w_scx-ent-pd-bk-d_de_k0_1_9&crid=8IDEPZM59405&sprefix=giftology"
        />
        <BookCard
          bookCover="https://m.media-amazon.com/images/I/513UNgv+ObL._SY425_.jpg"
          bookTitle="The Dip"
          bookURL="https://www.amazon.com/Dip-Little-Book-Teaches-Stick/dp/1591841666"
        />
        <BookCard
          bookCover="https://m.media-amazon.com/images/I/91ohMeweS6L._SY466_.jpg"
          bookTitle="The Art of Persuasion"
          bookURL="https://www.amazon.com/Art-Persuasion-Winning-Without-Intimidation/dp/0768413001/ref=sr_1_1?crid=38EFXITWII2LW&dib=eyJ2IjoiMSJ9.zzMlBtbyGqecieDVQe8TOJbvetyEA_UMSCTa9V5r80EB-liCBAF0GzjASerEmaGITyH9RaezeOH8-jXM5KSpkkZ49zZCYT0_m28Ne_feXTljUYn8cvbe9adl_w3wZvQPXLWLWDK5Gefq2B4AxuweWG1_VeROYHK7zkwx6OEHwO9HjGMkanjEUsyQmLAPZpCvTeKVdZuNhlteYgxWAdPrOs8Lk2q2oGoqaSfQjAupEqg.L6CU7oy3auPqS5cJR6_Nf6eULSmqYjN2hEhFbnf0kGQ&dib_tag=se&keywords=the+art+of+persuasion+winning+without&qid=1750435293&s=books&sprefix=the+art+of+persuation+winning+without+%2Cstripbooks-intl-ship%2C332&sr=1-1"
        />
        <BookCard
          bookCover="https://m.media-amazon.com/images/I/51HqycCxMRL._SY445_SX342_.jpg"
          bookTitle="Think and Grow Rich"
          bookURL="https://www.amazon.com/Think-Grow-Rich-Landmark-Bestseller/dp/1585424331/ref=sr_1_1?dib=eyJ2IjoiMSJ9.g6HxGbWNrXYJ1W09RvSZ_AX09Q_yZ3mrdmCv4rHiXS9CNWFsClj2z3sxwL6JlmOHwVsnvEtEgSD64Nb27SrA7f2iXdeMFK95kIwQD9L-CHlDui_1mPP7aI0eV7jETqo3iqHOrNRCHjtTc0UxMmP4qYQ5T-qbVC-RlYi49oevs_O_2L2TeKi0U7mnVs_CcOA-I45lvlsl2HHdEPQUcNcAE-R4X_pUmtTg-AbmZYoANI8.FLu0OGuwz3WgSB0JLldv7K_9IWARi8HKSNHLGj90jCI&dib_tag=se&keywords=think+%26+grow+rich&qid=1750435108&s=books&sr=1-1"
        />
      </div>
    </div>
  );
}

export default page;
