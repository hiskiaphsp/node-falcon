const fs = require('fs').promises;
const path = require('path');
const falcon = require('falcon-crypto');

(async () => {
  // error response
  const errorResponse = (message, error) => {
    console.error(`Message: ${message}, Error: ${error ? error.toString() : 'N/A'}`);
  };

  // read message file
  const readMessageFile = async (filePath) => {
    try {
      const fileContent = await fs.readFile(filePath);
      return fileContent;
    } catch (err) {
      errorResponse('Failed to read message file', err);
      throw err; // Rethrow the error after logging it
    }
  };

  // Example usage
  const filePath = path.join(__dirname, 'message.txt');

  try {
    const messageBytes = await readMessageFile(filePath);
    const message = messageBytes.toString();

    const keyPair = await falcon.keyPair();

    function stringToArray(bufferString) {
      let uint8Array = new TextEncoder("utf-8").encode(bufferString);
      return uint8Array;
    }

    function arrayToString(bufferValue) {
      return new TextDecoder("utf-8").decode(bufferValue);
    }

    const messageArray = stringToArray(message);

    /* Combined signatures */
    const signed = await falcon.sign(message, keyPair.privateKey);

    const verified = await falcon.open(signed, keyPair.publicKey); // same as message

    /* Detached signatures */
    const signature = await falcon.signDetached(message, keyPair.privateKey);

    const isValid = await falcon.verifyDetached(signature, message, keyPair.publicKey); // true

    console.log("Key Pair:", keyPair);
    console.log("Message:", messageBytes);
    console.log("Signed:", signed);
    console.log("Verified:", verified);
    console.log("Signature:", signature);
    console.log("Is Valid:", isValid);
  } catch (err) {
    console.error('An error occurred during the process', err);
  }
})();
