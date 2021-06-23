import React, {useState} from 'react'

import HeroSVG from './HeroSVG';
import FindSVG from './FindSVG';
import MailSVG from './MailSVG';

import BookShelf from '../bookshelf.png';
import BookMark from '../bookmark.png';
import FloppyDisk from '../floppy-disk.png';
import SearchBook from '../searchBook.png';

const HomeComponent = () => {


    const [formData, setFormData] = useState({name:'', email: '', message: ''});

    const [isSent, setIsSent] = useState(false);

    const verifyFields = (e) =>{

        e.preventDefault();

        for(let key of Object.keys(formData)){
          if(formData[key].length === 0) return false;
        }
        
        setIsSent(true);

    }

    return (
        <>
        <div className="md:flex items-center gap-14 mb-20">
        <HeroSVG />
        <div className="md:w-3/6 flex flex-col  items-start gap-4">
          <h1 className="font-semibold text-3xl">Books are awesome.</h1>
          <p className="text-xs font-regular text-gray-400">Get surprised with the outstanding variety that we have to offer you. Choose among best sellers and discover stories that are changing the world.</p>
          
        </div>
      </div>

      <div className="md:flex justify-between gap-14 mb-32" id="favorites">
        <div className="md:w-3/6 flex flex-col justify-center items-end gap-4 text-right">
          <h2 className="font-semibold text-2xl">Find your favorite books</h2>
          <p className="text-xs text-gray-400 text-right">It is only a matter of time until you get to find a book that you will fall in love with. Explore through the vast collection that is in all the book genres that are in our platform and make reading the best habit for you</p>
        </div>
        <FindSVG />
      </div>

      <div className="flex flex-col justify-center items-center text-center mb-20" id="features">
        <h1 className="font-semibold text-3xl mb-5 ">What you can do with Book Keepr</h1>
        <p className="text-xs text-gray-400 mb-10 mx-12">
            Looking for a place to keep record of how many pages of Game of Thrones have you read so far? Do not worry, we have you covered.
            Choose between the several options that BookKeepr has for you and get amazed by its amazing features.
        </p>

        <div className="w-3/6 flex flex-col gap-5 items-center">

            <div className="flex flex-col md:flex-row justify-between gap-6">
              
              <div className="flex flex-col gap-2 text-left">
                <img src={BookShelf} alt="" className="w-20" />
                <h2 className="font-semibold">Save your books</h2>
                <p className="text-xs">Keep track of the books that you are reading at this moment and don't lose your progress!</p>
              </div>
               
              <div className="flex flex-col gap-2 text-left">
                <img src={BookMark} alt="" className="w-20" />
                <h2 className="font-semibold">Bookmarks</h2>
                <p className="text-xs">Save the most amazing phrases or quotes while you are reading to consult them later. </p>
              </div>

            </div>

            <div className="flex flex-col md:flex-row justify-between gap-6">
              
              <div className="flex flex-col gap-2 text-left">
                <img src={FloppyDisk} alt="" className="w-20" />
                <h2 className="font-semibold">Download</h2>
                <p className="text-xs">Did you like a book but you are out of internet? Just download it so you can reading while being disconnected!</p>
              </div>
               
              <div className="flex flex-col gap-2 text-left">
                <img src={SearchBook} alt="" className="w-20" />
                <h2 className="font-semibold">Search</h2>
                <p className="text-xs">Use our advanced search engine and find the best results according to what you are looking for!</p>
              </div>

            </div>

        </div>
      </div>

        <div>
            <h1 className="font-semibold text-3xl mb-5" id="contact">Let's talk!</h1>
            <div className=" md:flex gap-10 justify-between text-xs">
               <div className="w-full md:w-3/6 text-gray-400">
                   <p className="mb-5">Do you have any questions regarding our services? Just hit us with a message and we will reach out to you as soon as possible!</p>
                   <form action="#" className=" flex flex-col justify-between bg-transparent text-xs flex gap-2 mb-5">
                       <div>
                           <p className="mb-2">Your name</p>
                           <input type="text" name="name" className="h-3/6 bg-indigo-50 rounded-md" onChange={(e) => {setFormData({...formData, [e.target.name]:e.target.value})}} />
                       </div>

                       <div>
                           <p className="mb-2">Your email</p>
                           <input type="text"  name="email" className="h-3/6 bg-indigo-50 rounded-md" onChange={(e) => {setFormData({...formData, [e.target.name]:e.target.value})}}/>
                       </div>

                       <div>
                           <p className="mb-2">Your message</p>
                           <textarea name="message" id="" rows="8" className="w-full bg-indigo-50 rounded-md" onChange={(e) => {setFormData({...formData, [e.target.name]:e.target.value})}}></textarea>
                       </div>
                       <button className={`w-3/6 p-1 rounded bg-blue-${isSent? '300': '500'} text-white`} disabled={isSent} onClick={(e)=> verifyFields(e)}>{isSent? 'Sent!': 'Send'}</button>
                    </form>
               </div>
               <div className="w-full flex flex-col md:w-3/6 text-xs text-gray-400">
                    <MailSVG />
                    <div className="flex gap-2 items-center mb-4">
                        <i class="fas fa-thumbtack"></i>
                        <div>
                            <p>Av. Bernardo Quintana #132, C.P. 43225</p>
                            <p>Querétaro de Arteaga, México</p>
                        </div>
                    </div>

                    <div className="flex gap-2 mb-1">
                        <i class="fas fa-phone"></i>
                        <p>+52 1 442 636 5345</p>
                    </div>

                    <div className="flex gap-2">
                        <i class="fas fa-envelope"></i>
                        <p>info@bookkeepr.com</p>
                    </div>

               </div>
            </div>
        </div>

      </>

    )
}

export default HomeComponent
