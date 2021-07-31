import axios from "axios";
import React from "react";
import Alert from "@material-ui/core/Alert";

export default function Release() {
  const [releaseInfo, setReleaseInfo] = React.useState();

  React.useEffect(() => {
    let url =
      "https://sirily11.github.io/eth-localnet/release/release_info.json";
    axios
      .get(url)
      .then((result) => {
        setReleaseInfo(result.data);
      })
      .catch(console.error);
  }, []);

  return (
    <div style={{ marginLeft: 20, marginRight: 20 }}>
      {" "}
      {releaseInfo && (
        <Alert severity="info" fullWidth>
          Latest version {releaseInfo.release_tag}, Release at{" "}
          {releaseInfo.release_time}
        </Alert>
      )}
    </div>
  );
}
