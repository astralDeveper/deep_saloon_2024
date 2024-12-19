import React from "react";
import Button from "../../../Components/Button";
import Inputfield from "../../../Components/Inputfield";
import CheckBox from "../../../Components/CheckBox";

const PersonaInformation = () => {
  return (
    <div className="flex flex-col gap-y-8">
      {/* Basic section start here  */}
      <div className="flex items-center justify-between">
        <h1 className="text7 text-whiteColor font-semibold">
          Basic Information
        </h1>
        <Button
          btnname="Edit Information"
          btnStyle="text11 border-[1px] border-primaryColor px-4 py-3 text-primaryColor"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-x-4 gap-y-6">
        <Inputfield
          labelstyle="text-whiteColor text10"
          Labelname="Full name"
          placeholder="First name"
          inputStyle="text10 border-[1px] text-whiteColor border-borderColor 
          bg-transparent px-4 py-3 w-full"
        />
        <Inputfield
          labelstyle="text-whiteColor text10"
          Labelname="Last name"
          placeholder="First name"
          inputStyle="text10 border-[1px] text-whiteColor border-borderColor 
          bg-transparent px-4 py-3 w-full"
        />
        <Inputfield
          labelstyle="text-whiteColor text10"
          Labelname="Email Address"
          placeholder="Email Address"
          inputStyle="text10 border-[1px] text-whiteColor border-borderColor 
          bg-transparent px-4 py-3 w-full"
        />
        <Inputfield
          labelstyle="text-whiteColor text10"
          Labelname="Phone Number"
          placeholder="Phone Number"
          inputStyle="text10 border-[1px] text-whiteColor border-borderColor 
          bg-transparent px-4 py-3 w-full"
        />
        <Inputfield
          labelstyle="text-whiteColor text10"
          Labelname="Date of Birth"
          placeholder="Date of Birth"
          inputStyle="text10 border-[1px] text-whiteColor border-borderColor 
          bg-transparent px-4 py-3 w-full"
        />
        <Inputfield
          labelstyle="text-whiteColor text10"
          Labelname="Gender"
          placeholder="Gender"
          inputStyle="text10 border-[1px] text-whiteColor border-borderColor 
          bg-transparent px-4 py-3 w-full"
        />
        <div>
          <Button
            btnname="Save changes"
            btnStyle="text11 bg-primaryColor py-3 px-4 text-whiteColor"
          />
        </div>
      </div>
      {/* Basic section end here  */}

      {/* Location section start here  */}
      <div className="flex items-center justify-between">
        <h1 className="text7 text-whiteColor font-semibold">
          Location Details
        </h1>
        <Button
          btnname="Edit Information"
          btnStyle="text11 border-[1px] border-primaryColor px-4 py-3 text-primaryColor"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-x-4 gap-y-6">
        <Inputfield
          labelstyle="text-whiteColor text10"
          Labelname="City"
          placeholder="Your city"
          inputStyle="text10 border-[1px] text-whiteColor border-borderColor 
          bg-transparent px-4 py-3 w-full"
        />
        <Inputfield
          labelstyle="text-whiteColor text10"
          Labelname="Zip Code"
          placeholder="Your zip code"
          inputStyle="text10 border-[1px] text-whiteColor border-borderColor 
          bg-transparent px-4 py-3 w-full"
        />
        <div>
          <Button
            btnname="Save changes"
            btnStyle="text11 bg-primaryColor py-3 px-4 text-whiteColor"
          />
        </div>
      </div>
      {/* Location section end here  */}

      {/* Lifestyle section start here  */}
      <div className="flex items-center justify-between">
        <h1 className="text7 text-whiteColor font-semibold">
          Lifestyle Preferences
        </h1>
        <Button
          btnname="Edit Information"
          btnStyle="text11 border-[1px] border-primaryColor px-4 py-3 text-primaryColor"
        />
      </div>
      <div className="grid grid-cols-1 items-center gap-x-4 gap-y-2">
        <Inputfield
          labelstyle="text-whiteColor text10"
          Labelname="Occupation"
          placeholder="Your email address"
          inputStyle="text10 border-[1px] text-whiteColor border-borderColor 
          bg-transparent px-4 py-3 w-full"
        />
        <div className="flex flex-col gap-y-2">
          <p className="text11 text-whiteColor">Interests</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <div className="flex items-center py-2 gap-2">
                <CheckBox />
                <p className="text10 text-whiteColor">Beauty Trends</p>
              </div>
              <div className="flex items-center py-2 gap-2">
                <CheckBox />
                <p className="text10 text-whiteColor">
                  Family-Friendly Services
                </p>
              </div>
            </div>
            <div>
              <div className="flex items-center py-2 gap-2">
                <CheckBox />
                <p className="text10 text-whiteColor">Eco-Friendly Products</p>
              </div>
              <div className="flex items-center py-2 gap-2">
                <CheckBox />
                <p className="text10 text-whiteColor">
                  Budget-Friendly Options
                </p>
              </div>
            </div>
            <div>
              <div className="flex items-center py-2 gap-2">
                <CheckBox />
                <p className="text10 text-whiteColor">Luxury Services</p>
              </div>
            </div>
          </div>
          <div>
            <Button
              btnname="Save changes"
              btnStyle="text11 bg-primaryColor py-3 px-4 text-whiteColor"
            />
          </div>
        </div>
      </div>
      {/* Lifestyle section end here  */}

      {/* Service section start here  */}
      <div className="flex items-center justify-between">
        <h1 className="text7 text-whiteColor font-semibold">
          Service Preferences
        </h1>
        <Button
          btnname="Edit Information"
          btnStyle="text11 border-[1px] border-primaryColor px-4 py-3 text-primaryColor"
        />
      </div>
      <div className="grid grid-cols-1 items-center gap-x-4 gap-y-6">
        <Inputfield
          labelstyle="text-whiteColor text10"
          Labelname="Preferred Services"
          placeholder="Haircut & Styling, Manicure & Pedicure, Massage Therapy"
          inputStyle="text10 border-[1px] text-whiteColor border-borderColor 
          bg-transparent px-4 py-3 w-full"
        />
        <Inputfield
          labelstyle="text-whiteColor text10"
          Labelname="Frequency of Visits"
          placeholder="Weekly"
          inputStyle="text10 border-[1px] text-whiteColor border-borderColor 
          bg-transparent px-4 py-3 w-full"
        />
        <div className="flex flex-col gap-y-2">
          <p className="text11 text-whiteColor">Preferred Appointment Times</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <div className="flex items-center py-2 gap-2">
                <CheckBox />
                <p className="text10 text-whiteColor">Morning (8 AM - 12 PM)</p>
              </div>
              <div className="flex items-center py-2 gap-2">
                <CheckBox />
                <p className="text10 text-whiteColor">
                  Afternoon (12 PM - 4 PM)
                </p>
              </div>
            </div>
            <div>
              <div className="flex items-center py-2 gap-2">
                <CheckBox />
                <p className="text10 text-whiteColor">Evening (4 PM - 8 PM)</p>
              </div>
              <div className="flex items-center py-2 gap-2">
                <CheckBox />
                <p className="text10 text-whiteColor">Weekdays Only</p>
              </div>
            </div>
            <div>
              <div className="flex items-center py-2 gap-2">
                <CheckBox />
                <p className="text10 text-whiteColor">Weekend Only</p>
              </div>
              <div className="flex items-center py-2 gap-2">
                <CheckBox />
                <p className="text10 text-whiteColor">
                  Flexible Timing (Any available time)
                </p>
              </div>
            </div>
          </div>
          <div>
            <Button
              btnname="Save changes"
              btnStyle="text11 bg-primaryColor py-3 px-4 text-whiteColor"
            />
          </div>
        </div>
      </div>
      {/* Service section end here  */}

      {/* Family section start here  */}
      <div className="flex items-center justify-between">
        <h1 className="text7 text-whiteColor font-semibold">
          Family Information
        </h1>
        <Button
          btnname="Edit Information"
          btnStyle="text11 border-[1px] border-primaryColor px-4 py-3 text-primaryColor"
        />
      </div>
      <div
        className="grid grid-cols-1 md:grid-cols-[2fr_auto] 
      items-end gap-x-4 md:gap-y-6 gap-y-3"
      >
        <Inputfield
          labelstyle="text-whiteColor text10"
          Labelname="Special Occasions"
          placeholder="Special occasions"
          inputStyle="text10 border-[1px] text-whiteColor border-borderColor 
          bg-transparent px-4 py-3 w-full"
        />

        <Button
          btnname="Add Family Members"
          btnStyle="text10 bg-whiteColor py-3 px-3 text-secondaryColor"
        />
        <div>
          <Button
            btnname="Save changes"
            btnStyle="text11 bg-primaryColor py-3 px-4 text-whiteColor"
          />
        </div>
      </div>
      {/* Family section end here  */}
    </div>
  );
};

export default PersonaInformation;
