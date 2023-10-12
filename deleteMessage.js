
// Require the Node Slack SDK package (github.com/slackapi/node-slack-sdk)
const { WebClient, LogLevel } = require("@slack/web-api");
const token = process.env.SLACK_BOT_TOKEN;

// Define an async function to perform the message deletion
async function deleteMessage() {
  // WebClient instantiates a client that can call API methods
  // When using Bolt, you can use either `app.client` or the `client` passed to listeners.
  const client = new WebClient(token, {
    // LogLevel can be imported and used to make debugging simpler
    logLevel: LogLevel.DEBUG
  });
  // The ts of the message you want to delete
  const messageId = "1697143574.743079";
  // The ID of the channel that contains the message
  const channelId = "C05UPN42E12";

  try {
    // Call the chat.delete method using the WebClient
    const result = await client.chat.delete({
      channel: channelId,
      ts: messageId
    });

    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

// Call the async function to initiate the message deletion
deleteMessage();
