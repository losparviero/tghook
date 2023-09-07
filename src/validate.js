// validate.js

async function val(token) {
  try {
    const response = await fetch(`https://api.telegram.org/bot${token}/getMe`);
    const data = await response.json();

    if (data.ok) {
      return true;
    } else {
      console.log(
        `There was an error. (${data.error_code}: ${data.description})`
      );
      return false;
    }
  } catch (error) {
    console.log(
      `There was an error in validating your bot token: ${error.message}`
    );
    process.exit();
  }
}

export { val };
