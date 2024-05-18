import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
 
export default function DialogDefault() {
  const [open, setOpen] = React.useState(true);
 
  const handleOpen = () => setOpen(!open);
 
  return (
    <>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>Submited</DialogHeader>
        <DialogBody>
          Thank you fro submiting the formuling, we realy appreciate your opinion and argument
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" color="green" onClick={handleOpen}>
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}