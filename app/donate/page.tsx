"use client"
import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import img1 from "@/public/support1.png";
import img2 from "@/public/support2.png";
import Image from "next/image";

const SupportPage = () => {
  function redirection() {
    window.location.href = 'https://rzp.io/rzp/deIkjTJ0';
  }
    return (
      <>
      <Navbar/>
    <section className={`py-20`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="min-h-screen bg-background">
        <h1 className="text-5xl font-bold mb-16 text-center">Support Our Mission</h1>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Make a Difference Section */}
          <div className="space-y-8">
            {/* Make a Difference Image */}
            <div className="rounded-lg overflow-hidden shadow-lg mb-8">
              <Image
                src={img1}
                alt="Make a Difference"
                className="w-full h-64 object-cover"
              />
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">Make a Difference</h2>
              <p className="text-lg text-gray-600 mb-8">
                Adroid Foundation relies on the generosity of individuals and organizations to carry out its mission of 
                empowering communities through education. Your donation supports scholarship programs, infrastructure 
                development, teacher training, and educational resources.
              </p>
              <div className="space-y-4">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3">Online Donation</h3>
                  <p className="text-gray-600 mb-4">Make a secure donation via our website.</p>
                  <Button onClick={redirection}>Donate Now</Button>
                </div>
                {/* <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3">Bank Transfer</h3>
                  <p className="text-gray-600 mb-4">For details, please reach out to donations@adroidfoundation.org</p>
                  <Button variant="secondary">Get Details</Button>
                </div> */}
              </div>
            </div>
          </div>

          {/* Volunteer Section */}
          <div className="space-y-8">
            {/* Volunteer Image */}
            <div className="rounded-lg overflow-hidden shadow-lg mb-8">
              <Image
                src={img2}
                alt="Volunteer With Us"
                className="w-full h-64 object-contain"
              />
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">Volunteer With Us</h2>
              <p className="text-lg text-gray-600 mb-8">
                Join our volunteer program and help make a difference! We welcome professionals, educators, and 
                passionate individuals to contribute their time and skills to our educational and community initiatives.
              </p>
              <form className="bg-white p-8 rounded-lg shadow-lg">
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                    <input type="text" className="w-full px-4 py-2 border rounded-lg" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input type="email" className="w-full px-4 py-2 border rounded-lg" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Area of Interest</label>
                    <select className="w-full px-4 py-2 border rounded-lg">
                      <option>Teaching</option>
                      <option>Mentoring</option>
                      <option>Administration</option>
                      <option>Event Management</option>
                    </select>
                  </div>
                  <Button className="w-full">Join As Volunteer</Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
   </div>
    </section>
    </>
    )
};
export default SupportPage;
