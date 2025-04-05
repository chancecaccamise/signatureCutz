import React from "react";
import { useForm } from "@formspree/react";

export function ExampleForm() {
  const [state, handleSubmit] = useForm("mkggekny");

  if (state.succeeded) {
    return <h1 className="text-white">Thanks for submitting!</h1>;
  }

  return (
    <form
      className="grid grid-cols-2 gap-6 p-6 border border-gray-300 rounded-md shadow-sm"
      onSubmit={handleSubmit}
    >
      <fieldset>
        <div className="flex flex-col gap-2">
          <label className="block text-sm font-medium text-gray-300" htmlFor="first-name">
            First Name
          </label>
          <input
            className="w-full h-10 px-3 bg-[#1e2632] text-white border border-gray-600 rounded-md shadow-sm focus:ring-2 focus:ring-green-600 focus:border-green-600 placeholder-gray-500"
            id="first-name"
            name="first-name"
            required
            placeholder="Enter your first name"
          />
        </div>

        <div className="flex flex-col gap-2 mt-4">
          <label className="block text-sm font-medium text-gray-300" htmlFor="email">
            Email
          </label>
          <input
            className="w-full h-10 px-3 bg-[#1e2632] text-white border border-gray-600 rounded-md shadow-sm focus:ring-2 focus:ring-green-600 focus:border-green-600 placeholder-gray-500"
            id="email"
            name="email"
            required
            placeholder="Enter your email"
          />
        </div>
      </fieldset>

      <fieldset>
        <div className="flex flex-col gap-2">
          <label className="block text-sm font-medium text-gray-300" htmlFor="last-name">
            Last Name
          </label>
          <input
            className="w-full h-10 px-3 bg-[#1e2632] text-white border border-gray-600 rounded-md shadow-sm focus:ring-2 focus:ring-green-600 focus:border-green-600 placeholder-gray-500"
            id="last-name"
            name="last-name"
            required
            placeholder="Enter your last name"
          />
        </div>

        <div className="flex flex-col gap-2 mt-4">
          <label className="block text-sm font-medium text-gray-300" htmlFor="number">
            Phone Number
          </label>
          <input
            className="w-full h-10 px-3 bg-[#1e2632] text-white border border-gray-600 rounded-md shadow-sm focus:ring-2 focus:ring-green-600 focus:border-green-600 placeholder-gray-500"
            id="number"
            name="number"
            placeholder="(000) 000-0000"
            required
          />
        </div>
      </fieldset>

      <fieldset className="col-span-2">
        <div className="flex flex-col gap-2">
          <label className="block text-sm font-medium text-gray-300" htmlFor="message">
            Message
          </label>
          <textarea
            className="w-full h-20 px-3 bg-[#1e2632] text-white border border-gray-600 rounded-md shadow-sm focus:ring-2 focus:ring-green-600 focus:border-green-600 placeholder-gray-500"
            id="message"
            name="message"
            placeholder="Write your message here..."
          ></textarea>
        </div>
      </fieldset>

      <div className="col-span-2 flex justify-end">
        <button
          className="px-6 py-2 text-sm font-medium text-black bg-white rounded-md shadow-sm hover:bg-green-900 focus:ring-2 focus:ring-green-900"
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
