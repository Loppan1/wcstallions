import React from 'react';
import HTMLFlipBook from 'react-pageflip';
import hingstar from '../../assets/hingstar.json'
import Page from '../Page/Page';
import PageCover from '../PageCover/PageCover';
import './FlipBook.css';

interface Horse {
    name: string;
    born: string;
    breed: string;
    height: string;
    color: string;
    placing: string[];
    owner: string;
    breeder: string;
    pedigree: string[];
    picture: string;
    photoby: string;
    link: string;
    contact: string;
  }

const FlipBook: React.FC = () => {

    const pages: Horse[] = hingstar;

  return (
    // @ts-ignore
    <HTMLFlipBook
      width={600}
      height={800}
      minWidth={315}
      maxWidth={1000}
      minHeight={420}
      maxHeight={1350}
      maxShadowOpacity={0.5}
      showCover={true}
      mobileScrollSupport={false}
      startPage={0}
      size="fixed"
      className='flip-book'
    >
        <PageCover 
        title="ISC World Championship 2024"
        text="Stallions avaliable for breeding"
        />
      {pages.map((horse, index) => (
        <Page 
        key={index} 
        number={index + 1} 
        name={horse.name}           
        horseDetails={{
            born: horse.born,
            breed: horse.breed,
            height: horse.height,
            color: horse.color,
            placing: horse.placing,
            owner: horse.owner,
            breeder: horse.breeder,
            pedigree: horse.pedigree,
            picture: horse.picture,
            photoby: horse.photoby,
            link: horse.link,
            contact: horse.contact,
          }} />
      ))}
        <PageCover 
        title=""
        text=""
        />
    </HTMLFlipBook>
  );
};

export default FlipBook;