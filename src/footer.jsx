import { Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";
 
export default function SimpleFooter() {
  return (
    <footer className="flex w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 border-t border-blue-gray-50 py-6 text-center md:justify-between">
      <Typography color="blue-gray" className="font-normal">
        &copy; Universitas Multimedia Nusantara 
      </Typography>
      <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
    
        <li>
        <Link to={{
                    pathname: `/`,
                }}> 
          <Typography
            as="a"
            href="#"
            color="blue-gray"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            Home
          </Typography>
        </Link>
        </li>
        <li>
        <Link to={{
                    pathname: `/AboutUs`,
                }}> 
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              About Us
            </Typography>
          </Link>
        </li>
      </ul>
    </footer>
  );
}