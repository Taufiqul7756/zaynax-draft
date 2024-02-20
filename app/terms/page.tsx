import React from "react";

const TermsAndConditionsPage = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">
        Terms and Conditions -<span className="text-red-600">Demo</span>{" "}
      </h1>
      <div className="prose">
        <p>
          Welcome to our website. If you continue to browse and use this
          website, you are agreeing to comply with and be bound by the following
          terms and conditions of use, which together with our privacy policy
          govern our relationship with you in relation to this website. If you
          disagree with any part of these terms and conditions, please do not
          use our website.
        </p>
        <h2 className="text-lg font-bold mb-4 py-2">
          1. The use of this website is subject to the following terms:
        </h2>
        <ul>
          <li>
            The content of the pages of this website is for your general
            information and use only. It is subject to change without notice.
          </li>
          <li>
            This website uses cookies to monitor browsing preferences. If you do
            allow cookies to be used, the following personal information may be
            stored by us for use by third parties.
          </li>
          <li>
            Neither we nor any third parties provide any warranty or guarantee
            as to the accuracy, timeliness, performance, completeness or
            suitability of the information and materials found or offered on
            this website for any particular purpose. You acknowledge that such
            information and materials may contain inaccuracies or errors and we
            expressly exclude liability for any such inaccuracies or errors to
            the fullest extent permitted by law.
          </li>
        </ul>
        <h2 className="text-lg font-bold mb-4 py-2">2. Privacy Policy:</h2>
        <p>
          Your use of this website is subject to our Privacy Policy. Please
          review our Privacy Policy, which also governs the website and informs
          users of our data collection practices.
        </p>
        <h2>3. Governing Law:</h2>
        <p>
          Your use of this website and any dispute arising out of such use of
          the website is subject to the laws of the United States.
        </p>
      </div>
    </div>
  );
};

export default TermsAndConditionsPage;
