const { WebClient } = require('@slack/web-api');

// Read a token from the environment variables
const token = process.env.SLACK_BOT_TOKEN;

// Initialize
const web = new WebClient(token);

const conversationId = 'C05UPN42E12';

(async () => {

  // Post a message to the channel, and await the result.
  // Find more arguments and details of the response: https://api.slack.com/methods/chat.postMessage
  const result = await web.chat.postMessage({
    text: 'Hello world!',
    channel: conversationId,
  });

  // The result contains an identifier for the message, `ts`.
  console.log(result);
})();