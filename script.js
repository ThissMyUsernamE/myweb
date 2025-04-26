const darkMode = () => {
    const themeToggleBtns = document.querySelectorAll('#theme-toggle');
    // State
    const theme = localStorage.getItem('theme');
    // On mount
    theme && document.body.classList.add(theme);
    // Handlers
    const handleThemeToggle = () => {
      document.body.classList.toggle('light-mode');
      if (document.body.classList.contains('light-mode')) {
        localStorage.setItem('theme', 'light-mode');
      } else {
        localStorage.removeItem('theme');
        document.body.removeAttribute('class');
      }
    };
    // Events
    themeToggleBtns.forEach(btn =>
      btn.addEventListener('click', handleThemeToggle)
    );
  };
  darkMode();

  const showBlog = () => {
    const showBlogBtn = document.querySelector('.show-blog-btn'); // Select the button
    const blogContainer = document.querySelector('.blog__container'); // Select the blog container
  
    if (!showBlogBtn || !blogContainer) {
      console.error('Show Blog button or Blog container not found');
      return;
    }
  
    // State
    const blogVisible = localStorage.getItem('blogVisible');
  
    // On mount
    if (blogVisible === 'true') {
      blogContainer.style.display = 'block'; // Show the blog container if previously visible
    } else {
      blogContainer.style.display = 'none'; // Hide the blog container by default
    }
  
    // Handlers
    const handleBlogToggle = () => {
      if (blogContainer.style.display === 'none') {
        blogContainer.style.display = 'block'; // Show the blog container
        localStorage.setItem('blogVisible', 'true'); // Save state to localStorage
      } else {
        blogContainer.style.display = 'none'; // Hide the blog container
        localStorage.setItem('blogVisible', 'false'); // Save state to localStorage
      }
    };
  
    // Events
    showBlogBtn.addEventListener('click', handleBlogToggle);
  };
  
  showBlog();