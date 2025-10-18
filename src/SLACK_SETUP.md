# Slack Integration Setup

This guide will help you set up Slack notifications for contact form submissions.

## Step 1: Create a Slack Workspace (If You Don't Have One)

1. Go to [Slack](https://slack.com/)
2. Sign in or create a new workspace

## Step 2: Create a Slack Channel

1. In your Slack workspace, create a new channel for contact form submissions
   - Click the **+** button next to "Channels"
   - Name it something like `#contact-form` or `#website-inquiries`
   - Make it public or private based on your needs

## Step 3: Create a Slack App

1. Go to [Slack API Apps](https://api.slack.com/apps)
2. Click **Create New App**
3. Select **From scratch**
4. Enter App Name: `Contact Form Notifications` (or any name)
5. Select your workspace
6. Click **Create App**

## Step 4: Enable Incoming Webhooks

1. In your app settings, click **Incoming Webhooks** in the left sidebar
2. Toggle **Activate Incoming Webhooks** to **On**
3. Scroll down and click **Add New Webhook to Workspace**
4. Select the channel you created in Step 2 (e.g., `#contact-form`)
5. Click **Allow**

## Step 5: Copy the Webhook URL

1. You'll see a **Webhook URL** that looks like:
   ```
   https://hooks.slack.com/services/T00000000/B00000000/XXXXXXXXXXXXXXXXXXXX
   ```
2. Click **Copy** to copy this URL

## Step 6: Configure Environment Variables

1. Create a `.env.local` file in your project root (if it doesn't exist)
2. Add the webhook URL:

```env
SLACK_WEBHOOK_URL=https://hooks.slack.com/services/YOUR/WEBHOOK/URL
```

Replace `YOUR/WEBHOOK/URL` with the actual webhook URL you copied.

## Step 7: Test the Integration

1. Start your development server:
   ```bash
   pnpm dev
   ```

2. Go to your website and fill out the contact form
3. Submit the form
4. Check your Slack channel - you should see a nicely formatted message with:
   - 📩 Header
   - Email address
   - Date and time
   - Message content

## Message Format

The Slack message will look like this:

```
📩 New Contact Form Submission

Email:                    Date:
user@example.com          1/15/2025, 3:45:23 PM

Message:
This is a test message from the contact form.
_________________________________
```

## Troubleshooting

### No messages appearing in Slack

1. ✅ Check that `SLACK_WEBHOOK_URL` is set correctly in `.env.local`
2. ✅ Verify the webhook URL is active (go to your Slack App settings)
3. ✅ Make sure you selected the correct channel when creating the webhook
4. ✅ Check the browser console and server logs for errors

### Error: "Failed to send message to Slack"

1. The webhook URL might be incorrect - copy it again from Slack
2. The webhook might have been revoked - create a new one
3. Check your internet connection

### Want to change the channel?

1. Go to your [Slack App settings](https://api.slack.com/apps)
2. Click on your app
3. Go to **Incoming Webhooks**
4. Delete the old webhook
5. Create a new webhook pointing to a different channel
6. Update your `.env.local` with the new URL

## Customizing the Message

You can customize the Slack message format by editing `src/app/actions.ts`. The message uses Slack's Block Kit format.

Learn more about Slack Block Kit: https://api.slack.com/block-kit

## Security Notes

- ⚠️ Never commit `.env.local` to version control
- ⚠️ Keep your webhook URL secret - anyone with it can post to your Slack channel
- ✅ Add `.env.local` to your `.gitignore` file

## Advanced: Multiple Channels

If you want to send to multiple channels:

1. Create multiple webhooks (one per channel)
2. Add them all to your `.env.local`:
   ```env
   SLACK_WEBHOOK_URL=https://hooks.slack.com/services/AAA/BBB/CCC
   SLACK_WEBHOOK_URL_BACKUP=https://hooks.slack.com/services/DDD/EEE/FFF
   ```
3. Update `actions.ts` to send to both webhooks
