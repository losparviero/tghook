// helper.js

import { val } from "./validate.js";
import input from "input";

async function setWebhook(token) {
  const hookUrl = await input.text("Enter url for your webhook:");
  try {
    const response = await fetch(
      `https://api.telegram.org/bot${token}/setWebhook?url=${hookUrl}`
    );
    const data = await response.json();

    if (data.ok) {
      console.log(
        `Webhook set successfully.\n${JSON.stringify(data, null, 2)}`
      );
    } else {
      console.log(
        `There was an error. (${data.error_code} ${data.description})`
      );
    }
    process.exit();
  } catch (error) {
    console.log(`There was an error in setting webhook: ${error.message}`);
    process.exit();
  }
}

async function delWebhook(token) {
  try {
    const response = await fetch(
      `https://api.telegram.org/bot${token}/setWebhook?url=`
    );
    const data = await response.json();

    if (data.ok) {
      console.log(
        `Webhook deleted successfully.\n${JSON.stringify(data, null, 2)}`
      );
    } else {
      console.log(
        `There was an error. (${data.error_code}: ${data.description})`
      );
    }
    process.exit();
  } catch (error) {
    console.log(`There was an error in deleting webhook: ${error.message}`);
    process.exit();
  }
}

async function getToken() {
  let token = await input.text("Enter token for your bot:");
  const isTokenValid = await val(token);
  if (isTokenValid) return token;
  else process.exit();
}

export { setWebhook, delWebhook, getToken };
