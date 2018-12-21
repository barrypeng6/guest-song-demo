import React from "react";
import { Auth } from "@kkbox/kkbox-js-sdk";
import FetchGame from "../components/FetchGame";
import Game from "../components/Game";
import getConfig from "next/config";

const {
  serverRuntimeConfig: { appId, appSecret }
} = getConfig();

export default class extends React.Component {
  static async getInitialProps({ req }) {
    if (req) {
      // Create an auth object with client id and secret
      const auth = new Auth(appId, appSecret);

      // Fetch your access token
      const authResponse = await auth.clientCredentialsFlow.fetchAccessToken();
      const access_token = authResponse.data.access_token;
      return { access_token };
    }
    return {};
  }
  render() {
    return (
      <FetchGame {...this.props}>
        {props => (props.game ? <Game {...props} /> : <div>Loading...</div>)}
      </FetchGame>
    );
  }
}
