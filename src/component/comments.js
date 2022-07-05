
import React, { useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Navbar from "./nav";
import { getComment } from "../redux/action";
import { useDispatch, useSelector } from "react-redux";
function Comment() {
  const dispatch = useDispatch();
  const commentState = useSelector((state) => state.commentReducers);
  console.log(commentState);

  const columns = [
    { field: "postId", headerName: "POSTID", width: 125 },
    { field: "id", headerName: "ID", width: 125 },
    { field: "name", headerName: "NAME", width: 275 },
    { field: "email", headerName: "EMAIL", width: 200 },
    { field: "body", headerName: "BODY", width: 825 },
  ];
  useEffect(() => {
    dispatch(getComment());
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
        <div style={{ height: "calc(100vh - 25vh)", width: "85%" }}>
          <DataGrid
            rows={commentState.comment}
            columns={columns}
            pageSize={10}
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </div>
    </>
  );
}

export default Comment;  