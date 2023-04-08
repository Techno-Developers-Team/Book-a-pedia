import React from 'react';

export default function home() {
    return (
      <div className="relative overflow-hidden bg-white">
        <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
          <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
            <div className="sm:max-w-xl">
              <h1 className="font text-5xl font-bold tracking-tight text-gray-900 sm:text-5xl sm:max-w-xl">
                Your Own E-Library
              </h1>
              <p className="mt-4 text-xl text-gray-500 sm:max-w-lg">
                This year, our new summer collection will shelter you from the harsh elements of a world that doesn't care
                if you live or die.
              </p>
            </div>
            <div>
              <div className="mt-10">
                {/* Decorative image grid */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                >
                  <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                    <div className="flex items-center space-x-6 lg:space-x-8">
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                          <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/JunglebookCover.jpg/330px-JunglebookCover.jpg"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Merchant_venice_tp.jpg/330px-Merchant_venice_tp.jpg"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Gullivers_travels.jpg/375px-Gullivers_travels.jpg"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLttHZ2xIUEs6w52yUj1mCaoRw11K4ep2BAQ&usqp=CAU"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRoAYn6250e1bb9lWI8KHcFznwyvIoiarqD5FgAzWGuQ40c03bt"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5UiyE5p2vgBxRKbFRP88lv4PpvkXgeJRSBQ&usqp=CAU"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0zKcHVDxYXywYAIfhM25T6hAodCqSXwzS1g&usqp=CAU"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
  
                <a
                  href="#"
                  className="inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700"
                >
                  Browse the collection
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  