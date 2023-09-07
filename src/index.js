#!/usr/bin/env node

/*!
 * TGHook
 * Copyright (c) 2023 to present. All rights reserved.
 *
 * @author Zubin
 * @username (GitHub) losparviero
 * @license AGPL-3.0
 */

import input from "input";
import { setWebhook, delWebhook, getToken } from "./helper.js";

let token;

if (process.argv[2] == "set") {
  token = await getToken();
  await setWebhook(token);
} else if (process.argv[2] == "del") {
  token = await getToken();
  await delWebhook(token);
} else {
  const inputChoice = await input.select("Welcome to TGHook! 👋", [
    { name: "Set webhook", value: "set" },
    { name: "Delete webhook", value: "del" },
  ]);

  token = await getToken();

  if (inputChoice === "set") {
    await setWebhook(token);
  } else if (inputChoice === "del") {
    await delWebhook(token);
  }
}
