const Header = () => {
  return (
    <header>
      <a href="/" className="logo">
        Unsplash Clone
      </a>
      <form className="header-search-bar">
        <input type="text" placeholder="Search..." aria-label="Search"></input>
        <button type="submit">
          <p className="sr-only">Submit</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            height="16px"
            width="16px"
            aria-hidden="true"
          >
            <path d="M416 208c0 45.9-14.9 88.3-40 122.7l126.6 126.7c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0s208 93.1 208 208zM208 352a144 144 0 100-288 144 144 0 100 288z"></path>
          </svg>
        </button>
      </form>
      <nav>
        <ul>
          <li>
            <a href="/">Categories</a>
          </li>
          <li>
            <a href="/">Submissions</a>
          </li>
          <li>
            <a href="/">Sign Up</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
