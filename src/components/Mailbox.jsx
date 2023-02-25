import React from "react";
import mailImg from "../assets/mailbox.png";

const Mailbox = () => {
  return (
    <section id="Contact">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md ">
        <div className="flex justify-between">
          <div className="flex flex-col mt-16">
            <h2 className="mb-4 text-4xl  font-bold text-center text-[#EAD4AC] ">
              Contact Us
            </h2>
            <p className="mb-8 lg:mb-16 font-light text-center text-[#b0885a]  sm:text-xl">
              We’d really love to hear from you, like really. We value your
              feedback either negative or positive. So don’t hesitate to contact
              us.
            </p>
          </div>

          <div>
            <img src={mailImg} alt="" />
          </div>
        </div>

        <form action="#" className="space-y-8">
          <div>
            <label
              for="email"
              className="block mb-2 text-sm font-medium text-[#b0885a] "
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              className="shadow-sm bg-[#0d2b25] border border-[#b0885a] rounded-lg text-white  block w-full p-2.5 "
              placeholder="name@example.com"
              required
            />
          </div>
          <div>
            <label
              for="subject"
              className="block mb-2 text-sm font-medium text-[#b0885a] "
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="shadow-sm bg-[#0d2b25] border border-[#b0885a] text-white text-sm rounded-lg  block w-full p-2.5 "
              placeholder="Let us know how we can help you"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label
              for="message"
              className="block mb-2 text-sm font-medium text-[#b0885a]"
            >
              Your message
            </label>
            <textarea
              id="message"
              rows="6"
              className="shadow-sm bg-[#0d2b25] border border-[#b0885a] text-white text-sm rounded-lg  block w-full p-2.5 "
              placeholder="Leave a comment..."
            ></textarea>
          </div>
          <button type="submit" className="bg-[#0d2b25]">
            Send message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Mailbox;
