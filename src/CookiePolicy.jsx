export function CookiePolicy() {
  return (
    <div className="flex flex-col items-center bg-gray-50 p-4 max-w-4xl mx-auto">
      <h1 className="font-bold text-3xl text-gray-800 mb-6">Cookie Policy</h1>

      <div className="w-full bg-white rounded-lg shadow-md p-6 space-y-6 text-gray-700">
        <div>
          <p className="text-sm text-gray-500 mb-4">
            Last Updated: January 1, 2026
          </p>

          <p className="mb-4">
            This Cookie Policy explains how Tæmú Shop uses cookies and similar
            technologies to recognize you when you visit our website. It
            explains what these technologies are and why we use them, as well as
            your rights to control our use of them.
          </p>
        </div>
        <section className="bg-gradient-to-r from-amber-50 to-yellow-50 p-6 rounded-lg border border-amber-200">
          <h2 className="font-semibold text-xl text-gray-800 mb-3">
            🍪 Fun Cookie Corner
          </h2>
          <p className="mb-3">
            Since we're talking about cookies, why not have some fun? If you're
            looking for a different kind of cookie experience, check out the
            addictive Cookie Clicker game!
          </p>
          <div className="flex items-center space-x-4">
            <a
              href="https://orteil.dashnet.org/cookieclicker/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-lg transition-colors font-medium"
            >
              🍪 Play Cookie Clicker Game
            </a>
            <p className="text-sm text-gray-600">
              Warning: Highly addictive! Click responsibly 😄
            </p>
          </div>
        </section>

        <section>
          <h2 className="font-semibold text-xl text-gray-800 mb-3">
            Contact Us
          </h2>
          <div className="bg-gray-50 p-4 rounded-md">
            <p className="mb-2">
              If you have any questions about our use of cookies, please contact
              us:
            </p>
            <div className="space-y-1">
              <p>
                <strong>Email:</strong>{' '}
                <a
                  href="mailto:cookies@tæmu.com"
                  className="text-amber-600 hover:text-amber-700 transition-colors"
                >
                  cookies@tæmu.com
                </a>
              </p>
              <p>
                <strong>Phone:</strong>{' '}
                <a
                  href="tel:+4754321016"
                  className="text-amber-600 hover:text-amber-700 transition-colors"
                >
                  +47 54 32 10 16
                </a>
              </p>
              <p>
                <strong>Address:</strong> Tæmú Shop, Karl Johans Gate 22, 0954
                Oslo, Norway
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
