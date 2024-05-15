import React from 'react'
import location from "../assets/icons/location.svg"
function Contact() {
  return (
    <div className='w-full h-full flex px-[100px] flex-col gap-10 py-10'>
      <h1 className='font-madimi text-[45px] font-semibold flex items-center gap-3'><span>
        <img src={location} alt="" className='w-[30px]'/></span>You can visit us here</h1>
      <div className='flex justify-around'>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124202.9467059974!2d121.11052927182723!3d13.391132004784273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bce8d27f6f844d%3A0xf7cc1b1c943ab71b!2sCalapan%2C%20Oriental%20Mindoro!5e0!3m2!1sen!2sph!4v1715252991710!5m2!1sen!2sph" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      <div className='flex flex-col gap-5'>
        <h1 className='font-madimi text-[45px] font-semibold'>Luigie's Tasty Tempo</h1>
        <p>We are located at Calapan City, Oriental Mindoro.</p>
        <p>Contact Us via our e-mail: <br /><span className='font-madimi font-semibold'>tastytempo@gmail.com</span></p>
        <p>Contact No.: <br /><span className='font-madimi font-semibold'>091234567891</span></p>
      </div>
      </div>
      
    </div>
  )
}

export default Contact