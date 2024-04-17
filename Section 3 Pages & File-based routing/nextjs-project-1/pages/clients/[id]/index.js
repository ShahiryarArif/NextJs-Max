import { useRouter } from "next/router";
import React from "react";

const ClientProjectPage = () => {
  const router = useRouter();
  console.log(router.query);

  function loadProjectHandler() {
    //load data...

    //router.replace: we will not able to go back to previous page
    // router.push("/clients/sherry/projecta");
    router.push({
      pathname: "/clients/[id]/[clientprojectid]",
      query: { id: "sherry", clientprojectid: "projecta" },
    });
  }

  return (
    <div>
      <h1>The Projects of a Given Client</h1>
      <button onClick={loadProjectHandler}></button>
    </div>
  );
};

export default ClientProjectPage;
