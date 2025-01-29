import  { useState } from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub, FaDribbble, FaMailBulk, FaPhone } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { collection, addDoc } from 'firebase/firestore';
import { firestore } from '../firebase';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    Name: '',
    Email: '',
    Message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(firestore, 'messages'), {
        ...formData,
        timestamp: new Date(),
      });
      toast.success('Message sent successfully!', {
    
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setFormData({ Name: '', Email: '', Message: '' });
    } catch (error) {
      console.error('Error adding document: ', error);
      toast.error('Failed to send message. Please try again.', {
    
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  const contactDetails = [
    {
      icon: <FaLocationDot />,
      title: 'Address',
      info: 'Kigali, Rwanda',
    },
    {
      icon: <FaMailBulk />,
      title: 'Email',
      info: 'ainedushimire@gmail.com',
    },
    {
      icon: <FaPhone />,
      title: 'Phone',
      info: '+250 798 380 290',
    },
  ];

  const socialLinks = [
    {
      icon: <FaFacebook />,
      url: 'https://www.facebook.com/AineDushimire',
    },
    {
      icon: <FaInstagram />,
      url: 'https://www.instagram.com/aine_250/',
    },
    {
      icon: <FaLinkedin />,
      url: 'https://www.linkedin.com/in/aine-dushiimire-700a372a6/',
    },
    {
      icon: <FaGithub />,
      url: 'https://github.com/aine1100',
    },
    {
      icon: <FaDribbble />,
      url: 'https://www.dribbble.com/aine_dushimire',
    },
  ];

  return (
    <div className="flex flex-col mx-auto container justify-center items-center bg-white h-full p-10">
      <div className="flex flex-col gap-8 justify-center items-center rounded-md p-5 shadow-md bg-white">
        <div className="flex flex-col md:flex-row gap-10 md:gap-20">
          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-semibold text-black">Let's Talk</h2>
            <p className="text-md font-medium text-gray-600">
              Ready to discuss your project? Reach out to me through the form below.
            </p>
            {contactDetails.map((item, index) => (
              <div key={index} className="flex gap-5 bg-white w-[270px] p-2 items-center rounded-md shadow-sm">
                <div className="bg-[#A53DFF] h-10 w-10 rounded-md text-white flex items-center justify-center">
                  {item.icon}
                </div>
                <div className="flex flex-col">
                  <h3 className="text-md font-semibold text-gray-700">{item.title}</h3>
                  <p className="text-sm font-medium text-gray-600">{item.info}</p>
                </div>
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center gap-5 w-full md:w-auto">
            <input
              type="text"
              name="Name"
              value={formData.Name}
              onChange={handleChange}
              placeholder="Name"
              className="w-full md:w-[300px] px-4 py-2 text-sm text-black placeholder:text-gray-500 focus:outline-none border border-gray-300 rounded-md shadow-sm focus:border-purple-700 hover:bg-gray-50 h-10"
              required
            />
            <input
              type="email"
              name="Email"
              value={formData.Email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full md:w-[300px] px-4 py-2 text-sm text-black placeholder:text-gray-500 focus:outline-none border border-gray-300 rounded-md shadow-sm focus:border-purple-700 hover:bg-gray-50 h-10"
              required
            />
            <textarea
              name="Message"
              value={formData.Message}
              onChange={handleChange}
              placeholder="Message"
              className="w-full md:w-[300px] px-4 py-2 text-sm text-black placeholder:text-gray-500 focus:outline-none border border-gray-300 rounded-md shadow-sm focus:border-purple-700 hover:bg-gray-50 h-[100px] text-start items-start"
              required
            ></textarea>
            <button
              type="submit"
              className="w-32 h-10 text-white font-semibold rounded-md bg-[#A53DFF] transition-all duration-300"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Social Media Icons */}
        <div className="flex gap-4 items-center justify-center flex-wrap">
          {socialLinks.map((item, index) => (
            <a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-purple-700 text-white w-10 h-10 flex items-center justify-center rounded-md shadow-lg hover:bg-purple-800 transition-all"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
