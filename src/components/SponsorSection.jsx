import React from 'react';

import title1 from '../assets/sponsors/SonaliJewellersGujaratTitleSp1.jpg';
import gold1 from '../assets/sponsors/JayanNaikerRealtorGoldSp1.jpg';
import gold2 from '../assets/sponsors/KirtiKumarSoniAccountantGoldSp2.jpg';
import silver1 from '../assets/sponsors/MitalPatelRealtorSilverSp1.jpg';
import silver2 from '../assets/sponsors/DarshanNashitSilverSp2.jpg';
import silver3 from '../assets/sponsors/iSourceSilverSp3.jpg';

// Updated sponsor arrays with name + image
const titleSponsors = [
  { name: 'Sonali Jewellers', image: title1 },
];

const goldSponsors = [
  { name: 'Jayan Naiker - Realtor', image: gold1 },
  { name: 'Kirti Kumar Soni - Accountant', image: gold2 },
];

const silverSponsors = [
  { name: 'Mital Patel - Realtor', image: silver1 },
  { name: 'Darshan Nashit', image: silver2 },
  { name: 'Jainish Parmar - Optician', image: silver3 },
];

const SponsorGroup = ({ title, sponsors, imageClass }) => (
  <div className="mb-16">
    <h3 className="text-2xl sm:text-3xl font-bold text-center text-brand mb-8 underline decoration-yellow-500 underline-offset-4">
      {title}
    </h3>
    <div className="flex flex-wrap justify-center gap-6 px-4">
      {sponsors.map((sponsor, index) => (
        <div
          key={index}
          className="transition-transform hover:scale-105 duration-300 text-center max-w-[240px]"
        >
          <img
            src={sponsor.image}
            alt={`${sponsor.name}`}
            className={`rounded-xl shadow-md ${imageClass}`}
          />
          <p className="mt-2 text-sm sm:text-base font-medium text-gray-700">
            {sponsor.name}
          </p>
        </div>
      ))}
    </div>
  </div>
);

export default function SponsorsSection() {
  return (
    <section className="bg-[#fff8f1] py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-brand mb-16">
          Our Valued Sponsors
        </h2>

        <SponsorGroup
          title="Title Sponsor"
          sponsors={titleSponsors}
          imageClass="h-auto w-full max-w-[280px] sm:max-w-[320px] object-contain"
        />

        <SponsorGroup
          title="Gold Sponsors"
          sponsors={goldSponsors}
          imageClass="h-auto w-full max-w-[240px] sm:max-w-[280px] object-contain"
        />

        <SponsorGroup
          title="Silver Sponsors"
          sponsors={silverSponsors}
          imageClass="h-auto w-full max-w-[200px] sm:max-w-[240px] object-contain"
        />
      </div>
    </section>
  );
}
