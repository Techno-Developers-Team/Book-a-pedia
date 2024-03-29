
import React, { useState } from 'react';
import "./products.css";

export default function Navbar() {
  
  // Placeholder data for books (replace with your actual data)
  const [filteredBooks, setFilteredBooks] = useState([]);
  const books = [
    {
      id: 1,
      title: "THE RAMAYAN",
      genre: "Religious",
      image: "https://ia600303.us.archive.org/BookReader/BookReaderImages.php?zip=/13/items/HindiBook-shriRamChritManas-1.pdf/HindiBook-shriRamChritManas-1_jp2.zip&file=HindiBook-shriRamChritManas-1_jp2/HindiBook-shriRamChritManas-1_0000.jp2&id=HindiBook-shriRamChritManas-1.pdf&scale=4&rotate=0", // Replace with actual image URL
      readLink: "https://rb.gy/6snip",
    },
    {
      id: 2,
      title: "Mahabharata",
      genre: "Religious",
      image: "https://www.holybooks.com/wp-content/uploads/The-Mahabharata-PDF.jpg", // Replace with actual image URL
      readLink: "http://rb.gy/jrwzy",
    },
    {
      id: 3,
      title: "The Upanishads",
      genre: "Religious",
      image: "https://m.media-amazon.com/images/I/41K75k3WFVL.SY445_SX342.jpg", // Replace with actual image URL
      readLink: "http://rb.gy/ko6ry",
    },
    {
      id: 4,
      title: "The Bhagavad Gita",
      genre: "Religious",
      image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1631634958i/99944.jpg", // Replace with actual image URL
      readLink: "https://www.dlshq.org/download2/bgita.pdf",
    },
    {
      id: 5,
      title: "How to destroy America in Three Easy Steps",
      genre: "Assorted",
      image: "https://m.media-amazon.com/images/I/91Aj-SVNdHL._SY466_.jpg", // Replace with actual image URL
      readLink: "https://drive.google.com/file/d/1Kwq80L2xKTnRONJzC5ZWZaxZnQqRIDRb/view?usp=sharing",
    },
    {
      id: 6,
      title: "An End to Upside Down Living: Reorienting Our Consciousness to Live Better and Save the Human Species",
      genre: "Dramatic",
      image: "https://m.media-amazon.com/images/I/71gepHHooVL._SY466_.jpg", // Replace with actual image URL
      readLink: "https://drive.google.com/file/d/1HSZusdx2mgyEvc2pUHLzHL_w8DeuITxH/view?usp=sharing",
    },
    {
      id: 7,
      title: "The Love Hypothesis",
      genre: "Romantic",
      image: "https://m.media-amazon.com/images/I/51qnj1cs7gL._SY445_SX342_.jpg", // Replace with actual image URL
      readLink: "https://drive.google.com/file/d/1JQcgAkq6EyPD-lzKxYhVGrGbhekqAG2K/view?usp=sharing",
    },
    {
      id: 8,
      title: "One Indian Girl",
      genre: "Romantic",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaZ0zfXRqMaWAIwUwgql5tZ0uyHudzW5SuXxLHHOqmlm_EZj2i", // Replace with actual image URL
      readLink: "https://www.junkybooks.com/book/reader.php?book=thebooks/63be777c80dbf-one-indian-girl.pdf",
    },
    {
      id: 9,
      title: "1857 Ka Savtantrta Samar",
      genre: "Assorted",
      image: "https://m.media-amazon.com/images/I/61NsVD4xLbL._SY466_.jpg", // Replace with actual image URL
      readLink: "https://www.dlshq.org/download2/bgita.pdf",
    },

  ];

  const [selectedFilters, setSelectedFilters] = useState([]);

  const handleFilterChange = (value) => {
    if (selectedFilters.includes(value)) {
      setSelectedFilters((prevFilters) =>
        prevFilters.filter((filter) => filter !== value)
      );
    } else {
      setSelectedFilters((prevFilters) => [...prevFilters, value]);
    }
  };
  const handleSortChange = (value) => {
    let sortedBooks = [...books]; // Create a copy of the original array
  
    switch (value) {
      case 'Religious':
        sortedBooks = sortedBooks.filter((book) => book.genre === 'Religious');
        break;
      case 'Romantic':
        sortedBooks = sortedBooks.filter((book) => book.genre === 'Romantic');
        break;
      case 'Dramatic':
        sortedBooks = sortedBooks.filter((book) => book.genre === 'Dramatic');
        break;
      case 'Assorted':
        sortedBooks = sortedBooks.filter((book) => book.genre === 'Assorted');
        break;
      default:
        // Default sorting logic (e.g., sorting by title, latest, etc.)
        // You can implement this logic as needed
        break;
    }
  
    setFilteredBooks(sortedBooks);
  };
  

  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <header>
          <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
            Book Collection
          </h2>
          <p className="mt-4 max-w-md text-gray-500">
            Discover our Book Collection, a curated selection of literary gems spanning various genres, ready to transport you to worlds of imagination and knowledge
          </p>
        </header>
        <div className="mt-8 block lg:hidden">
          <button
            className="flex cursor-pointer items-center gap-2 border-b border-gray-400 pb-1 text-gray-900 transition hover:border-gray-600"
          >
            <span className="text-sm font-medium"> Filters & Sorting </span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-4 w-4 rtl:rotate-180"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>

        <div className="mt-4 lg:mt-8 lg:grid lg:grid-cols-4 lg:items-start lg:gap-8">
          <div className="hidden space-y-4 lg:block">
            
            <div>
              <p className="block text-xs font-medium text-gray-700">Filters</p>

              <div className="mt-1 space-y-2">
                <details
                  className="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden"
                >
                  <summary
                    className="flex cursor-pointer items-center justify-between gap-2 p-4 text-gray-900 transition"
                  >
                    <span className="text-sm font-medium"> Genre </span>

                    <span className="transition group-open:-rotate-180">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-4 w-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </span>
                  </summary>

                  <div className="border-t border-gray-200 bg-white">
                    <ul className="space-y-1 border-t border-gray-200 p-4">
                      <li>
                        <label
                          htmlFor="Religious"
                          className="inline-flex items-center gap-2"
                        >
                          <input
                            type="checkbox"
                            id="Religious"
                            className="h-5 w-5 rounded border-gray-300"
                            value="Religious"
                            onChange={(e) => handleFilterChange(e.target.value)}
                          />

                          <span className="text-sm font-medium text-gray-700">
                            Religious
                          </span>
                        </label>
                      </li>
                      <li>
                        <label
                          htmlFor="Romantic"
                          className="inline-flex items-center gap-2"
                        >
                          <input
                            type="checkbox"
                            id="Romantic"
                            className="h-5 w-5 rounded border-gray-300"
                            value="Romantic"
                            onChange={(e) => handleFilterChange(e.target.value)}
                          />

                          <span className="text-sm font-medium text-gray-700">
                            Romantic
                          </span>
                        </label>
                      </li>
                      <li>
                        <label
                          htmlFor="Dramatic"
                          className="inline-flex items-center gap-2"
                        >
                          <input
                            type="checkbox"
                            id="Dramatic"
                            className="h-5 w-5 rounded border-gray-300"
                            value="Dramatic"
                            onChange={(e) => handleFilterChange(e.target.value)}
                          />

                          <span className="text-sm font-medium text-gray-700">
                            Dramatic
                          </span>
                        </label>
                      </li>
                      <li>
                        <label
                          htmlFor="Dramatic"
                          className="inline-flex items-center gap-2"
                        >
                          <input
                            type="checkbox"
                            id="Assorted"
                            className="h-5 w-5 rounded border-gray-300"
                            value="Assorted"
                            onChange={(e) => handleFilterChange(e.target.value)}
                          />

                          <span className="text-sm font-medium text-gray-700">
                            Assorted
                          </span>
                        </label>
                      </li>
                      

                      {/* Add more filter options */}
                    </ul>
                  </div>
                </details>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {/* ... (existing code to render each item) */}
              {books.map((book) => {
                if (
                  selectedFilters.length === 0 ||
                  selectedFilters.includes(book.genre)
                ) {
                  return (
                    <li key={book.id}>
                      <a href={book.readLink} className="group block overflow-hidden">
                        <img
                          src={book.image}
                          alt={book.title}
                          className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                        />
                        <div className="relative bg-white pt-3">
                          <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                            {book.title}
                          </h3>
                          <p className="mt-2">
                            <span className="sr-only"> Regular Price </span>
                            <span className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white">
                              <button>Read For Free</button>
                            </span>
                          </p>
                        </div>
                      </a>
                    </li>
                  );
                }
                return null;
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

