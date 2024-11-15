/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { useEffect } from "react";
import { StoreContext } from "../store";
import { observer } from "mobx-react";
import { VideoResource } from "../entity/VideoResource";
import { UploadButton } from "../shared/UploadButton";
import axios from "axios";
export const VideoResourcesPanel = observer(() => {
  const store = React.useContext(StoreContext);
  

  const init=async()=>{
    try {
     console.log(store);
    } catch (error) {
      console.log(error);
    }
  }


  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    try {
      const file = event.target.files?.[0];
      if (!file) return;
      console.log(file.name);
      const formData = new FormData();
      formData.append("newvideo", file);
      await axios
        .post(`${process.env.VITE_PUBLIC_URL}/new_video`, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then((resolve) => {
          console.log(resolve);
          init();
        })
        .catch((reject) => {
          console.log(reject);
        });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <div className="items-center overflow-x-hidden overflow-y-auto justify-start flex flex-col py-2  px-0.5">
          <UploadButton
        accept="video/mp4,video/x-m4v,video/*"
        className="uploadbutton"
        onChange={handleFileChange}
      />
      <div className="p-0.5  w-full">
        <VideoResource/>
      </div>
    </div>
  );
});