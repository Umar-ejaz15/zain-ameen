import React from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";

const NotAvailable = () => {
  const location = useLocation();
  
  return (
    <>
    <Helmet>
  <title>Zain Ul Abdin | Product Marketing Specialist & Growth Strategist</title>
  <meta name="description" content="Product Marketing Specialist & Growth Strategist specializing in SEO, Reddit growth hacking, and digital marketing. Proven track record of scaling businesses through organic growth and strategic marketing." />
  <meta name="keywords" content="Product Marketing, Growth Strategy, SEO, Reddit Marketing, Digital Marketing, Marketing Specialist" />
  <meta property="og:title" content="Zain Ul Abdin | Product Marketing Specialist" />
  <meta property="og:description" content="Expert in SEO, Reddit growth hacking, and digital marketing strategies. Delivering exceptional ROI through organic growth." />
  <meta property="og:type" content="website" />
</Helmet>
    <div className="h-screen flex flex-col items-center justify-center bg-gray-50">
      <h1 className="text-3xl font-bold text-gray-800">🚧 Under Development 🚧</h1>
      <p className="text-lg mt-4 text-gray-600">
        Content will be added in a few days. Sorry for the inconvenience!
      </p>
    </div>
    </>
  );
};

export default NotAvailable;