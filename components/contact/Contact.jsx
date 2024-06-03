"use client";
import React from "react";
import Container from "../home/Container";

const Contact = () => {
  return (
    <Container>
      <div className="flex justify-center my-5">
        <h1 className="text-xl font-bold">
          Connect with one of our global offices
        </h1>
      </div>
      <div className="flex border p-2 gap-5 border-gray-400 my-5 rounded-md">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1726.5219775342184!2d96.17049031795754!3d16.81138225789472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c1ecb6e32dddc5%3A0x4ada44a13abf5acf!2sOcean%20Super%20Center!5e0!3m2!1sen!2smm!4v1717240915286!5m2!1sen!2smm"
          width={600}
          height={450}
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <div className="flex flex-col gap-5">
          <div>
            <h2 className="text-ld font-bold">Global Headquarters</h2>
            <p className="text-sm">
              No-223/9, moe kaung road, Yankin Tsp, Yangon City, Myanmar
            </p>
          </div>

          <div className="text-sm">
            <h2 className="text-lg font-bold">Phone / Fax </h2>
            <p>+ 95 989 862 6060</p>
            <p>+ 95 977 957 6009</p>
            <p>Fax: + 95 989 862 6060 </p>
          </div>

          <div className="text-sm">
            <h2 className="text-lg font-bold">
              Social Media / Blogger Information
            </h2>
            <a
              href="www.facebook.com"
              target="_blank"
              className="underline text-blue-700"
            >
              Facebook
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Contact;
