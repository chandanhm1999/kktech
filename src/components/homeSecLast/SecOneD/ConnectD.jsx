import { FaEnvelope } from 'react-icons/fa';

const ConnectD = () => (
  <div
    className="flex items-center gap-2 justify-center flex-wrap p-0 md:p-10 md:justify-between mb-0 bg-gradient-to-r from-blue-500 to-blue-700 rounded-sm"
    style={{ backgroundImage: `url("/assets/homeSecCollections/connect.png")`, backgroundSize: 'cover', backgroundPosition: 'center' }}
  >
    <h3 className="font-bold lg:text-[2vw] md:text-[3vw] sm:text-[3vw] text-md text-white">
      Stay Connected with KK Tech!
    </h3>
    <button
      type="button"
      className="flex items-center h-fit p-3 bg-white rounded-xl hover:bg-black hover:text-white"
    >
      <a
        href="mailto:saleskktechnology@gmail.com"
        rel="noreferrer"
        target="_blank"
        className="flex items-center gap-2"
      >
        <FaEnvelope className="text-xl" />
        Connect on Email
      </a>
    </button>
  </div>
);

export default ConnectD;
