import React, { useState, useMemo } from 'react';
import Header from './components/Header/Header';
import Navigation from './components/Header/Navigation';
import MobileMenu from './components/Header/MobileMenu';
import SearchBar from './components/Search/SearchBar';
import PostList from './components/PostList/PostList';
import PostModal from './components/PostList/PostModal';
import { usePosts } from './hooks/usePosts';

function App() {
  const { posts, loading, error } = usePosts();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPost, setSelectedPost] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredPosts = useMemo(() => {
    if (!searchTerm.trim()) return posts;

    const term = searchTerm.toLowerCase();
    return posts.filter(
      (post) =>
        post.title.toLowerCase().includes(term) ||
        post.text.toLowerCase().includes(term)
    );
  }, [posts, searchTerm]);

  const handleMenuClick = () => {
    setIsMobileMenuOpen(true);
  };

  const handleMenuClose = () => {
    setIsMobileMenuOpen(false);
  };

  const handleSearchClick = () => {
    setIsSearchVisible(!isSearchVisible);
    if (isSearchVisible) {
      setSearchTerm('');
    }
  };

  const handleSearchClose = () => {
    setIsSearchVisible(false);
    setSearchTerm('');
  };

  const handlePostClick = (post) => {
    setSelectedPost(post);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedPost(null);
  };

  return (
    <div className="min-h-screen mb-6">
      <Header 
        onMenuClick={handleMenuClick} 
        onSearchClick={handleSearchClick}
        isSearchVisible={isSearchVisible}
        searchValue={searchTerm}
        onSearchChange={setSearchTerm}
        onSearchClose={handleSearchClose}
      />
      <Navigation />
      <MobileMenu isOpen={isMobileMenuOpen} onClose={handleMenuClose} />

      <main className="pt-12">
        <div className="max-w-container mx-auto px-4">
          <div className={`lg:hidden transition-all duration-300 ease-in-out ${
            isSearchVisible 
              ? 'opacity-100 translate-y-0 mb-8 max-h-20' 
              : 'opacity-0 -translate-y-4 mb-0 max-h-0 overflow-hidden'
          }`}>
            <SearchBar
              value={searchTerm}
              onChange={setSearchTerm}
              isVisible={isSearchVisible}
              onClose={handleSearchClose}
            />
          </div>
          <PostList
            posts={filteredPosts}
            onPostClick={handlePostClick}
            loading={loading}
            error={error}
          />
        </div>
      </main>

      <PostModal
        post={selectedPost}
        isOpen={isModalOpen}
        onClose={handleModalClose}
      />
    </div>
  );
}

export default App;
