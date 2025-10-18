"use server";

import { env } from "./env";

export const sendContactFormToSlack = async ({
  email,
  message,
}: {
  email: string;
  message: string;
}) => {
  try {
    const slackMessage = {
      text: "New Contact Form Submission",
      blocks: [
        {
          type: "header",
          text: {
            type: "plain_text",
            text: "📩 New Contact Form Submission",
            emoji: true,
          },
        },
        {
          type: "section",
          fields: [
            {
              type: "mrkdwn",
              text: `*Email:*\n${email}`,
            },
            {
              type: "mrkdwn",
              text: `*Date:*\n${new Date().toLocaleString()}`,
            },
          ],
        },
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: `*Message:*\n${message}`,
          },
        },
        {
          type: "divider",
        },
      ],
    };

    const response = await fetch(env.SLACK_WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(slackMessage),
    });

    if (!response.ok) {
      throw new Error(`Slack API error: ${response.status} ${response.statusText}`);
    }

    console.log("Successfully sent message to Slack");
  } catch (error) {
    console.error("Error sending to Slack:", error);

    if (error instanceof Error && error.message.includes("Slack API error")) {
      throw new Error(
        "Failed to send message to Slack. Please check:\n" +
        "1. SLACK_WEBHOOK_URL is correct\n" +
        "2. The webhook is still active in Slack"
      );
    }

    throw error;
  }
};
