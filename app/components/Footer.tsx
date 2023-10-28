export default function Footer() {
  return (
    <footer className="text-black py-4">
      <div className="mx-auto text-center">
        <div className="mb-2">
          <a
            href="https://github.com/syedshoaibahmed48"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 hover:text-blue-500 mr-2"
          >
            GitHub
          </a>
        </div>
        <p>&copy; {new Date().getFullYear()} ActiMate. All rights reserved.</p>
      </div>
    </footer>
  );
};