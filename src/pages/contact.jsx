import React from "react";
import  { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_es0p2g7', 'template_bwi5dy4', form.current, '4AbTeyYKj3yt9Dw2r')
      .then((result) => {
          console.log(result.text);
          window.alert("Message Sent");
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <>
      <section id="contact" className="bg-gray-50 py-20 lg:py-[120px] overflow-hidden relative z-10">
        <div className="container">
          <div className="flex flex-wrap -mx-4 lg:justify-between">
            <div className="w-full px-4 lg:w-1/2 xl:w-6/12">
              <div className="mb-12 max-w-[570px] lg:mb-0">
                <span className="block mb-4 text-base font-semibold text-primary text-blue-600">
                  Contact Us
                </span>
                <h2 className="mb-6 text-[32px] font-bold uppercase text-dark sm:text-[40px] lg:text-[36px] xl:text-[40px]">
                  GET IN TOUCH
                </h2>

                <div className="mb-8 flex w-full max-w-[370px]">
                 <div class="space-y-4 mt-6">
                    <div class="flex items-center  ">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" class="w-5 h-5 ">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z">
                                </path>
                                </svg>
                                <p class="ml-4 text-center text-sm dark:text-accent-foreground">
                                    <a class=" underline-offset-4 hover:text-primary text-black" href="mailto:jjayavardhan81.gmail.com">hellojv.dev.gmail.com</a>
                                </p>
                    </div>
                    <div class="flex items-center  ">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" class="w-5 h-5 ">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z">
                            </path>
                        </svg>
                    <p class="ml-4 text-center text-sm dark:text-accent-foreground">
                        <a class="underline underline-offset-4 hover:text-primary text-black" href="tel:+91-8310376504">+91-8310376504</a>
                    </p>
                    </div>
                    <div class="flex items-center  ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" fill="currentColor" class="h-4 w-4" height="24" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z">
                            </path>
                        </svg>
                        <p class="ml-4 text-center text-sm dark:text-accent-foreground ">
                            <a class="underline underline-offset-4 hover:text-primary text-black" href="https://github.com/jayavardhanjv">Jayavardhan J</a>
                        </p>
                        </div>
                        <div class="flex items-center  ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="h-4 w-4" viewBox="0 0 24 24">
                                <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z">
                                </path>
                            </svg>
                            <p class="ml-4 text-center text-sm dark:text-accent-foreground">
                                <a class="underline underline-offset-4 hover:text-primary text-black" href="https://www.linkedin.com/in/jayavrdhan-jv/">Jayavrdhan J</a>
                            </p>
                        </div>
                    <div class="flex items-center  ">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" class="w-5 h-5 ">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z">
                                </path>
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z">
                            </path>
                        </svg>
                        <p class="ml-4 text-center text-sm dark:text-accent-foreground">Bengaluru, Karnataka, India</p>
                    </div>
                </div>
                </div>
                
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
              <div className="relative p-8 bg-white rounded-lg shadow-lg sm:p-12">
                <form ref={form} onSubmit={sendEmail}>
                  <ContactInputBox
                    type="text"
                    name="user_name"
                    placeholder="Your Name"
                  />
                  <ContactInputBox
                    type="text"
                    name="user_email"
                    placeholder="Your Email"
                  />
                  <ContactInputBox
                    type="text"
                    name="user_phno"
                    placeholder="Your Phone"
                  />
                  <ContactTextArea
                    row="6"
                    placeholder="Your Message"
                    name="message"
                    defaultValue=""
                  />
                  <div>
                    <button
                      type="submit"
                      className="w-full p-3 text-white  border rounded   hover:bg-opacity-90 bg-blue-600"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
                <div>
                  <span className="absolute -top-10 -right-9 z-[-1]">
                    <svg
                      width={100}
                      height={100}
                      viewBox="0 0 100 100"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0 100C0 44.7715 0 0 0 0C55.2285 0 100 44.7715 100 100C100 100 100 100 0 100Z"
                        class="bg-blue-500"
                      />
                    </svg>
                  </span>
                  <span className="absolute -right-10 top-[90px] z-[-1]">
                    {/*  */}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </section>
      
        
    </>
  );
};

export default Contact;

const ContactTextArea = ({ row, placeholder, name, defaultValue }) => {
  return (
    <>
      <div className="mb-6">
        <textarea
          rows={row}
          placeholder={placeholder}
          name={name}
          className="border-[f0f0f0] w-full resize-none rounded border py-3 px-[14px] text-base text-body-color outline-none focus:border-primary focus-visible:shadow-none"
          defaultValue={defaultValue}
        />
      </div>
    </>
  );
};

const ContactInputBox = ({ type, placeholder, name }) => {
  return (
    <>
      <div className="mb-6">
        <input
          type={type}
          placeholder={placeholder}
          name={name}
          className="border-[f0f0f0] w-full rounded border py-3 px-[14px] text-base text-body-color outline-none focus:border-primary focus-visible:shadow-none"
        />
      </div>
    </>
  );
};
