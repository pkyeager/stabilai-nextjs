import React from "react";
import Link from "next/link";
import Footer from "@/components/footer";
import Header from "@/components/header";

const Privacy: React.FC = () => {
  return (
    <div>
      <Header />
      <h1>Privacy Policy</h1>
      <h2>1. An overview of data protection</h2>
      <p>General information</p>
      <p>
        The following information will provide you with an easy to navigate
        overview of what will happen with your personal data when you visit this
        website. The term “personal data” comprises all data that can be used to
        personally identify you. For detailed information about the subject
        matter of data protection, please consult our Data Protection
        Declaration, which we have included beneath this copy.
      </p>
      <Footer />
    </div>
  );
};

export default Privacy;
