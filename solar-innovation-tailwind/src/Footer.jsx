const quickLinks = [
  "Home",
  "Chi Siamo",
  "S.I.R.E",
  "SIRE Features",
  "Why SIRE?",
  "SIRE Product",
  "How it Works?",
];

const usefulLinks = ["Help Center", "Privacy Policy", "Terms & Condition", "FAQ"];

export default function Footer() {
  return (
    <div className="bg-gray-900 text-white w-full px-4 sm:px-8 lg:px-12 pt-12">
      <div className="flex flex-wrap justify-center gap-y-10 max-w-[1300px] mx-auto">
        <div className="w-full sm:w-1/2 md:w-1/4 px-2">
          <img src="/logo%201.png" alt="" className="max-w-full filter-white" />
          <p className="text-sm leading-[1.46] mt-4">
            Leo dui fermentum tristique urna tellus eget amet aliquam. Id vitae
            orci maecenas tortor odio Leo dui tristique urna tellus eget amet
            aliquam.
          </p>
          <div className="flex gap-2 mt-3">
            <img src="/frey.png" alt="" />
            <img src="/frey.png" alt="" />
            <img src="/frey.png" alt="" />
          </div>
        </div>

        <div className="w-1/2 sm:w-1/4 md:w-1/6 px-2 mt-4">
          <p className="font-semibold text-base mb-3">Quick Links</p>
          {quickLinks.map((link) => (
            <p key={link} className="text-sm mb-2">{link}</p>
          ))}
        </div>

        <div className="w-1/2 sm:w-1/4 md:w-1/6 px-2 mt-4">
          <p className="font-semibold text-base mb-3">Useful Links</p>
          {usefulLinks.map((link) => (
            <p key={link} className="text-sm mb-2">{link}</p>
          ))}
        </div>

        <div className="w-full sm:w-1/2 md:w-1/4 px-2 mt-4">
          <p className="font-semibold text-base mb-3">Contact US</p>
          <div className="flex gap-3">
            <img
              src="/Location.png"
              alt=""
              className="mt-1"
              style={{ width: "22px", height: "20px" }}
            />
            <p className="mb-0 text-sm leading-[1.34]">
              Leo dui fermentum tristique urna tellus eget amet aliquam. Id
              vitae orci
            </p>
          </div>
          <div className="flex gap-3 mt-3">
            <img
              src="/Message.png"
              alt=""
              className="mt-1"
              style={{ width: "20px", height: "16px" }}
            />
            <div>
              <p className="mb-0 text-sm leading-[1.34]">email@email.com</p>
              <p className="mb-0 text-sm leading-[1.34]">support@email.com</p>
            </div>
          </div>
          <div className="flex items-center gap-3 mt-3">
            <img
              src="/Phone.png"
              alt=""
              style={{ width: "15px", height: "15px" }}
            />
            <p className="mb-0 text-sm leading-[1.34]">+29 98595 8998</p>
          </div>
        </div>
      </div>

      <div className="mt-12 border-t border-white/40 max-w-[1300px] mx-auto"></div>

      <div className="max-w-[1300px] mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 py-6 px-2 sm:px-8">
          <p className="text-[13px] text-center sm:text-left">All Rights Reserved</p>
          <div className="flex gap-2">
            <img src="/Facebook.png" alt="" style={{ width: "26px", height: "26px" }} />
            <img src="/Instagram.png" alt="" style={{ width: "26px", height: "26px" }} />
            <img src="/Twitter.png" alt="" style={{ width: "26px", height: "26px" }} />
          </div>
        </div>
      </div>
    </div>
  );
}
