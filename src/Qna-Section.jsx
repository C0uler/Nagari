import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
 
export default function DefaultAccordion() {
  const [open, setOpen] = React.useState(1);
 
  const handleOpen = (value) => setOpen(open === value ? 0 : value);
 
  return (
    <>
      <Accordion open={open === 1}>
        <AccordionHeader className="text-center" onClick={() => handleOpen(1)}>Apa Motivasi dari Pembuatan Website Ini?</AccordionHeader>
        <AccordionBody className="text-sm md:text:base xl:text-lg">
          Motivasi dalam pembuatan website ini tentunya didasarkan kepadanya pengalaman dan juga orang orang sekitar kita yang bahkan tidak tau betapa indah dan luasnya Indonesia dengan beragam budaya dan juga alam yang indah
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2}>
        <AccordionHeader onClick={() => handleOpen(2)}>
                Apa Tujuan Dari Pembuatan Website Ini?
        </AccordionHeader>
        <AccordionBody className="text-sm md:text:base xl:text-lg">
            Website ini bertujuan untuk memperkenalan memperkenalan dan juga memberikan wawasan dan pengetahuan yang lebih luas lagi mengenai indonesia terutama di wilayah Sumatera Barat
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3}>
        <AccordionHeader onClick={() => handleOpen(3)}>
          Apa Konsep dari Website Ini?
        </AccordionHeader>
        <AccordionBody className="text-sm md:text:base xl:text-lg">
          Website ini mengambil konsep simple dan juga minimalis, penggunaan konsep ini juga bukan tanpa sebab. Hal ini dikarenakan dengan konsep yang minimalis membuat pengguna lebih mudah untuk menggunakan fitur fitur kami sehingga ramah pada khalayak banyak
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 4}>
        <AccordionHeader onClick={() => handleOpen(4)}>
          Apa yang Belum Tercapai
        </AccordionHeader>
        <AccordionBody className="text-sm md:text:base xl:text-lg">
          Dikarenakan waktu dan juga pengerjaan yang mepet dan serba terburu buru, sehingga membuat kami harus realistis dalam pembuatannya. Terutama pada keberagaman fitur fiturnya.
        </AccordionBody>
      </Accordion>
    </>
  );
}