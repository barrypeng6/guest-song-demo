import React from "react";
import Head from "next/head";
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
      <>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Noto+Sans+TC"
            rel="stylesheet"
          />
        </Head>
        <FetchGame {...this.props}>{props => <Game {...props} />}</FetchGame>
        <style global jsx>{`
          * {
            padding: 0;
            margin: 0;
            box-sizing: border-box;
          }
          html {
            height: 100%;
            font-family: "Noto Sans TC", sans-serif;
          }
          body {
            height: 100%;
          }
        `}</style>
      </>
    );
  }
}
