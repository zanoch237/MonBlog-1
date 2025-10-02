import React from "react";
import { Heart, Bookmark, Twitter, Facebook, Instagram, Github, X, MessageCircle, Briefcase, Sparkles, Filter, Eye, ThumbsUp, Search } from 'lucide-react';

// Type definitions
type DesignCard = {
  id: number;
  title: string;
  author: string;
  likes: number;
  views: string;
  image: string;
  authorAvatar: string;
  isAd?: boolean;
  category?: string;
  description?: string;
};

type BlogContent = {
  id: number;
  title: string;
  content: string;
  author: string;
  category: string;
  image: string;
  date: string;
};

// Données réelles du blog existant
const realBlogContent: BlogContent[] = [
  {
    id: 1,
    title: "Wild Life Blog Page Website",
    content: "Découvrez notre site web dédié à la faune sauvage. Explorez les merveilles de la nature à travers nos articles captivants sur les animaux sauvages du monde entier.",
    author: "Dorian Zanoch",
    category: "Web Design",
    image: "https://images.pexels.com/photos/247431/pexels-photo-247431.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
    date: "2024-01-15"
  },
  {
    id: 2,
    title: "Photographie Animaliere",
    content: "Techniques et conseils pour capturer la beauté de la faune sauvage. Apprenez les secrets des meilleurs photographes animaliers.",
    author: "Dorian Zanoch",
    category: "Photographie",
    image: "https://images-wixmp-530a50041672c69d335ba4cf.wixmp.com/templates/image/51692bcc91f6e7465d588054a5ffbd38baa5d37ba031581ab18642f600b817901664445305754.jpg",
    date: "2024-01-20"
  }
];

// Données complètes pour la recherche - Utilisation des vraies données existantes
const allDesignData: DesignCard[] = [
  {
    id: 1,
    title: "Smart Finance App - Manage Your Money with Ease Dark mode",
    author: "Abu Raihan",
    likes: 22,
    views: "4.2k",
    image: "https://images.pexels.com/photos/3943716/pexels-photo-3943716.jpeg?auto=compress&cs=tinysrgb&w=400",
    authorAvatar: "https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&fit=crop&crop=face",
    category: "Finance",
    description: "Application moderne de gestion financière avec interface sombre"
  },
  {
    id: 2,
    title: "Banking App Design",
    author: "Abu Raihan",
    likes: 29,
    views: "3.4k",
    image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=400",
    authorAvatar: "https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&fit=crop&crop=face",
    category: "Banking",
    description: "Design moderne pour application bancaire mobile"
  },
  {
    id: 3,
    title: "Mobile Banking App",
    author: "Abu Raihan",
    likes: 16,
    views: "3.2k",
    image: "https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-147413.jpeg?auto=compress&cs=tinysrgb&w=400",
    authorAvatar: "https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&fit=crop&crop=face",
    category: "Mobile",
    description: "Interface utilisateur pour application bancaire mobile"
  }
];

