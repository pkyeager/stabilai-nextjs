/* eslint-disable @next/next/no-img-element */
export default function Credits() {
    const sduLogoPath = "/sdu-logo.png";
    const thLuebeckLogoPath = "/th-luebeck-logo.png";
    return (
        <div className="bg-purple-800 w-full sm:w-4/4 mx-auto sm:my-10 h-auto">
            <h2 className="text-sm sm:text-lg font-bold p-4 text-center">
                This project is a collaborative effort among a group of driven and
                talented students from
            </h2>
            <div className="flex justify-center items-center pb-4 space-x-5">
                <img src={sduLogoPath} alt="SDU Logo" className="inline h-6 sm:h-12 filter grayscale hover:filter-none hover:text-purple-500 transition-colors duration-200" />
                <img src={thLuebeckLogoPath} alt="SDU Logo" className="inline h-6 sm:h-12 filter grayscale hover:filter-none hover:text-purple-500 transition-colors duration-200" />
            </div>
        </div>
    );
}