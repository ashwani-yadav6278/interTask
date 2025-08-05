import React,{useState} from 'react'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className="bg-white shadow-md px-4 py-3">
  <div className="container mx-auto flex justify-between items-center">
    {/* Logo */}
    <div className="text-2xl font-bold text-blue-600">Intern Portal</div>

    {/* Menu - Desktop */}
    <div className="hidden md:flex space-x-6">
      <a href="/dashboard" className="text-gray-700 hover:text-blue-600">
        Dashboard
      </a>
      <a href="/leaderboard" className="text-gray-700 hover:text-blue-600">
        Leaderboard
      </a>
      <a href="/login" className="text-gray-700 hover:text-blue-600">
        Login
      </a>
      <a
        href="/signup"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Signup
      </a>
    </div>

    {/* Mobile Menu Button */}
    <div className="md:hidden">
      <button
        className="text-gray-700 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </div>
  </div>

  {/* Mobile Menu */}
  {isOpen && (
    <div className="md:hidden mt-2 space-y-2 px-2">
      <a href="/dashboard" className="block text-gray-700 hover:text-blue-600">
        Dashboard
      </a>
      <a
        href="/leaderboard"
        className="block text-gray-700 hover:text-blue-600"
      >
        Leaderboard
      </a>
      <a href="/login" className="block text-gray-700 hover:text-blue-600">
        Login
      </a>
      <a
        href="/signup"
        className="block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Signup
      </a>
    </div>
  )}
</nav>

    </div>
  )
}

export default Navbar
