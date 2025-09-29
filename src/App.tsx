import { Heart, Bookmark, Search, Twitter, Facebook, Instagram, Github } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Navigation */}
      <header className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <div className="text-2xl font-bold italic text-gray-900">Blog</div>
              <div className="hidden md:flex items-center space-x-6">
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="What are you looking for?" 
                    className="w-80 px-4 py-2 border border-gray-300 rounded-full bg-gray-50 focus:outline-none focus:ring-2 focus:ring-pink-500"
                  />
                </div>
                <nav className="flex items-center space-x-6 text-sm text-gray-600">
                  <button className="flex items-center space-x-1 hover:text-gray-900">
                    <span>Shots</span>
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                  <button className="flex items-center space-x-1 hover:text-gray-900">
                    <span>Explore</span>
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                  <button className="flex items-center space-x-1 hover:text-gray-900">
                    <span>Find Talent</span>
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                  <button className="flex items-center space-x-1 hover:text-gray-900">
                    <span>Get Hired</span>
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                  <span className="hover:text-gray-900 cursor-pointer">Blog</span>
                </nav>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="bg-gray-900 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-800">
                Upgrade to Pro
              </button>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                <div className="w-8 h-8 bg-green-500 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Project Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 flex items-center justify-center">
            Wild Life Blog Page Website
          </h1>
          
          <div className="flex items-center justify-between max-w-4xl mx-auto">
            <div className="flex items-center space-x-4">
              <img 
                src="https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-1/548338314_806217328539732_3228641699885379937_n.jpg?stp=c0.0.864.864a_dst-jpg_s200x200_tt6&_nc_cat=106&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeE7cx0wleZWbm31wn0gsiDQOaq1pyvIAQY5qrWnK8gBBi1EAk7nXJIa4LDIzsIvewCSDhfaGAlsOQWXxwShhxaM&_nc_ohc=s351cEhpb-cQ7kNvwF5h2-V&_nc_oc=Adl261woTGFs8JYQIS6ksuBJkLV_5F4zhcT0wYZcpGS3fCGBNbWK9m2updIS89NH6ODYkvKhBwZ1l6-halmaXBY2&_nc_zt=24&_nc_ht=scontent-los2-1.xx&_nc_gid=Qiaj1tnz_f2MAtThU9lzOw&oh=00_AfY4Hvgd890qTNZR_yGOrhqB4Bgfieek5WNkro_mi6R0pg&oe=68E0229F" 
                alt="Dorian Zanoch"
                className="w-12 h-12 rounded-full"
              />
              <div className="text-left">
                <div className="flex items-center space-x-2">
                  <span className="font-semibold text-gray-900">Dorian Zanoch</span>
                  <span className="text-sm text-green-600 bg-green-50 px-2 py-1 rounded">Available for work</span>
                  <span className="text-sm text-gray-500">Following</span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-600 hover:text-gray-900">
                <Heart className="w-5 h-5" />
              </button>
               <button className="p-2 text-gray-600 hover:text-gray-900">
                <Bookmark className="w-5 h-5" />
              </button>
              <button className="bg-gray-900 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-800">
                Get in touch
              </button>
            </div>
          </div>
        </div>

        {/* Blog Content Preview */}
        <div className="bg-gray-100 rounded-lg p-8 mb-12">
          <div className="max-w-4xl mx-auto">
            {/* Browser Frame */}
            <div className="bg-gray-800 rounded-t-lg px-4 py-2 flex items-center space-x-2">
              <div className="flex space-x-1">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="flex-1 text-center">
                <span className="text-white text-sm">WILD Life Expeditions - Travel Wizard </span>
              </div>
              <span className="text-white text-sm"> www.adventurer.in</span>
            </div>

            {/* Website Content */}
            <div className="bg-white rounded-b-lg">
              {/* Navigation */}
              <nav className="border-b border-gray-200 py-4 px-8">
                <div className="flex items-center justify-center space-x-8 text-sm text-gray-600">
                  <span className="hover:text-gray-900 cursor-pointer">HOME</span>
                  <span className="hover:text-gray-900 cursor-pointer">HEALTH</span>
                  <span className="hover:text-gray-900 cursor-pointer">KNOWLEDGE</span>
                  <div className="text-center">
                    <div className="text-lg font-bold text-gray-900">WILD LIFE</div>
                    <div className="text-xs text-gray-500">EXPEDITIONS</div>
                  </div>
                  <span className="hover:text-gray-900 cursor-pointer">BOOKINGS</span>
                  <span className="hover:text-gray-900 cursor-pointer">LEGAL</span>
                  <span className="hover:text-gray-900 cursor-pointer">MORE</span>
                </div>
              </nav>

              {/* Blog Section */}
              <div className="p-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">Our Blog</h2>
                  <p className="text-gray-600">Join us on creative group and events experiences for live members</p>
                </div>

                {/* Search Bar */}
                <div className="flex justify-center mb-8">
                  <div className="flex items-center max-w-md w-full">
                    <div className="relative flex-1">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input 
                        type="text"
                        placeholder="Search blog"
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-l-full focus:outline-none focus:ring-2 focus:ring-green-500"
                      />
                    </div>
                    <button className="bg-green-500 text-white px-6 py-2 rounded-r-full text-sm font-medium hover:bg-green-600">
                      SEARCH
                    </button>
                  </div>
                </div>

                {/* Blog Content */}
                <div className="flex space-x-8">
                  {/* Main Content */}
                  <div className="flex-1">
                    <div className="grid grid-cols-2 gap-6">
                      {/* Featured Article */}
                      <div className="col-span-1">
                        <img 
                          src="https://images.pexels.com/photos/34042025/pexels-photo-34042025.jpeg"
                          alt="Zebra"
                          className="w-full h-48 object-cover rounded-lg mb-4"
                        />
                        <div className="text-xs text-gray-500 mb-2">4 FEBRUARY 25 FEB 2023</div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Meet the dog who can find rare sea turtle</h3>
                      </div>

                      {/* Side Articles */}
                      <div className="col-span-1 space-y-4">
                        <div className="flex space-x-4">
                          <img 
                            src="https://images.pexels.com/photos/3613420/pexels-photo-3613420.jpeg"
                            alt="Eagle"
                            className="w-20 h-16 object-cover rounded"
                          />
                          <div className="flex-1">
                            <div className="text-xs text-gray-500 mb-1">16 FEB 2023</div>
                            <h4 className="text-sm font-medium text-gray-900">Did humpbacks try to save a seal from orcas? See for yourself.</h4>
                          </div>
                        </div>

                        <div className="flex space-x-4">
                          <img 
                            src="https://images.pexels.com/photos/1109898/pexels-photo-1109898.jpeg"
                            alt="Seal"
                            className="w-20 h-16 object-cover rounded"
                          />
                          <div className="flex-1">
                            <div className="text-xs text-gray-500 mb-1">14 FEB 2023</div>
                            <h4 className="text-sm font-medium text-gray-900">New Ocean Life</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Sidebar */}
                  <div className="w-64 space-y-6">
                    {/* Topics */}
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3">Topic</h3>
                      <div className="space-y-2 text-sm text-gray-600">
                        <div className="hover:text-gray-900 cursor-pointer">Animals</div>
                        <div className="hover:text-gray-900 cursor-pointer">Environment</div>
                        <div className="hover:text-gray-900 cursor-pointer">History & Culture</div>
                        <div className="hover:text-gray-900 cursor-pointer">Science</div>
                        <div className="hover:text-gray-900 cursor-pointer">Travel</div>
                        <div className="hover:text-gray-900 cursor-pointer">Watch TV</div>
                      </div>
                    </div>

                    {/* Filter */}
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3">Filter by</h3>
                      <div className="text-sm text-gray-600">
                        <div className="hover:text-gray-900 cursor-pointer">Newest</div>
                      </div>
                    </div>

                    {/* Get Free Competition */}
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3">Get Free Competition</h3>
                      <div className="text-sm text-gray-600">
                        <div className="hover:text-gray-900 cursor-pointer">Participation</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Profile Section */}
        <div className="text-center mb-12">
          <img 
            src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop" 
            alt="Abu Raihan"
            className="w-20 h-20 rounded-full mx-auto mb-4"
          />
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Abu Raihan</h2>
          <button className="bg-gray-900 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-800">
            Get in touch
          </button>
        </div>

        {/* More by Abu Raihan */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-semibold text-gray-900">More by Abu Raihan</h2>
            <button className="text-gray-600 hover:text-gray-900">View profile</button>
          </div>
          
          <div className="grid grid-cols-4 gap-6">
            <div className="bg-purple-100 rounded-lg p-6 h-48 relative overflow-hidden">
              <div className="absolute inset-0 p-4">
                <div className="w-full h-full bg-white rounded shadow-sm"></div>
              </div>
            </div>
            <div className="bg-pink-50 rounded-lg p-6 h-48 relative overflow-hidden">
              <div className="absolute inset-0 p-4">
                <div className="w-full h-full bg-white rounded shadow-sm"></div>
              </div>
            </div>
            <div className="bg-teal-50 rounded-lg p-6 h-48 relative overflow-hidden">
              <div className="absolute inset-0 p-4">
                <div className="w-full h-full bg-white rounded shadow-sm"></div>
              </div>
            </div>
            <div className="bg-yellow-50 rounded-lg p-6 h-48 relative overflow-hidden">
              <div className="absolute inset-0 p-4">
                <div className="w-full h-full bg-white rounded shadow-sm"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Services by Abu Raihan */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-semibold text-gray-900">Services by Abu Raihan</h2>
            <button className="text-gray-600 hover:text-gray-900">View all services</button>
          </div>
          
          <div className="grid grid-cols-1 gap-6">
            <div className="bg-teal-50 rounded-lg p-6 h-48 relative overflow-hidden">
              <div className="absolute inset-0 p-4">
                <div className="w-full h-full bg-white rounded shadow-sm flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-teal-600 text-lg font-semibold">Landing page</div>
                    <div className="text-teal-600">get started</div>
                    <div className="text-2xl font-bold text-gray-900 mt-2">$800</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-8">
              <div className="text-2xl font-bold italic text-gray-900">Dribbble</div>
              <nav className="flex items-center space-x-6 text-sm text-gray-600">
                <span className="hover:text-gray-900 cursor-pointer">For designers</span>
                <span className="hover:text-gray-900 cursor-pointer">Hire talent</span>
                <span className="hover:text-gray-900 cursor-pointer">Inspiration</span>
                <span className="hover:text-gray-900 cursor-pointer">Advertising</span>
                <span className="hover:text-gray-900 cursor-pointer">Blog</span>
                <span className="hover:text-gray-900 cursor-pointer">About</span>
                <span className="hover:text-gray-900 cursor-pointer">Careers</span>
                <span className="hover:text-gray-900 cursor-pointer">Support</span>
              </nav>
            </div>
            
            <div className="flex items-center space-x-4">
              <Twitter className="w-5 h-5 text-gray-600 hover:text-gray-900 cursor-pointer" />
              <Facebook className="w-5 h-5 text-gray-600 hover:text-gray-900 cursor-pointer" />
              <Instagram className="w-5 h-5 text-gray-600 hover:text-gray-900 cursor-pointer" />
              <Github className="w-5 h-5 text-gray-600 hover:text-gray-900 cursor-pointer" />
            </div>
          </div>
          
          <div className="flex items-center justify-between text-sm text-gray-500 pt-8 border-t border-gray-200">
            <div className="flex items-center space-x-6">
              <span>© 2025 Dribbble</span>
              <span className="hover:text-gray-900 cursor-pointer">Terms</span>
              <span className="hover:text-gray-900 cursor-pointer">Privacy</span>
              <span className="hover:text-gray-900 cursor-pointer">Cookies</span>
            </div>
            
            <div className="flex items-center space-x-6">
              <span className="hover:text-gray-900 cursor-pointer">Jobs</span>
              <span className="hover:text-gray-900 cursor-pointer">Designers</span>
              <span className="hover:text-gray-900 cursor-pointer">Freelancers</span>
              <span className="hover:text-gray-900 cursor-pointer">Tags</span>
              <span className="hover:text-gray-900 cursor-pointer">Places</span>
              <span className="hover:text-gray-900 cursor-pointer">Resources</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;