

import React from 'react'

function Home() {
  return (
    <div className=" bg-gray-50">
     

     <div className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => (window.location.href = "/")}
          >
            <i className="text-yellow-500 fa-solid fa-sack-dollar text-2xl"></i>
            <span className="text-2xl font-bold text-blue-600">My Finance</span>
          </div>

          <div className="flex gap-6 items-center">
            <button
              onClick={() => (window.location.href = "/login")}
              className="text-gray-700 hover:text-blue-600 font-medium hover:underline"
            >
              Kirish
            </button>

            <button
              onClick={() => (window.location.href = "/register")}
              className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 font-medium"
            >
              Ro'yxatdan o'tish
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 pt-32 pb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
        <i className="text-yellow-500 fa-solid fa-sack-dollar text-5xl mb-4 inline-block"></i>
          Moliyangizni <span className="text-blue-600">Nazorat</span> Qiling
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Daromad, chiqim, qarz va kreditlaringizni bir joyda boshqaring.
          Shaxsiy moliyaviy maqsadlaringizga erishing.
        </p>

        <div className="flex gap-4 justify-center mt-8 flex-wrap">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 text-lg font-medium">
            Bepul boshlang →
          </button>

          <button
            onClick={() => (window.location.href = "/login")}
            className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 text-lg font-medium"
          >
            Kirish <i className="fa-solid fa-arrow-right-to-bracket ml-2"></i>
          </button>
        </div>

        <p className="text-gray-500 text-sm mt-8">
          Agar oldin ro'yxatdan o'tgan bo'lsangiz
          <button
            onClick={() => (window.location.href = "/login")}
            className="text-blue-600 hover:underline font-medium"
          >
            KIRISH
          </button>
          tugmasini bosing. <br /> Yangi foydalanuvchi bo'lsangiz
          <button
            onClick={() => (window.location.href = "/register")}
            className="text-blue-600 hover:underline font-medium"
          >
            Ro'yxatdan o'tish
          </button>
          tugmasini bosing.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">
            Nima imkoniyatlar bor
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-3 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition border border-gray-100">
            <div className="bg-blue-100 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
              <i className="fa-solid fa-building-columns text-2xl text-blue-600"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Hisoblar</h3>
            <p className="text-gray-600 text-sm">
              Bank kartalar va naqd pul boshqarish
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition border border-gray-100">
            <div className="bg-green-100 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
              <i className="fa-solid fa-arrow-up-right-dots text-2xl text-green-600"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Daromad</h3>
            <p className="text-gray-600 text-sm">
              Barcha daromadingizni kuzating
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition border border-gray-100">
            <div className="bg-orange-100 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
              <i className="fa-solid fa-file-export text-2xl text-orange-600"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Chiqim</h3>
            <p className="text-gray-600 text-sm">
              Harajatlaringizni kategoriya bo'yicha tahlil qiling
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition border border-gray-100">
            <div className="bg-purple-100 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
              <i className="fa-regular fa-handshake text-2xl text-purple-600"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Qarzlar</h3>
            <p className="text-gray-600 text-sm">
              Berilgan va olingan qarzlarni boshqarish
            </p>
          </div>
        </div>
      </div>

      <div className="bg-blue-600 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white">
              Qanday boshlash kerak?
            </h2>
            <div className="w-20 h-1 bg-white mx-auto mt-3 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white text-blue-600 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 shadow-lg">
                1
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Ro'yxatdan o'ting
              </h3>
              <p className="text-blue-100">Bepul hisob yarating</p>
            </div>

            <div className="text-center">
              <div className="bg-white text-blue-600 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 shadow-lg">
                2
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Hisob qo'shing
              </h3>
              <p className="text-blue-100">Bank yoki hisobingizni qo'shing</p>
            </div>

            <div className="text-center">
              <div className="bg-white text-blue-600 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 shadow-lg">
                3
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Kuzating</h3>
              <p className="text-blue-100">
                Statistika va hisobotlarni kuzating
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Home