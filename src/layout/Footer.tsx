import React from 'react';

export default function Footer() {
  return (
    <footer className="footer p-10 bg-[#090c0f]  text-white">
      <nav>
        <header className="footer-title">Services</header>
        <a className="link link-hover">Hotels</a>
        <a className="link link-hover">Transport</a>
        <a className="link link-hover">Beautiful Destinations</a>
        <a className="link link-hover">Gallery</a>
      </nav>
      <nav>
        <header className="footer-title">Company</header>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">FAQ</a>
        <a className="link link-hover">Know More</a>
      </nav>
      <form>
        <header className="footer-title">Newsletter</header>
        <fieldset className="form-control w-80">
          <label className="label">
            <span className="label-text text-white">
              Enter your email address
            </span>
          </label>
          <div className="relative">
            <input
              type="text"
              placeholder="username@site.com"
              className="input input-bordered w-full pr-16"
            />
            <button className="btn btn-accent absolute top-0 right-0 rounded-l-none">
              Subscribe
            </button>
          </div>
        </fieldset>
      </form>
      <nav>
        <header className="footer-title">Legal</header>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
    </footer>
  );
}
