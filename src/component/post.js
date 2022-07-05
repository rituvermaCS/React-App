import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Navbar from "./nav";
import { getPost } from "../redux/action";
import { useDispatch, useSelector } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";

function Post() {
  const dispatch = useDispatch();
  const postState = useSelector((state) => state.postReducers);
  console.log(postState);

  const columns = [
    { field: "userId", headerName: "USERID", width: 125 },
    { field: "id", headerName: "ID", width: 125 },
    { field: "title", headerName: "TITLE", width: 425 },
    { field: "body", headerName: "BODY", width: 850 },
  ];
  const [show, setShow] = useState(true);
  setTimeout(() => {
    setShow(false);
    console.log("Show");
  }, 1000);

  useEffect(() => {
    dispatch(getPost());
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          marginTop: "10%",
        }}
      >
        {show ? (
          <CircularProgress color="primary" height={100} width={20} />
        ) : (
          <div style={{ height: "calc(100vh - 25vh)", width: "85%" }}>
            <DataGrid
              rows={postState.post}
              columns={columns}
              pageSize={10}
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        )}
      </div>
    </>
  );
}

export default Post;