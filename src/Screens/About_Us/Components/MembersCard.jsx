import React from "react";
import { MembersCardData } from "../../../Utils/DummyData";
import Button from "../../../Components/Button";

const MembersCard = () => {
    return (
        <>
            <div className="bg-gray  max-w-screen mx-auto sm:p-10 p-4 md:p-20">
                <div className="flex justify-between items-start my-10">
                    <h1 className="heading1 leading-[60px] text-whiteColor font-semibold">
                        Say to our incredible <br /> team members.
                    </h1>
                    <div>
                        <p className="text-whiteColor py-2">
                            Praesent sagittis eros in convallis rutrum. Donec <br /> auctor
                            nibh justo. Vestibu tincidunt, libero sit.
                        </p>
                        <Button
                            title="Join Our Team"
                            btnStyle={"bg-primaryColor rounded-md text-whiteColor"}
                        />
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3  lg:grid-cols-4 gap-5 gap-y-8">
                    {MembersCardData.map((item, ind) => {
                        return (
                            <div
                                key={ind}
                                className="rounded-xl bg-secondaryColor border-2 border-darkColor overflow-hidden shadow-shadow1 flex flex-col"
                            >
                                <div className=" text-center px-4 py-0">
                                    <div className="flex justify-center items-center py-4 rounded-3xl">
                                        <img
                                            className=" h-[270px] object-contain"
                                            src={item.img}
                                            alt={item.img}
                                            draggable={false}
                                        />
                                    </div>
                                    <div className="py-4">
                                        <h1 className="text4 font-semibold text-whiteColor">
                                            {item.title}
                                        </h1>
                                        <p className="text5 text-offwhite">{item.destination}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default MembersCard;
