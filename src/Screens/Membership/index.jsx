import React from "react";
import Container from "../../Components/Container";
import MembershipTable from "./Components/MembershipTable";
import Table from "./Components/Table";

const Membership = () => {
  return (
    <Container>
      <div className="bg-secondaryColor py-12 ">
        <div className="w-[80%] mx-auto">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-y-2 lg:gap-y-0">
            <MembershipTable
              pricingName="Essential"
              price="$12.95"
              yearlyPrice="$155.40/year"
            />
            <MembershipTable
              pricingName="Plus"
              price="$24.95"
              yearlyPrice="$299.40/year"
            />
            <MembershipTable
              pricingName="Premium"
              price="$49.95"
              yearlyPrice="$599.40/year"
            />
          </div>
        </div>
      </div>
      <div className="w-full bg-black py-3">
        <Table />
      </div>
      <div className="w-full bg-black py-3"></div>
    </Container>
  );
};

export default Membership;
