const Footer = () => {
    return(
        <footer className="bg-white border-t border-gray-200 py-8">
        <div className="container mx-auto px-4 max-w-3xl text-center text-gray-600">
          <p>© {new Date().getFullYear()} TokenMaster. Created for demonstration purposes.</p>
        </div>
      </footer>
    )
}

export default Footer;