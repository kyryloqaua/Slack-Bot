const { App } = require('@slack/bolt');

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET
});

app.event('reaction_added', async ({ event, say }) => {
    if (event.reaction === 'calendar') {
      await say({
        blocks: [{
          "type": "section",
          "text": {
            "type": "mrkdwn",
            "text": "Hello"
          },
          "accessory": {
            "type": "datepicker",
            "action_id": "datepicker_remind",
            "initial_date": "2023-10-13",
            "placeholder": {
              "type": "plain_text",
              "text": "Select a date"
            }
          }
        }]
      });
    }
  });

(async () => {
    // Start your app
    await app.start(process.env.PORT || 3000);
  
    console.log('⚡️ Bolt app is running!');
  })();