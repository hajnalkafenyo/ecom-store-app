import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="w-full p-2 border-t border-gray-300 bg-gray-50">
      <div className="flex flex-col justify-center w-full max-w-[720px] mx-auto">
        <div className="flex flex-col items-start">
          <Link
            to="/cookie-policy"
            className="text-gray-700 hover:text-amber-600 transition-colors cursor-pointer"
          >
            Cookie Policy
          </Link>
          <Link
            to="/privacy-policy"
            className="text-gray-700 hover:text-amber-600 transition-colors cursor-pointer"
          >
            Privacy Policy
          </Link>
        </div>
        <div className="flex flex-row justify-center gap-8">
          <a
            target="_blank"
            href="https://hajnalka-social-noroff.netlify.app/"
            rel="noreferrer"
          >
            <img src="fb.png" alt="socialmedia icon" />
          </a>
          <img src="twitter.png" alt="socialmedia icon" />
          <img src="insta.png" alt="socialmedia icon" />
        </div>
      </div>
    </footer>
  );
}
