import {
    Timeline,
    TimelineItem,
    TimelineConnector,
    TimelineHeader,
    TimelineIcon,
    TimelineBody,
    Typography,
  } from "@material-tailwind/react";
  import { HomeIcon, BellIcon, CurrencyDollarIcon } from "@heroicons/react/24/solid";
   
  export default function TimelineWithIcon() {
    return (
      <div className="w-full m-auto">
        <Timeline>
          <TimelineItem>
            <TimelineConnector />
            <TimelineHeader>
              <TimelineIcon className="p-2">
              </TimelineIcon>
              <Typography variant="h5" color="blue-gray">
                Mei 2024
              </Typography>
            </TimelineHeader>
            <TimelineBody className="pb-8">
              <Typography color="gary" className="font-normal text-gray-600">
              8 - 12 Mei
              The 2nd International Minangkabau Leteracy Festival
              Kota Padang, Padang Panjang, Batusangkar <br></br>
              11 - 12 Mei
              Padang Trail Game
              Kota Padang <br></br>
              18, 25 Mei
              Pacu Jawi
              Kabupaten Tanah Datar
              </Typography>
            </TimelineBody>
          </TimelineItem>
          <TimelineItem>
            <TimelineConnector />
            <TimelineHeader>
              <TimelineIcon className="p-2">
              </TimelineIcon>
              <Typography variant="h5" color="blue-gray">
              Juni 2024
              </Typography>
            </TimelineHeader>
            <TimelineBody className="pb-8">
              <Typography color="gary" className="font-normal text-gray-600">
              15 - 23 Juni
West Sumatera Pet Expo
Kota Padang <br></br>
21 - 22 Juni
Belibis green Park Festival
Kota Solok
              </Typography>
            </TimelineBody>
          </TimelineItem>
          <TimelineItem>
            <TimelineHeader>
              <TimelineIcon className="p-2">
              </TimelineIcon>
              <Typography variant="h5" color="blue-gray">
                Juli 2024
              </Typography>
            </TimelineHeader>
            <TimelineBody>
              <Typography color="gary" className="font-normal text-gray-600">
              4 - 7 Juli
PGAW Series 2024 ( Event Paralayang Internasional )
Kabupaten Tanah Datar <br></br>
13, 20, 27 Juli
Pacu Jawi
Kabupaten Tanah Datar
              </Typography>
            </TimelineBody>
          </TimelineItem>
        </Timeline>
      </div>
    );
  }