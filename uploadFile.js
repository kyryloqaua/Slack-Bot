const { WebClient } = require('@slack/web-api');

async function uploadFile() {
    const { WebClient } = require('@slack/web-api');
    const token = process.env.SLACK_BOT_TOKEN;
    const web = new WebClient(token);
    
    try {
      const result = await web.files.uploadV2({
        file: '/Users/bielohryvtsev/slack-bot/eyJ3IjoyMDQ4LCJoIjoyMDQ4LCJzY29wZSI6ImFwcCJ9.png',
        filename: 'eyJ3IjoyMDQ4LCJoIjoyMDQ4LCJzY29wZSI6ImFwcCJ9.png',
        channel_id: 'C05UPN42E12',
        initial_comment: 'Here is the new logo.',
      });
  
      console.log('File(s) uploaded: ', result.files);
    } catch (error) {
      console.error('Error uploading file: ', error);
    }
  }
  
  uploadFile();
  