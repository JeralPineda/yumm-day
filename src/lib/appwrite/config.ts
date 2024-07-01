import { Account, Client } from "react-native-appwrite";
export const appwriteConfig = {
  endpoint: "https://clound.appwrite.io/v1",
  platform: "com.jpd.yummday",
  projectId: "666f8a2800196faf6e18",
};

// Init your React Native SDK
const client = new Client();

client
  .setEndpoint(appwriteConfig.endpoint) // Your Appwrite Endpoint
  .setProject(appwriteConfig.projectId) // Your project ID
  .setPlatform(appwriteConfig.platform); // Your application ID or bundle ID.

const account = new Account(client);

export { client, account };

//ios https://cloud.appwrite.io/v1/account/sessions/oauth2/callback/apple/666f8a2800196faf6e18
