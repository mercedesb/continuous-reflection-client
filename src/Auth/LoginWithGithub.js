import React from "react";

const AUTHORIZE_URL = "https://github.com/login/oauth/authorize";
const CLIENT_ID = "795ac5d9baac4ede886e";
const SCOPE = "user";

export function LoginWithGithub() {
  return (
    <a href={`${AUTHORIZE_URL}?client_id=${CLIENT_ID}&scope=${SCOPE}`}>
      Login with Github
    </a>
  );
}
