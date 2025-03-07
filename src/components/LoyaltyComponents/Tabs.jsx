import React from 'react'
import { Sparkles,  ChevronDown, Check, Clock, MapPin, Mail, Gift , Users, Award,} from "lucide-react"
import { faqs ,  loyaltyTiers } from './LoyaltyData'
import {motion} from "framer-motion"
const Tabs = ({setActiveTab , activeTab , staggerContainer , itemAnimation, toggleFaq , expandedFaq, setExpandedFaq}) => {
  return (
    <div>
       <div className="mb-12">
          <div className="flex flex-wrap border-b border-gray-200 mb-8">
            <button 
              onClick={() => setActiveTab('benefits')}
              className={`py-3 px-6 font-medium text-lg mr-4 border-b-2 transition-colors duration-300 ${activeTab === 'benefits' ? 'border-[#c4a053] text-[#c4a053]' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
            >
              Program Benefits
            </button>
            <button 
              onClick={() => setActiveTab('tiers')}
              className={`py-3 px-6 font-medium text-lg mr-4 border-b-2 transition-colors duration-300 ${activeTab === 'tiers' ? 'border-[#c4a053] text-[#c4a053]' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
            >
              Membership Tiers
            </button>
            <button 
              onClick={() => setActiveTab('how')}
              className={`py-3 px-6 font-medium text-lg mr-4 border-b-2 transition-colors duration-300 ${activeTab === 'how' ? 'border-[#c4a053] text-[#c4a053]' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
            >
              How It Works
            </button>
            <button 
              onClick={() => setActiveTab('faq')}
              className={`py-3 px-6 font-medium text-lg border-b-2 transition-colors duration-300 ${activeTab === 'faq' ? 'border-[#c4a053] text-[#c4a053]' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
            >
              FAQs
            </button>
          </div>
          
          {/* Tab Content */}
          <div>
            {/* Benefits Tab */}
            {activeTab === 'benefits' && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl font-bold mb-8 text-gray-800">Experience Exclusive Benefits</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <motion.div 
                    className="bg-white p-6 rounded-lg shadow-md"
                    whileHover={{ y: -5 }}
                  >
                    <Sparkles className="h-10 w-10 text-[#c4a053] mb-4" />
                    <h3 className="text-xl font-semibold mb-3">Earn Points Fast</h3>
                    <p className="text-gray-600">Earn 10 points for every £1 spent on accommodations and 5 points on dining and spa services. Points can be redeemed for free nights, room upgrades, and exclusive experiences.</p>
                  </motion.div>
                  
                  <motion.div 
                    className="bg-white p-6 rounded-lg shadow-md"
                    whileHover={{ y: -5 }}
                  >
                    <Clock className="h-10 w-10 text-[#c4a053] mb-4" />
                    <h3 className="text-xl font-semibold mb-3">Priority Access</h3>
                    <p className="text-gray-600">Enjoy priority check-in and check-out, early access to seasonal promotions, and preferential reservations at our acclaimed restaurants and spa.</p>
                  </motion.div>
                  
                  <motion.div 
                    className="bg-white p-6 rounded-lg shadow-md"
                    whileHover={{ y: -5 }}
                  >
                    <Gift className="h-10 w-10 text-[#c4a053] mb-4" />
                    <h3 className="text-xl font-semibold mb-3">Exclusive Offers</h3>
                    <p className="text-gray-600">Receive member-only rates, seasonal promotions, and special offers delivered straight to your inbox. Plus, enjoy birthday surprises during your birthday month.</p>
                  </motion.div>
                  
                  <motion.div 
                    className="bg-white p-6 rounded-lg shadow-md"
                    whileHover={{ y: -5 }}
                  >
                    <MapPin className="h-10 w-10 text-[#c4a053] mb-4" />
                    <h3 className="text-xl font-semibold mb-3">Room Preferences</h3>
                    <p className="text-gray-600">We'll remember your preferences to personalize every stay. From pillow type to room temperature, we ensure your comfort every time you visit.</p>
                  </motion.div>
                  
                  <motion.div 
                    className="bg-white p-6 rounded-lg shadow-md"
                    whileHover={{ y: -5 }}
                  >
                    <Award className="h-10 w-10 text-[#c4a053] mb-4" />
                    <h3 className="text-xl font-semibold mb-3">Tier Benefits</h3>
                    <p className="text-gray-600">Progress through our membership tiers to unlock elevated benefits including room upgrades, late check-out, welcome amenities, and more.</p>
                  </motion.div>
                  
                  <motion.div 
                    className="bg-white p-6 rounded-lg shadow-md"
                    whileHover={{ y: -5 }}
                  >
                    <Mail className="h-10 w-10 text-[#c4a053] mb-4" />
                    <h3 className="text-xl font-semibold mb-3">Personalized Communication</h3>
                    <p className="text-gray-600">Stay informed with customized communications about offers that match your preferences and travel patterns.</p>
                  </motion.div>
                </div>
              </motion.div>
            )}
            
            {/* Tiers Tab */}
            {activeTab === 'tiers' && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl font-bold mb-8 text-gray-800">Membership Tiers & Benefits</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {loyaltyTiers.map((tier, index) => (
                    <motion.div 
                      key={tier.name}
                      className={`rounded-lg shadow-md overflow-hidden ${index === 2 ? 'bg-gradient-to-br from-[#c4a053] to-[#c4a053] border border-[#c4a053]' : 'bg-white'}`}
                      whileHover={{ y: -8 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className={`p-6 ${index === 2 ? 'bg-[#c4a053]' : index === 1 ? 'bg-[#c4a053]' : 'bg-black text-white'} text-white`}>
                        <h3 className="text-2xl font-bold mb-1 text-white">{tier.name}</h3>
                        <p className="opacity-90">{tier.nights}</p>
                      </div>
                      <div className="p-6">
                        <ul className="space-y-3">
                          {tier.benefits.map((benefit, i) => (
                            <li key={i} className="flex items-start">
                              <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                        <motion.button 
                          className={`mt-6 w-full rounded-full py-3 font-medium transition duration-300 ${
                            index === 2 ? 'bg-white text-black hover:bg-[#c4a053]' : 
                            index === 1 ? 'bg-[#c4a053] text-white hover:bg-[#c4a053]' : 
                            'bg-gray-700 text-white hover:bg-gray-800'
                          }`}
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          Join Now
                        </motion.button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
            
            {/* How It Works Tab */}
            {activeTab === 'how' && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl font-bold mb-8 text-gray-800">How The Loyalty Program Works</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                  <div>
                    <img 
                      src="https://images.unsplash.com/photo-1551816230-ef5d4db09385?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" 
                      alt="Guest receiving loyalty benefits" 
                      className="rounded-lg shadow-md w-full h-64 object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-4">Simple Steps to Rewarding Stays</h3>
                    <motion.div 
                      variants={staggerContainer}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    >
                      <motion.div variants={itemAnimation} className="flex mb-4">
                        <div className="bg-[#c4a053] h-8 w-8 rounded-full flex items-center justify-center text-[#c4a053] font-bold flex-shrink-0 mr-4">1</div>
                        <div>
                          <h4 className="font-semibold text-lg">Join for Free</h4>
                          <p className="text-gray-600">Sign up online or at the front desk during your next stay. Instantly become a Silver member.</p>
                        </div>
                      </motion.div>
                      
                      <motion.div variants={itemAnimation} className="flex mb-4">
                        <div className="bg-[#c4a053] h-8 w-8 rounded-full flex items-center justify-center text-[#c4a053] font-bold flex-shrink-0 mr-4">2</div>
                        <div>
                          <h4 className="font-semibold text-lg">Earn Points</h4>
                          <p className="text-gray-600">Earn 10 points for every £1 spent on room charges and 5 points per £1 on dining and spa.</p>
                        </div>
                      </motion.div>
                      
                      <motion.div variants={itemAnimation} className="flex mb-4">
                        <div className="bg-[#c4a053] h-8 w-8 rounded-full flex items-center justify-center text-[#c4a053] font-bold flex-shrink-0 mr-4">3</div>
                        <div>
                          <h4 className="font-semibold text-lg">Climb the Tiers</h4>
                          <p className="text-gray-600">Stay more to advance from Silver to Gold to Platinum and unlock enhanced benefits.</p>
                        </div>
                      </motion.div>
                      
                      <motion.div variants={itemAnimation} className="flex">
                        <div className="bg-[#c4a053] h-8 w-8 rounded-full flex items-center justify-center text-[#c4a053] font-bold flex-shrink-0 mr-4">4</div>
                        <div>
                          <h4 className="font-semibold text-lg">Redeem Rewards</h4>
                          <p className="text-gray-600">Use your points for free nights, room upgrades, dining, spa services, or exclusive experiences.</p>
                        </div>
                      </motion.div>
                    </motion.div>
                  </div>
                </div>
                
                <div className="bg-[#c4a053] rounded-lg p-8 border border-[#c4a053]">
                  <h3 className="text-2xl font-semibold mb-6 text-[#c4a053]">Point Redemption Guide</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white p-5 rounded-lg shadow-sm">
                      <h4 className="font-semibold text-lg mb-3">Room Rewards</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• 25,000 points = Free night (standard room)</li>
                        <li>• 10,000 points = Room upgrade</li>
                        <li>• 5,000 points = Late check-out (4pm)</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white p-5 rounded-lg shadow-sm">
                      <h4 className="font-semibold text-lg mb-3">Dining Rewards</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• 5,000 points = £25 dining credit</li>
                        <li>• 10,000 points = £50 dining credit</li>
                        <li>• 20,000 points = Private dining experience</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white p-5 rounded-lg shadow-sm">
                      <h4 className="font-semibold text-lg mb-3">Experiences</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• 15,000 points = Spa treatment</li>
                        <li>• 30,000 points = Local excursion</li>
                        <li>• 50,000 points = Special event access</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
            
            {/* FAQ Tab */}
            {activeTab === 'faq' && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl font-bold mb-8 text-gray-800">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <motion.div 
                      key={index}
                      className="border border-gray-200 rounded-lg overflow-hidden"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <button 
                        className="flex justify-between items-center w-full p-5 text-left bg-white hover:bg-gray-50 transition-colors duration-200"
                        onClick={() => toggleFaq(index)}
                      >
                        <span className="font-medium text-lg">{faq.question}</span>
                        <ChevronDown className={`h-5 w-5 text-gray-500 transition-transform duration-200 ${expandedFaq === index ? 'transform rotate-180' : ''}`} />
                      </button>
                      <motion.div 
                        initial={false}
                        animate={{ 
                          height: expandedFaq === index ? 'auto' : 0,
                          opacity: expandedFaq === index ? 1 : 0
                        }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="p-5 bg-gray-50 border-t border-gray-200">
                          <p className="text-gray-700">{faq.answer}</p>
                        </div>
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </div>
    </div>
  )
}

export default Tabs