// Composant pour afficher un article en détail
const ArticleDetailPage = ({ article, onBack }: { article: BlogContent; onBack: () => void }) => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header avec navigation retour */}
      <div className="border-b border-gray-200 py-4">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center space-x-4">
            <button
              onClick={onBack}
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span>Retour</span>
            </button>
          </div>
        </div>
      </div>

      {/* Contenu de l'article */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        {/* En-tête de l'article */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
              {article.category}
            </span>
            <span className="text-sm text-gray-500">{article.date}</span>
          </div>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {article.title}
          </h1>
          
          <div className="flex items-center justify-center space-x-4 mb-6">
            <img 
              src="https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-1/548338314_806217328539732_3228641699885379937_n.jpg?stp=c0.0.864.864a_dst-jpg_s200x200_tt6&_nc_cat=106&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeE7cx0wleZWbm31wn0gsiDQOaq1pyvIAQY5qrWnK8gBBi1EAk7nXJIa4LDIzsIvewCSDhfaGAlsOQWXxwShhxaM&_nc_ohc=s351cEhpb-cQ7kNvwF5h2-V&_nc_oc=Adl261woTGFs8JYQIS6ksuBJkLV_5F4zhcT0wYZcpGS3fCGBNbWK9m2updIS89NH6ODYkvKhBwZ1l6-halmaXBY2&_nc_zt=24&_nc_ht=scontent-los2-1.xx&_nc_gid=Qiaj1tnz_f2MAtThU9lzOw&oh=00_AfY4Hvgd890qTNZR_yGOrhqB4Bgfieek5WNkro_mi6R0pg&oe=68E0229F" 
              alt={article.author}
              className="w-12 h-12 rounded-full"
            />
            <div className="text-left">
              <div className="font-semibold text-gray-900">{article.author}</div>
              <div className="text-sm text-gray-500">Auteur</div>
            </div>
          </div>
        </div>

        {/* Image principale */}
        <div className="mb-8">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-96 object-cover rounded-lg"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = 'https://via.placeholder.com/800x400';
            }}
          />
        </div>

        {/* Contenu de l'article */}
        <div className="prose prose-lg max-w-none">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            {article.content}
          </p>
          
          {/* Contenu étendu basé sur le titre */}
          {article.title.includes('Wild Life') && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                Découvrez la Faune Sauvage
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Notre site web est dédié à la préservation et à la célébration de la faune sauvage mondiale. 
                Nous croyons que chaque espèce a sa place dans l'écosystème global et mérite notre protection.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
                Nos Missions
              </h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Éducation sur la biodiversité mondiale</li>
                <li>Sensibilisation aux enjeux de conservation</li>
                <li>Promotion de la photographie animaliere éthique</li>
                <li>Soutien aux initiatives de protection</li>
              </ul>
              
              <div className="bg-green-50 p-6 rounded-lg mt-8">
                <h4 className="text-lg font-semibold text-green-800 mb-2">
                  Agissons Ensemble
                </h4>
                <p className="text-green-700">
                  Rejoignez notre communauté de passionnés de la nature et participez à la protection 
                  des espèces menacées. Chaque action compte pour préserver notre planète.
                </p>
              </div>
            </div>
          )}
          
          {article.title.includes('Photographie') && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                L'Art de la Photographie Animaliere
              </h2>
              <p className="text-gray-700 leading-relaxed">
                La photographie animaliere demande patience, respect et technique. C'est un art qui 
                nous permet de capturer la beauté éphémère de la nature sauvage.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
                Conseils Essentiels
              </h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Respectez toujours la distance de sécurité avec les animaux</li>
                <li>Utilisez des objectifs longue focale pour ne pas déranger</li>
                <li>Soyez patient - les meilleurs clichés demandent du temps</li>
                <li>Étudiez le comportement des espèces que vous photographiez</li>
              </ul>
            </div>
          )}
        </div>

        {/* Actions */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-2 text-gray-600 hover:text-red-500 transition-colors">
                <Heart className="w-5 h-5" />
                <span>J'aime</span>
              </button>
              <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-500 transition-colors">
                <Bookmark className="w-5 h-5" />
                <span>Sauvegarder</span>
              </button>
            </div>
            
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-500">Partager :</span>
              <button className="text-gray-600 hover:text-blue-500">
                <Facebook className="w-5 h-5" />
              </button>
              <button className="text-gray-600 hover:text-blue-400">
                <Twitter className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Composant de page des résultats de recherche
const SearchResultsPage = ({ query, results, onBack, onArticleClick }: { 
  query: string; 
  results: (BlogContent | DesignCard)[]; 
  onBack: () => void;
  onArticleClick: (article: BlogContent) => void;
}) => {
  const blogResults = results.filter(item => 'content' in item) as BlogContent[];
  const designResults = results.filter(item => 'likes' in item) as DesignCard[];

  return (
    <div className="min-h-screen bg-white">
      {/* Header avec navigation retour */}
      <div className="border-b border-gray-200 py-4">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center space-x-4">
            <button
              onClick={onBack}
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span>Retour</span>
            </button>
            <h1 className="text-2xl font-bold text-gray-900">
              Résultats pour "{query}"
            </h1>
            <span className="text-gray-500">({results.length} résultats)</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Résultats Blog */}
        {blogResults.length > 0 && (
          <div className="mb-12">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">
              Articles de Blog ({blogResults.length})
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogResults.map((article) => (
                <div 
                  key={article.id} 
                  className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
                  onClick={() => onArticleClick(article)}
                >
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'https://via.placeholder.com/400x200';
                    }}
                  />
                  <div className="p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                        {article.category}
                      </span>
                      <span className="text-xs text-gray-500">{article.date}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-3">
                      {article.content}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">Par {article.author}</span>
                      <button className="text-sm text-blue-600 hover:text-blue-800 font-medium">
                        Lire plus
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Résultats Design */}
        {designResults.length > 0 && (
          <div className="mb-12">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">
              Designs ({designResults.length})
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {designResults.map((design) => (
                <div key={design.id} className="group cursor-pointer">
                  <div className="relative overflow-hidden rounded-lg bg-gray-100 aspect-[4/3] mb-3">
                    <img
                      src={design.image}
                      alt={design.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = 'https://via.placeholder.com/400x300';
                      }}
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                      <button className="bg-white/90 hover:bg-white p-2 rounded-lg transition-colors">
                        <Heart className="w-5 h-5 text-gray-700" />
                      </button>
                      <button className="bg-white/90 hover:bg-white p-2 rounded-lg transition-colors">
                        <Bookmark className="w-5 h-5 text-gray-700" />
                      </button>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-3">
                      <img
                        src={design.authorAvatar}
                        alt={design.author}
                        className="w-6 h-6 rounded-full"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = 'https://via.placeholder.com/24';
                        }}
                      />
                      <span className="text-sm text-gray-700 font-medium">{design.author}</span>
                    </div>
                    <div className="flex items-center space-x-3 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <ThumbsUp className="w-4 h-4" />
                        <span>{design.likes}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Eye className="w-4 h-4" />
                        <span>{design.views}</span>
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-sm text-gray-900 line-clamp-2 group-hover:text-pink-600 transition-colors">
                    {design.title}
                  </h3>
                  {design.category && (
                    <span className="inline-block mt-2 px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                      {design.category}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Aucun résultat */}
        {results.length === 0 && (
          <div className="text-center py-16">
            <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              Aucun résultat trouvé
            </h2>
            <p className="text-gray-600 mb-4">
              Nous n'avons trouvé aucun résultat pour "{query}"
            </p>
            <div className="space-y-2 text-sm text-gray-500">
              <p>Suggestions :</p>
              <ul className="space-y-1">
                <li>• Vérifiez l'orthographe de vos mots-clés</li>
                <li>• Essayez des termes plus généraux</li>
                <li>• Utilisez moins de mots-clés</li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const FollowingPage = () => {
  const designCards = [
    {
      id: 1,
      title: "Smart Finance App - Manage Your Money with Ease Dark mode",
      author: "Abu Raihan",
      likes: 22,
      views: "4.2k",
      image: "https://images.pexels.com/photos/3943716/pexels-photo-3943716.jpeg?auto=compress&cs=tinysrgb&w=400",
      authorAvatar: "https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&fit=crop&crop=face"
    },
    {
      id: 2,
      title: "Banking App Design",
      author: "Abu Raihan",
      likes: 29,
      views: "3.4k",
      image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=400",
      authorAvatar: "https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&fit=crop&crop=face"
    },
    {
      id: 3,
      title: "Mobile Banking App",
      author: "Abu Raihan",
      likes: 16,
      views: "3.2k",
      image: "https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-147413.jpeg?auto=compress&cs=tinysrgb&w=400",
      authorAvatar: "https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&fit=crop&crop=face"
    },
    {
      id: 4,
      title: "Smart Finance App ©Manage Your Money with Ease",
      author: "Abu Raihan",
      likes: 19,
      views: "3.8k",
      image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=400",
      authorAvatar: "https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&fit=crop&crop=face"
    },
    {
      id: 5,
      title: "Finance Dashboard",
      author: "Abu Raihan",
      likes: 22,
      views: "4.4k",
      image: "https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&w=400",
      authorAvatar: "https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&fit=crop&crop=face"
    },
    {
      id: 6,
      title: "Go from Figma design to real website with Framer",
      author: "Framer",
      likes: 0,
      views: "0",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400",
      authorAvatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&fit=crop&crop=face",
      isAd: true
    },
    {
      id: 7,
      title: "Beauty Shop Website Design",
      author: "Abu Raihan",
      likes: 22,
      views: "4.4k",
      image: "https://images.pexels.com/photos/355288/pexels-photo-355288.jpeg?auto=compress&cs=tinysrgb&w=400",
      authorAvatar: "https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&fit=crop&crop=face"
    },
    {
      id: 8,
      title: "Brand Identity Design",
      author: "Abu Raihan",
      likes: 21,
      views: "2.6k",
      image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=400",
      authorAvatar: "https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&fit=crop&crop=face"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Sub Navigation */}
      <div className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <button className="flex items-center space-x-1 text-gray-900 border-b-2 border-gray-900 pb-1">
                <span className="font-medium">Following</span>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              <nav className="flex items-center space-x-6 text-sm text-gray-600">
                <span className="hover:text-gray-900 cursor-pointer">Discover</span>
                <span className="hover:text-gray-900 cursor-pointer">Animation</span>
                <span className="hover:text-gray-900 cursor-pointer">Branding</span>
                <span className="hover:text-gray-900 cursor-pointer">Illustration</span>
                <span className="hover:text-gray-900 cursor-pointer">Mobile</span>
                <span className="hover:text-gray-900 cursor-pointer">Print</span>
                <span className="hover:text-gray-900 cursor-pointer">Product Design</span>
                <span className="hover:text-gray-900 cursor-pointer">Typography</span>
                <span className="hover:text-gray-900 cursor-pointer">Web Design</span>
              </nav>
            </div>
            <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-900">
              <Filter className="w-4 h-4" />
              <span className="text-sm">Filters</span>
            </button>
          </div>
        </div>
      </div>

      {/* Design Grid */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {designCards.map((card) => (
            <div key={card.id} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg bg-gray-100 aspect-[4/3] mb-3">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = `https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop`;
                  }}
                />
                {card.isAd && (
                  <div className="absolute top-3 right-3 bg-white/90 px-2 py-1 rounded text-xs font-medium text-gray-700">
                    Hide ads
                  </div>
                )}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <button className="bg-white/90 hover:bg-white p-2 rounded-lg transition-colors">
                    <Heart className="w-5 h-5 text-gray-700" />
                  </button>
                  <button className="bg-white/90 hover:bg-white p-2 rounded-lg transition-colors">
                    <Bookmark className="w-5 h-5 text-gray-700" />
                  </button>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <img
                    src={card.authorAvatar}
                    alt={card.author}
                    className="w-6 h-6 rounded-full"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = `https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&fit=crop&crop=face`;
                    }}
                  />
                  <span className="text-sm text-gray-700 font-medium">{card.author}</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <ThumbsUp className="w-4 h-4" />
                    <span>{card.likes}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Eye className="w-4 h-4" />
                    <span>{card.views}</span>
                  </div>
                </div>
              </div>
              
              <h3 className="text-sm text-gray-900 mt-2 line-clamp-2 group-hover:text-pink-600 transition-colors">
                {card.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

function App() {
    const [isContactModalOpen, setIsContactModalOpen] = React.useState(false);
    const [isWorkToggleOn, setIsWorkToggleOn] = React.useState(true);
    const [currentPage, setCurrentPage] = React.useState('home'); // 'home', 'following', 'search', 'article'
    const [activeDropdown, setActiveDropdown] = React.useState<string | null>(null);
    const [searchQuery, setSearchQuery] = React.useState('');
    const [filteredResults, setFilteredResults] = React.useState<(BlogContent | DesignCard)[]>([]);
    const [isSearchActive, setIsSearchActive] = React.useState(false);
    const [showSearchResults, setShowSearchResults] = React.useState(false);
    const [selectedArticle, setSelectedArticle] = React.useState<BlogContent | null>(null);

    // Fonction de recherche
    const handleSearch = (query: string) => {
        setSearchQuery(query);
        
        if (query.trim() === '') {
            setFilteredResults([]);
            setIsSearchActive(false);
            setShowSearchResults(false);
            return;
        }

        setIsSearchActive(true);
        const lowerQuery = query.toLowerCase();
        
        // Recherche dans le contenu du blog
        const blogResults = realBlogContent.filter(item =>
            item.title.toLowerCase().includes(lowerQuery) ||
            item.content.toLowerCase().includes(lowerQuery) ||
            item.category.toLowerCase().includes(lowerQuery) ||
            item.author.toLowerCase().includes(lowerQuery)
        );
        
        // Recherche dans les designs
        const designResults = allDesignData.filter(item =>
            item.title.toLowerCase().includes(lowerQuery) ||
            item.author.toLowerCase().includes(lowerQuery) ||
            (item.category && item.category.toLowerCase().includes(lowerQuery)) ||
            (item.description && item.description.toLowerCase().includes(lowerQuery))
        );
        
        const combinedResults = [...blogResults, ...designResults];
        setFilteredResults(combinedResults);
        setShowSearchResults(true);
    };

    // Fermer les résultats de recherche
    const clearSearch = () => {
        setSearchQuery('');
        setFilteredResults([]);
        setIsSearchActive(false);
        setShowSearchResults(false);
    };

    // Aller à la page de résultats complète
    const goToSearchResults = () => {
        setCurrentPage('search');
        setShowSearchResults(false);
        setActiveDropdown(null);
    };

    // Retourner de la page de recherche
    const backFromSearch = () => {
        setCurrentPage('home');
    };

    // Aller à un article spécifique
    const goToArticle = (article: BlogContent) => {
        setSelectedArticle(article);
        setCurrentPage('article');
        setShowSearchResults(false);
        setActiveDropdown(null);
    };

    // Retourner de la page d'article
    const backFromArticle = () => {
        setCurrentPage('home');
        setSelectedArticle(null);
    };

    // Close dropdown when clicking outside
    React.useEffect(() => {
      const handleClickOutside = () => {
        setActiveDropdown(null);
        // Fermer aussi les résultats de recherche si on clique à l'extérieur
        if (showSearchResults) {
          setShowSearchResults(false);
        }
      };

      if (activeDropdown || showSearchResults) {
        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
      }
    }, [activeDropdown, showSearchResults]);

  // Render Article detail page if currentPage is 'article'
  if (currentPage === 'article' && selectedArticle) {
    return (
      <ArticleDetailPage 
        article={selectedArticle} 
        onBack={backFromArticle} 
      />
    );
  }

  // Render Search results page if currentPage is 'search'
  if (currentPage === 'search') {
    return (
      <SearchResultsPage 
        query={searchQuery} 
        results={filteredResults} 
        onBack={backFromSearch}
        onArticleClick={goToArticle}
      />
    );
  }

  // Render Following page if currentPage is 'following'
  if (currentPage === 'following') {
    return (
      <div className="min-h-screen bg-white">
        {/* Header Navigation */}
        <header className="border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-8">
                <button 
                  onClick={() => setCurrentPage('home')}
                  className="text-2xl font-bold italic text-gray-900 cursor-pointer hover:text-gray-700"
                >
                  Blog
                </button>
                  <div className="hidden md:flex items-center space-x-6">
                    <div className="relative">
                      <input 
                        type="text" 
                        placeholder="Que recherchez-vous ?" 
                        value={searchQuery}
                        onChange={(e) => handleSearch(e.target.value)}
                        className="w-80 px-4 py-2 border border-gray-300 rounded-full bg-gray-50 focus:outline-none focus:ring-2 focus:ring-pink-500"
                      />
                      {isSearchActive && (
                        <button
                          onClick={clearSearch}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      )}
                                    
                      {/* Résultats de recherche pour Following */}
                      {showSearchResults && filteredResults.length > 0 && (
                        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 z-50 max-h-96 overflow-y-auto">
                          <div className="p-4">
                            <div className="flex items-center justify-between mb-3">
                              <h3 className="text-sm font-semibold text-gray-900">
                                Résultats ({filteredResults.length})
                              </h3>
                              <button
                                onClick={clearSearch}
                                className="text-xs text-gray-500 hover:text-gray-700"
                              >
                                Fermer
                              </button>
                            </div>
                                          
                            <div className="space-y-3">
                              {filteredResults.slice(0, 5).map((result) => (
                                <div 
                                  key={result.id} 
                                  className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-lg cursor-pointer"
                                  onClick={() => {
                                    if ('content' in result) {
                                      goToArticle(result as BlogContent);
                                    }
                                  }}
                                >
                                  <img
                                    src={result.image || 'https://via.placeholder.com/40'}
                                    alt={result.title}
                                    className="w-10 h-10 rounded object-cover"
                                    onError={(e) => {
                                      const target = e.target as HTMLImageElement;
                                      target.src = 'https://via.placeholder.com/40';
                                    }}
                                  />
                                  <div className="flex-1 min-w-0">
                                    <h4 className="text-sm font-medium text-gray-900 truncate">
                                      {result.title}
                                    </h4>
                                    <p className="text-xs text-gray-500">
                                      Par {result.author}
                                      {'category' in result && result.category && (
                                        <span className="ml-2 px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                                          {result.category}
                                        </span>
                                      )}
                                    </p>
                                  </div>
                                </div>
                              ))}
                                            
                              {filteredResults.length > 5 && (
                                <div className="text-center py-2">
                                  <button 
                                    onClick={goToSearchResults}
                                    className="text-sm text-blue-600 hover:text-blue-800"
                                  >
                                    Voir tous les résultats ({filteredResults.length})
                                  </button>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      )}
                                    
                      {/* Message aucun résultat pour Following */}
                      {showSearchResults && filteredResults.length === 0 && searchQuery.trim() !== '' && (
                        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                          <div className="p-4 text-center">
                            <Search className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                            <p className="text-sm text-gray-600 mb-1">
                              Aucun résultat pour "{searchQuery}"
                            </p>
                            <p className="text-xs text-gray-500">
                              Essayez des mots-clés différents ou plus généraux
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  <nav className="flex items-center space-x-6 font-bold text-sm text-gray-600">
                    <div className="relative">
                      <button 
                        className="flex items-center space-x-1 hover:text-gray-900"
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveDropdown(activeDropdown === 'shots' ? null : 'shots');
                        }}
                      >
                        <span>Shots</span>
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </button>
                      {activeDropdown === 'shots' && (
                        <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                          <div className="py-2">
                            <div className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer">Recent Shots</div>
                            <div className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer">Popular Shots</div>
                            <div className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer">Liked Shots</div>
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="relative">
                      <button 
                        className="flex items-center space-x-1 hover:text-gray-900"
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveDropdown(activeDropdown === 'explore' ? null : 'explore');
                        }}
                      >
                        <span>Explore</span>
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path 
                            fillRule="evenodd" 
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 
                            1 0 111.414 1.414l-4 4a1 1 0 01-1.414 
                            0l-4-4a1 1 0 010-1.414z" 
                            clipRule="evenodd" 
                          />
                        </svg>
                      </button>
                      {activeDropdown === 'explore' && (
                        <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                          <div className="py-2">
                            <button 
                              onClick={() => {
                                setCurrentPage('following');
                                setActiveDropdown(null);
                              }}
                              className="w-full text-left"
                            >
                              <div className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 flex items-center">
                                <svg className="w-4 h-4 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 
                                  0 2 2 0 014 0zM14 15a4 4 0 00-8 
                                  0v3h8v-3z" />
                                </svg>
                                Following
                              </div>
                            </button>
                            <div className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 flex items-center cursor-pointer">
                              <svg className="w-4 h-4 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9 12l2 2 4-4m6 2a9 9 0 
                                11-18 0 9 9 0 0118 0z" />
                              </svg>
                              Popular
                            </div>
                            <div className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 flex items-center cursor-pointer">
                              <svg className="w-4 h-4 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                              </svg>
                              New and Noteworthy
                            </div>
                            <hr className="my-2" />
                            <div className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer">Product Design</div>
                            <div className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer">Web Design</div>
                            <div className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer">Animation</div>
                            <div className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer">Branding</div>
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="relative">
                      <button 
                        className="flex items-center space-x-1 hover:text-gray-900"
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveDropdown(activeDropdown === 'talent' ? null : 'talent');
                        }}
                      >
                        <span>Find Talent</span>
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </button>
                      {activeDropdown === 'talent' && (
                        <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                          <div className="py-2">
                            <div className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 flex items-center cursor-pointer">
                              <svg className="w-4 h-4 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                              </svg>
                              Get Matched Now
                              <span className="ml-2 bg-pink-500 text-white text-xs px-2 py-1 rounded">NEW</span>
                            </div>
                            <div className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 flex items-center cursor-pointer">
                              <svg className="w-4 h-4 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
                              </svg>
                              Browse Profiles
                            </div>
                            <div className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 flex items-center cursor-pointer">
                              <svg className="w-4 h-4 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                              </svg>
                              Purchase Services
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="relative">
                      <button 
                        className="flex items-center space-x-1 hover:text-gray-900"
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveDropdown(activeDropdown === 'hired' ? null : 'hired');
                        }}
                      >
                        <span>Get Hired</span>
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </button>
                      {activeDropdown === 'hired' && (
                        <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                          <div className="py-2">
                            <div className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 flex items-center cursor-pointer">
                              <svg className="w-4 h-4 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              Upgrade to 
                              <span className="ml-1 bg-gray-900 text-white text-xs px-2 py-1 rounded">PRO</span>
                            </div>
                            <div className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 flex items-center cursor-pointer">
                              <svg className="w-4 h-4 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M11 3.055A9.001 9.001 0 1020.945 9H11V3.055z" />
                                <path d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                              </svg>
                              Advertise
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
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
        
        <FollowingPage />
        
        {/* Footer */}
        <footer className="bg-white border-t border-gray-200 py-12">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center space-x-8">
                <div className="text-2xl font-bold italic text-gray-900">Blog</div>
                <nav className="flex items-center space-x-6 text-sm text-gray-600">
                  <span className="hover:text-gray-900 font-bold cursor-pointer">For designers</span>
                  <span className="hover:text-gray-900 font-bold cursor-pointer">Hire talent</span>
                  <span className="hover:text-gray-900 font-bold cursor-pointer">Inspiration</span>
                  <span className="hover:text-gray-900 font-bold cursor-pointer">Advertising</span>
                  <span className="hover:text-gray-900 font-bold cursor-pointer">Blog</span>
                  <span className="hover:text-gray-900 font-bold cursor-pointer">About</span>
                  <span className="hover:text-gray-900 font-bold cursor-pointer">Careers</span>
                  <span className="hover:text-gray-900 font-bold cursor-pointer">Support</span>
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

  return (
    <div className="min-h-screen bg-white">
      {/* Header Navigation */}
      <header className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <div className="text-2xl font-bold italic text-gray-900 cursor-pointer hover:text-gray-700" onClick={() => setCurrentPage('home')}>Blog</div>
              <div className="hidden md:flex items-center space-x-6">
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="Que recherchez-vous ?" 
                    value={searchQuery}
                    onChange={(e) => handleSearch(e.target.value)}
                    className="w-80 px-4 py-2 border border-gray-300 rounded-full bg-gray-50 focus:outline-none focus:ring-2 focus:ring-pink-500"
                  />
                  {isSearchActive && (
                    <button
                      onClick={clearSearch}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  )}
                  
                  {/* Résultats de recherche */}
                  {showSearchResults && filteredResults.length > 0 && (
                    <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 z-50 max-h-96 overflow-y-auto">
                      <div className="p-4">
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="text-sm font-semibold text-gray-900">
                            Résultats ({filteredResults.length})
                          </h3>
                          <button
                            onClick={clearSearch}
                            className="text-xs text-gray-500 hover:text-gray-700"
                          >
                            Fermer
                          </button>
                        </div>
                        
                        <div className="space-y-3">
                          {filteredResults.slice(0, 5).map((result) => (
                            <div 
                              key={result.id} 
                              className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-lg cursor-pointer"
                              onClick={() => {
                                if ('content' in result) {
                                  goToArticle(result as BlogContent);
                                }
                              }}
                            >
                              <img
                                src={result.image || 'https://via.placeholder.com/40'}
                                alt={result.title}
                                className="w-10 h-10 rounded object-cover"
                                onError={(e) => {
                                  const target = e.target as HTMLImageElement;
                                  target.src = 'https://via.placeholder.com/40';
                                }}
                              />
                              <div className="flex-1 min-w-0">
                                <h4 className="text-sm font-medium text-gray-900 truncate">
                                  {result.title}
                                </h4>
                                <p className="text-xs text-gray-500">
                                  Par {result.author}
                                  {'category' in result && result.category && (
                                    <span className="ml-2 px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                                      {result.category}
                                    </span>
                                  )}
                                </p>
                              </div>
                            </div>
                          ))}
                          
                            {filteredResults.length > 5 && (
                              <div className="text-center py-2">
                                <button 
                                  onClick={goToSearchResults}
                                  className="text-sm text-blue-600 hover:text-blue-800"
                                >
                                  Voir tous les résultats ({filteredResults.length})
                                </button>
                              </div>
                            )}
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {/* Message aucun résultat */}
                  {showSearchResults && filteredResults.length === 0 && searchQuery.trim() !== '' && (
                    <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                      <div className="p-4 text-center">
                        <Search className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                        <p className="text-sm text-gray-600 mb-1">
                          Aucun résultat pour "{searchQuery}"
                        </p>
                        <p className="text-xs text-gray-500">
                          Essayez des mots-clés différents ou plus généraux
                        </p>
                      </div>
                    </div>
                  )}
                </div>
                <nav className="flex items-center space-x-6 font-bold  text-sm text-gray-600">
                  <div className="relative">
                    <button 
                      className="flex items-center space-x-1 hover:text-gray-900"
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveDropdown(activeDropdown === 'shots' ? null : 'shots');
                      }}
                    >
                      <span>Shots</span>
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                    {activeDropdown === 'shots' && (
                      <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                        <div className="py-2">
                          <div className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer">Recent Shots</div>
                          <div className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer">Popular Shots</div>
                          <div className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer">Liked Shots</div>
                        </div>
                      </div>
                    )}
                  </div>
               <div className="relative">
                <button 
                  className="flex items-center space-x-1 hover:text-gray-900"
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveDropdown(activeDropdown === 'explore' ? null : 'explore');
                  }}
                >
                  <span>Explore</span>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path 
                      fillRule="evenodd" 
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 
                      1 0 111.414 1.414l-4 4a1 1 0 01-1.414 
                      0l-4-4a1 1 0 010-1.414z" 
                      clipRule="evenodd" 
                    />
                  </svg>
                </button>

                    {/* Dropdown menu explore */}
                    {activeDropdown === 'explore' && (
                      <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                        <div className="py-2">
                          <button 
                            onClick={() => {
                              setCurrentPage('following');
                              setActiveDropdown(null);
                            }}
                            className="w-full text-left"
                          >
                            <div className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 flex items-center">
                              <svg className="w-4 h-4 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 
                                0 2 2 0 014 0zM14 15a4 4 0 00-8 
                                0v3h8v-3z" />
                              </svg>
                              Following
                            </div>
                          </button>
                          <button>
                          <div className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 flex items-center">
                            <svg className="w-4 h-4 mr-3" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9 12l2 2 4-4m6 2a9 9 0 
                              11-18 0 9 9 0 0118 0z" />
                            </svg>
                            Popular
                          </div>
                          </button>
                          <button>
                          <div className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 flex items-center">
                              <svg className="w-4 h-4 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                  <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                              </svg>
                            New and Noteworthy
                          </div>
                          </button>
                          <hr className="my-2" />
                         <button><div className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Product Design</div></button>
                        <button><div className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Web Design</div></button>
                        <button><div className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Animation</div></button>
                        <button><div className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Branding</div></button>
                        </div>
                      </div>
                    )}
                  </div>

                                    <div className="relative group">
                    <button className="flex items-center space-x-1 hover:text-gray-900">
                      <span>Find Talent</span>
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                    {/* Dropdown menu for Find Talent */}
                    <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      <div className="py-2">
                        <div className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 flex items-center">
                          <svg className="w-4 h-4 mr-3" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                          </svg>
                          Get Matched Now
                          <span className="ml-2 bg-pink-500 text-white text-xs px-2 py-1 rounded">NEW</span>
                        </div>
                        <div className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 flex items-center">
                          <svg className="w-4 h-4 mr-3" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
                          </svg>
                          Browse Profiles
                        </div>
                        <div className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 flex items-center">
                          <svg className="w-4 h-4 mr-3" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                          </svg>
                          Purchase Services
                        </div>
                        <div className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 flex items-center">
                          <svg className="w-4 h-4 mr-3" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                          </svg>
                          Hire Fractional Talent
                        </div>
                        <div className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 flex items-center">
                          <svg className="w-4 h-4 mr-3" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                            <path fillRule="evenodd" d="M4 5a2 2 0 012-2v1a1 1 0 102 0V3h4v1a1 1 0 102 0V3a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                          </svg>
                          Post a Full-Time Job
                        </div>
                      </div>
                    </div>
                  </div>
                 
                   <div className="relative group">
                    <button className="flex items-center space-x-1 hover:text-gray-900">
                      <span>Get Hired</span>
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                    {/* Dropdown menu for Get Hired */}
                    <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      <div className="py-2">
                        <div className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 flex items-center">
                          <svg className="w-4 h-4 mr-3" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          Upgrade to 
                          <span className="ml-1 bg-gray-900 text-white text-xs px-2 py-1 rounded">PRO</span>
                        </div>
                        <div className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 flex items-center">
                          <svg className="w-4 h-4 mr-3" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M11 3.055A9.001 9.001 0 1020.945 9H11V3.055z" />
                            <path d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                          </svg>
                          Advertise
                        </div>
                        <div className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 flex items-center">
                          <svg className="w-4 h-4 mr-3" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                            <path fillRule="evenodd" d="M4 5a2 2 0 012-2v1a1 1 0 102 0V3h4v1a1 1 0 102 0V3a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm8 5a1 1 0 100-2h-3a1 1 0 100 2h3z" clipRule="evenodd" />
                          </svg>
                          Full-Time Jobs
                        </div>
                      </div>
                    </div>
                  </div>
                  
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
                  <button 
                     onClick={() => setIsContactModalOpen(true)}
                    className="text-sm text-green-600 bg-green-50 px-2 py-1 rounded hover:bg-green-100 transition-colors"
                  >
                  Available for work
                  </button>
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

    
        <div className="bg-gray-100 rounded-lg p-8 mb-12">
          <div className="max-w-4xl mx-auto">
            <img 
                src="https://images.pexels.com/photos/247431/pexels-photo-247431.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop"
                alt="Wild Life Animals"
                className="w-full h-96 object-cover"
              />
          </div>
        </div>


        <div className="bg-gray-100 rounded-lg p-8 mb-12">
          <div className="max-w-4xl mx-auto">
            <img 
                src="https://images-wixmp-530a50041672c69d335ba4cf.wixmp.com/templates/image/51692bcc91f6e7465d588054a5ffbd38baa5d37ba031581ab18642f600b817901664445305754.jpg"
                alt="Wild Life Animals"
                className="w-full h-96 object-cover"
              />
          </div>
        </div>

        {/* Profile Section */}
        <div className="text-center mb-12">
          <img 
            src="https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-1/548338314_806217328539732_3228641699885379937_n.jpg?stp=c0.0.864.864a_dst-jpg_s200x200_tt6&_nc_cat=106&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeE7cx0wleZWbm31wn0gsiDQOaq1pyvIAQY5qrWnK8gBBi1EAk7nXJIa4LDIzsIvewCSDhfaGAlsOQWXxwShhxaM&_nc_ohc=s351cEhpb-cQ7kNvwF5h2-V&_nc_oc=Adl261woTGFs8JYQIS6ksuBJkLV_5F4zhcT0wYZcpGS3fCGBNbWK9m2updIS89NH6ODYkvKhBwZ1l6-halmaXBY2&_nc_zt=24&_nc_ht=scontent-los2-1.xx&_nc_gid=Qiaj1tnz_f2MAtThU9lzOw&oh=00_AfY4Hvgd890qTNZR_yGOrhqB4Bgfieek5WNkro_mi6R0pg&oe=68E0229F" 
            alt="Dorian Zanoch"
            className="w-20 h-20 rounded-full mx-auto mb-4"
          />
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Dorian Zanoch</h2>
          <button className="bg-gray-900 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-800">
            Get in touch
          </button>
        </div>

        {/* More by Zanoch */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-semibold text-gray-900">More by Dorian Zanoch</h2>
            <button className="text-gray-600 hover:text-gray-900">View profile</button>
          </div>
          
          <div className="grid grid-cols-4 gap-6">
            <div className="bg-purple-100 rounded-lg p-6 h-48 relative overflow-hidden">
              <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPLy6WqKR723PjXMTAP2KzzE-N9ct1YjS-2w&s"
                  alt="dorian"
              />
            </div>
            <div className="bg-pink-50 rounded-lg p-6 h-48 relative overflow-hidden">
              <img
                  src="https://archive.smashing.media/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/c2861a06-9e31-4b9c-8437-ee544dd534bf/start-image-mini.jpg"
                  alt="dorian"
              />
            </div>
            <div className="bg-teal-50 rounded-lg p-6 h-48 relative overflow-hidden">
              <img
                  src="https://www.ads-com.fr/sites/default/files/media/image/2021-07/responsive_0.jpg"
                  alt="dorian"
              />
            </div>
            <div className="bg-yellow-50 rounded-lg p-6 h-48 relative overflow-hidden">
              <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlaz1BPlE-TRWfZP2Ev-apYrqgnDl7jrXGVA&s"
                  alt="dorian"
              />
            </div>
          </div>
        </div>

        {/* Services by Zanoch */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-semibold text-gray-900">Services by Dorian Zanoch</h2>
            <button className="text-gray-600 hover:text-gray-900">View all services</button>
          </div>
          
          <div className="grid grid-cols-4 gap-6">
            <div className="bg-teal-50 rounded-lg p-6 h-48 relative overflow-hidden">
              <div className="absolute inset-0 p-4">
                <div className="w-full h-full bg-white rounded shadow-sm flex items-center justify-center">
                  <div className="text-center">
                     <img
                  src="data:image/jpeg;base64,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"
                  alt="dorian"
                      />
                    <div className="text-2xl font-bold text-gray-900 mt-2">From $800</div>
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
              <div className="text-2xl font-bold italic text-gray-900">Blog</div>
              <nav className="flex items-center space-x-6 text-sm text-gray-600">
                <span className="hover:text-gray-900 font-bold cursor-pointer">For designers</span>
                <span className="hover:text-gray-900 font-bold cursor-pointer">Hire talent</span>
                <span className="hover:text-gray-900 font-bold cursor-pointer">Inspiration</span>
                <span className="hover:text-gray-900 font-bold cursor-pointer">Advertising</span>
                <span className="hover:text-gray-900 font-bold cursor-pointer">Blog</span>
                <span className="hover:text-gray-900 font-bold cursor-pointer">About</span>
                <span className="hover:text-gray-900 font-bold cursor-pointer">Careers</span>
                <span className="hover:text-gray-900 font-bold cursor-pointer">Support</span>
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

        {/* Contact Modal */}
      {isContactModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <div className="flex items-center space-x-3">
                <img 
                  src="https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-1/548338314_806217328539732_3228641699885379937_n.jpg?stp=c0.0.864.864a_dst-jpg_s200x200_tt6&_nc_cat=106&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeE7cx0wleZWbm31wn0gsiDQOaq1pyvIAQY5qrWnK8gBBi1EAk7nXJIa4LDIzsIvewCSDhfaGAlsOQWXxwShhxaM&_nc_ohc=s351cEhpb-cQ7kNvwF5h2-V&_nc_oc=Adl261woTGFs8JYQIS6ksuBJkLV_5F4zhcT0wYZcpGS3fCGBNbWK9m2updIS89NH6ODYkvKhBwZ1l6-halmaXBY2&_nc_zt=24&_nc_ht=scontent-los2-1.xx&_nc_gid=Qiaj1tnz_f2MAtThU9lzOw&oh=00_AfY4Hvgd890qTNZR_yGOrhqB4Bgfieek5WNkro_mi6R0pg&oe=68E0229F" 
                  alt="Dorian Zanoch"
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">Connect with Dorian Zanoch</h2>
                  <p className="text-sm text-gray-600">Responds within a week</p>
                </div>
              </div>
              <button 
                onClick={() => setIsContactModalOpen(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              {/* Tabs */}
              <div className="flex space-x-6 mb-6">
                <button className="flex items-center space-x-2 text-gray-900 border-b-2 border-gray-900 pb-2">
                  <MessageCircle className="w-4 h-4" />
                  <span className="font-medium">Message</span>
                </button>
                <button className="flex items-center space-x-2 text-gray-500 pb-2">
                  <Briefcase className="w-4 h-4" />
                  <span className="font-medium">Services</span>
                </button>
              </div>

              
              {/* Toggle */}
              <div className="flex items-center justify-between mb-6">
                <span className="text-gray-900 font-medium">I'm interested in working with Dorian Zanoch</span>
                <div className="relative cursor-pointer" onClick={() => setIsWorkToggleOn(!isWorkToggleOn)}>
                  <input type="checkbox" className="sr-only" checked={isWorkToggleOn} readOnly />
                  <div className={`w-11 h-6 rounded-full shadow-inner transition-colors ${isWorkToggleOn ? 'bg-pink-500' : 'bg-gray-300'}`}></div>
                  <div className={`absolute w-4 h-4 bg-white rounded-full shadow top-1 transition-transform ${isWorkToggleOn ? 'right-1' : 'left-1'}`}></div>
                </div>
              </div>

              {isWorkToggleOn ? (
                <>
                  {/* Project Details */}
                  <div className="mb-6">
                    <label className="block text-gray-900 font-medium mb-2">
                      Project Details <span className="text-red-500">*</span>
                      <span className="text-sm text-gray-500 font-normal ml-2">Minimum 50 characters</span>
                    </label>
                    <p className="text-sm text-gray-500 mb-3">
                      Describe your project or <span className="text-blue-600 underline cursor-pointer">let AI help you write it</span>
                    </p>
                    <div className="relative">
                      <textarea
                        placeholder="Include any project details, requirements, or goals..."
                        className="w-full h-32 p-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                      />
                      <button className="absolute bottom-3 right-3 flex items-center space-x-1 text-gray-400 hover:text-gray-600">
                        <Sparkles className="w-4 h-4" />
                        <span className="text-sm">Write with AI</span>
                      </button>
                    </div>
                  </div>

                  {/* Target Date */}
                  <div className="mb-6">
                    <label className="block text-gray-900 font-medium mb-2">
                      Target Date <span className="text-red-500">*</span>
                    </label>
                    <p className="text-sm text-gray-500 mb-3">
                      Select when you need the project to be completed
                    </p>
                    <select className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent">
                      <option>Please select...</option>
                      <option>Within the next few days</option>
                      <option>Within the next few weeks</option>
                      <option>Within in a month or more</option>
                      <option>Not sure</option>
                  
                    </select>
                  </div>

                  {/* Project Budget */}
                  <div className="mb-6">
                    <label className="block text-gray-900 font-medium mb-2">
                      Project Budget <span className="text-red-500">*</span>
                    </label>
                    <p className="text-sm text-gray-500 mb-3">
                      Dorian Zanoch's minimum project rate is $100 (USD)
                    </p>
                    <div className="relative mb-3">
                      <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                      <input
                        type="text"
                        placeholder="Enter amount"
                        className="w-full pl-8 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                      />
                    </div>
                    <label className="flex items-center space-x-2 text-sm text-gray-600">
                      <input type="checkbox" className="rounded" />
                      <span>Let Dorian Zanoch recommend a budget</span>
                    </label>
                  </div>
                </>
              ) : (
                /* Simple Message Mode */
                <div className="mb-6">
                  <label className="block text-gray-900 font-medium mb-2">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    placeholder="Type your message..."
                    className="w-full h-32 p-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  />
                </div>
              )}

              {/* Send Button */}
              <button className="w-full bg-pink-500 text-white py-3 rounded-lg font-medium hover:bg-pink-600 transition-colors">
                Send Message
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;