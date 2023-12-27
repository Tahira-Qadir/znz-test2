const Footer = () => {
  return (
    
    <div >
      <footer className="footer p-10 bg-base-200 text-base-content px-36">
        <nav>
          <img src="/src/assets/Images/logo.png" />
          <h1 className="font-bold text-lg">Contact Us</h1>
          <span className="text-blue-400">The Patchio</span>
          <a className="link link-hover">Call: + 1 270 775 0015</a>
          <a className="link link-hover">Mail: designsthepatchio.com</a>
          <a className="link link-hover">Address: 200 Stonefield Drive</a>
          <a className="link link-hover">Waterbusy CT 06705</a>
          <div className="grid grid-flow-col gap-4">
            <a>
                <img src="/src/assets/Images/f8.png" width="24"
                height="24"
                className="fill-current" />
            </a>
            <a>
                <img src="/src/assets/Images/f4.png" width="24"
                height="24"
                className="fill-current" />
            </a>
            <a>
                <img src="/src/assets/Images/f7.png" width="24"
                height="24"
                className="fill-current" />
            </a>
            <a>
                <img src="/src/assets/Images/f6.png" width="24"
                height="24"
                className="fill-current" />
            </a>
            <a>
                <img src="/src/assets/Images/f5.png" width="24"
                height="24"
                className="fill-current" />
            </a>
          </div>
        </nav>
        <nav>
          <h1 className="font-bold text-lg">Custom Patches</h1>
          <a className="link link-hover">Embroidered Patches</a>
          <a className="link link-hover">PVC Patches</a>
          <a className="link link-hover">Chenille Patches</a>
          <a className="link link-hover">Leather Patches</a>
          <a className="link link-hover"> Pvc Keychains</a>
          <a className="link link-hover">Woven Patches</a>
          <a className="link link-hover">Custom Hats</a>
          <a className="link link-hover"> Metal Coins</a>
        </nav>
        <nav>
          <h1 className="font-bold text-lg">Apparel</h1>
          <a className="link link-hover">Custom T-shirts</a>
          <a className="link link-hover">Hats</a>
          <a className="link link-hover">Beanies</a>
          <a className="link link-hover">Masks</a>
          <h1 className="font-bold text-lg">Feature Products</h1>
          <a className="link link-hover">PVC Key chains</a>
          <a className="link link-hover">Uniform Patches</a>
          <a className="link link-hover">Police Patches</a>
        </nav>
        <nav>
          <h1 className="font-bold text-lg">Custmor Care</h1>
          <a className="link link-hover">Create My Account</a>
          <a className="link link-hover">Terms & Condition</a>
          <a className="link link-hover">Contact Us</a>
          <a className="link link-hover">FAQs</a>
          <div className="flex space-x-3 w-24">
          <img src="/src/assets/Images/f1.png"/>
          <img src="/src/assets/Images/f2.png"/>
          <img src="/src/assets/Images/f3.png"/>
          </div>
        </nav>
      </footer>
      <footer className="footer footer-center p-4 text-base-content border-t bg-base-200">
        <aside>
          <p>@ 2022 <span className="text-blue-400">The Patchio.</span> All Right Reserved</p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
