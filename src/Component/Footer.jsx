
import React from "react";

const Footer = () => {
    var date = new Date().getFullYear();
  return (
    <>
      <footer class="bg-gray-800 text-white py-4">
        <div class="container mx-auto">
          <p class="text-center text-sm">
            Copyright &copy; {date}. All rights reserved. -- Prabhat Kumar
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;


