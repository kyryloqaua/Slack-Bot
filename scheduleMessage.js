// Require the Node Slack SDK package (github.com/slackapi/node-slack-sdk)
const { WebClient, LogLevel } = require("@slack/web-api");
const token = process.env.SLACK_BOT_TOKEN;

// Define an async function to schedule a message for today at 3 PM
async function scheduleMessage() {
  // WebClient instantiates a client that can call API methods
  // When using Bolt, you can use either `app.client` or the `client` passed to listeners.
  const client = new WebClient(token, {
    // LogLevel can be imported and used to make debugging simpler
    logLevel: LogLevel.DEBUG
  });

  // Create a Date object for today
  const today = new Date();

  // Set the time to 3 PM (15:00:00)
  today.setHours(15, 0, 0, 0);

  // Channel you want to post the message to
  const channelId = "C05UPN42E12";

  try {
    // Call the chat.scheduleMessage method using the WebClient
    const result = await client.chat.scheduleMessage({
      channel: channelId,
      text: "Scheduled message for 3 PM today",
      // Time to post message, in Unix Epoch timestamp format
      post_at: today.getTime() / 1000
    });

    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

// Call the async function to schedule the message for today at 3 PM
scheduleMessage();
