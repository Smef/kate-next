"use client";

import { useState } from "react";
import EmailIcon from "@/components/icons/EmailIcon";
import LoadingSpinner from "@/components/LoadingSpinner";
import { useRouter } from "next/navigation";

export default function Contact() {
  const [processing, setProcessing] = useState(false);
  const router = useRouter();

  const handleSubmit = async (formData: FormData) => {
    setProcessing(true);
    const response = await fetch("/api/contact", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      // Form submitted successfully
      router.push("/contact/success");
    } else {
      // Handle error case
      console.error("Form submission failed");
    }
    setProcessing(false);
  };

  return (
    <div className="gap-12 sm:flex">
      <div className="sm:w-1/4">
        <h2 className="pb-2 text-2xl">Wanna talk to Kate?</h2>

        <div className="bg-green mb-6 h-2 w-40 md:w-60" />

        <p className="pb-8 font-serif text-xl lg:pb-16">
          Would you like to purchase a piece you saw or commission one of your own? <br />
          <br />
          Let me know here!
        </p>
      </div>

      <form className="bg-ice px-4 py-6 lg:px-10" action={handleSubmit}>
        <div className="grid grid-cols-3">
          <label
            className="text-cerulean border-r-2 border-b-2 border-white py-3 pr-3 text-right font-normal md:text-2xl"
            htmlFor="name"
          >
            Your Name
          </label>

          <input
            id="name"
            placeholder="Kermit LeFrog"
            type="text"
            className="bg-ice col-span-2 border-b-2 border-white pl-3 md:text-xl"
            name="name"
          />

          <label
            htmlFor="email"
            className="text-cerulean border-r-2 border-b-2 border-white py-3 pr-3 text-right font-normal md:text-2xl"
          >
            Email Address
          </label>

          <input
            id="email"
            v-model="form.email"
            placeholder="kermit@themuppets.com"
            name="email"
            type="email"
            className="bg-ice col-span-2 border-b-2 border-white pl-3 md:text-xl"
            required
          />

          <label
            htmlFor="message"
            className="text-cerulean border-r-2 border-b-2 border-white py-3 pr-3 text-right font-normal md:text-2xl"
            required
          >
            Message
          </label>

          <textarea
            id="message"
            v-model="form.message"
            placeholder="Hi ho there, Kermit LeFrog here..."
            name="message"
            className="bg-ice col-span-2 border-b-2 border-white p-3 md:text-xl"
            rows={6}
            required
          />
        </div>

        <div className="flex flex-col items-center justify-between pt-5 lg:flex-row">
          <div className="flex items-center justify-end">
            <button
              disabled={processing}
              className="text-cerulean hover:bg-ice-400 active:bg-ice-600 flex items-center gap-3 px-5 py-3 text-2xl font-normal hover:rounded-sm disabled:text-gray-400 disabled:hover:bg-gray-200"
              type="submit"
            >
              <span>Send</span>
              {processing ? <LoadingSpinner className="inline h-8" /> : <EmailIcon className="inline h-8" />}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
