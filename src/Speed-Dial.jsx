import {
    IconButton,
    SpeedDial,
    SpeedDialHandler,
    SpeedDialContent,
    SpeedDialAction,
    Typography,
  } from "@material-tailwind/react";
  import {
    PlusIcon,
    HomeIcon,
    Square3Stack3DIcon,
    GlobeAltIcon
  } from "@heroicons/react/24/outline";
import { CloudIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";
   
  export default function SpeedDialWithTextOutside() {
    const labelProps = {
      variant: "small",
      color: "blue-gray",
      className:
        "absolute top-2/4 -left-2/4 -translate-y-2/4 -translate-x-3/4 font-normal",
    };
   
    return (
        <div className="fixed bottom-10 right-10 bg-white">
            <div className="absolute bottom-0 right-0">
                <SpeedDial>
                <SpeedDialHandler>
                    <IconButton size="lg" className="rounded-full">
                    <PlusIcon className="h-5 w-5 transition-transform group-hover:rotate-45" />
                    </IconButton>
                </SpeedDialHandler>
                <SpeedDialContent>
                <Link to={{
                      pathname: `/`,
                }}>
                    <SpeedDialAction className="relative bg-white" >
                    <HomeIcon className="h-7 w-7" />
                        <Typography color="blue-gray" className="text-xs font-normal">
                                Home
                        </Typography>
                    </SpeedDialAction>
                  </Link>  
                </SpeedDialContent>
                </SpeedDial>
            </div>
      </div>
    );
  }