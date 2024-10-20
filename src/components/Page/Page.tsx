import { forwardRef } from 'react';
import './Page.css';

interface PageProps {
    number: number;
    name: string;
    horseDetails: {
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
    };
  }
  
  const Page = forwardRef<HTMLDivElement, PageProps>(({ name, horseDetails }, ref) => {
    return (
      <div className="page" ref={ref}>
        <div className="page-content">
          <h2 className="page-header">{name}</h2>
          <div className='page-tophalf'>
            <div className='page-sideinfo'>
                    <p><b>Born</b>: {horseDetails.born}</p>
                    <p><b>Breed</b>: {horseDetails.breed}</p>
                    <p><b>Height</b>: {horseDetails.height}</p>
                    <p><b>Color</b>: {horseDetails.color}</p>
                    <p><b>Owner</b>: {horseDetails.owner}</p>
                    <p><b>Breeder</b>: {horseDetails.breeder}</p>
                    <a href={horseDetails.link}>More information</a>
                </div>
                <div className='horse-image-by'>
                    <img src={horseDetails.picture} alt={name} className="horse-image" />
                    <p>{horseDetails.photoby}</p>
                </div>            
            </div>
          <div className="page-bottomhalf">
            <h3>
              {horseDetails.placing.map((place, index) => (
                <span key={index}>
                  {place}
                  <br />
                </span>
              ))}
            </h3>
            <div className='page-pedigree'>
                <div className='pedigree-first'>{horseDetails.pedigree[0]}</div>
                <div className='pedigree-second'>{horseDetails.pedigree[2]}</div>
                <div className='pedigree-third'>{horseDetails.pedigree[6]}</div>
                <div className='pedigree-third'>{horseDetails.pedigree[7]}</div>
                <div className='pedigree-second'>{horseDetails.pedigree[3]}</div>
                <div className='pedigree-third'>{horseDetails.pedigree[8]}</div>
                <div className='pedigree-third'>{horseDetails.pedigree[9]}</div>
                <div className='pedigree-first'>{horseDetails.pedigree[1]}</div>
                <div className='pedigree-second'>{horseDetails.pedigree[4]}</div>
                <div className='pedigree-third'>{horseDetails.pedigree[10]}</div>
                <div className='pedigree-third'>{horseDetails.pedigree[11]}</div>
                <div className='pedigree-second'>{horseDetails.pedigree[5]}</div>
                <div className='pedigree-third'>{horseDetails.pedigree[12]}</div>
                <div className='pedigree-third'>{horseDetails.pedigree[13]}</div>
            </div>
            <p className='page-contact'>Contact: {horseDetails.contact}</p>
          </div>
        </div>
      </div>
    );
  });

export default Page;