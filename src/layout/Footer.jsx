import React from 'react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p className="m-0 text-center">
          © {new Date().getFullYear()} Shameer Ali. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
