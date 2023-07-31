import React from 'react'

const About = () => {
  return (
    <div className='my-40'>
        <h1 className='text-6xl font-bold text-white text-center py-16 max-md:text-4xl'>LA NOSTRA STORIA</h1>
        <div className="flex w-5/6 mx-auto max-lg:block">
            <img src="https://3.bp.blogspot.com/--JUouHMEsUQ/VVCvvXuUArI/AAAAAAAAXTg/Vo65ggPFPnM/s1600/domus20.jpg" alt="cucina-antica" className='w-2/4 rounded-lg max-lg:w-full max-lg:mb-5'/>
            <div>
                <h3 className='text-gray-200 text-2xl ml-10 text-justify max-lg:ml-0'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat accusantium sapiente tempora sed dolore esse deserunt eaque excepturi, delectus error accusamus vel eligendi, omnis beatae. Quisquam, dicta. Eos quod quisquam esse recusandae vitae neque dolore, obcaecati incidunt sequi blanditiis est exercitationem molestiae delectus saepe odio eligendi modi porro eaque in libero minus unde sapiente consectetur architecto. Ullam rerum, nemo iste ex, eaque perspiciatis nisi, eum totam velit saepe sed quos similique amet. Ex, voluptate accusamus nesciunt totam vitae esse iste.</h3>
            </div>
        </div>
        <div class="w-full">
          <section class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
              <div class="text-center pb-12">
                  <h2 class="text-sm text-transparent bg-clip-text font-bold bg-gradient-to-br from-blue-600 via-cyan-400 to-pink-300 md:text-xl">
                      Sempre presenti per offrirvi il meglio.
                  </h2>
                  <h1 class="font-bold text-6xl max-md:text-4xl font-heading text-white">
                      IL NOSTRO TEAM  
                  </h1>
              </div>
              <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div class="w-full bg-gray-800 rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center">
                      <div class="mb-8">
                          <img class="object-center object-cover rounded-full h-36 w-36" src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" alt="photo"/>
                      </div>
                      <div class="text-center">
                          <p class="text-xl text-white font-bold mb-2">Domenico Perugini</p>
                          <p class="text-base text-gray-400 font-normal">CEO</p>
                      </div>
                  </div>
                  <div class="w-full bg-gray-800 rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center">
                      <div class="mb-8">
                          <img class="object-center object-cover rounded-full h-36 w-36" src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" alt="photo"/>
                      </div>
                      <div class="text-center">
                          <p class="text-xl text-white font-bold mb-2">Daniele Sartorini</p>
                          <p class="text-base text-gray-400 font-normal">Marketing</p>
                      </div>
                  </div>
                  <div class="w-full bg-gray-800 rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center">
                      <div class="mb-8">
                          <img class="object-center object-cover rounded-full h-36 w-36" src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" alt="photo"/>
                      </div>
                      <div class="text-center">
                          <p class="text-xl text-white font-bold mb-2">Luca Centofiori</p>
                          <p class="text-base text-gray-400 font-normal">Ing. Gestionale</p>
                      </div>
                  </div>
              </div>
          </section>
      </div>
    </div>
  )
}

export default About