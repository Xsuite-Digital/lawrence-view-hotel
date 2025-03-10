import { motion } from 'framer-motion';
import OffersHero from '../components/OFFERSCOMPONENT/OffersHero';
import SpecialOffers from '../components/OFFERSCOMPONENT/SpecialOffers';
import SeasonalPromotions from '../components/OFFERSCOMPONENT/SeasonalPromotions';
// import CorporatePackages from '../components/OFFERSCOMPONENT/CorporatePackages';

const Offers = () => {
  return (
    <div className="bg-white min-h-screen">
      <OffersHero />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4 py-12"
      >
        <SpecialOffers />
        <SeasonalPromotions />
        {/* <CorporatePackages /> */}
      </motion.div>
    </div>
  );
};

export default Offers;