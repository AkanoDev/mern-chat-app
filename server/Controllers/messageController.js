const messageModel = require("../Models/messageModel");

//createMessage

exports.createMessage = async (req, res) => {
  const { chatId, senderId, text } = req.body;

  const message = new messageModel({
    chatId,
    senderId,
    text,
  });

  try {
    const response = await message.save();

    res.status(200).json(response);
  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
};

//getMessages

exports.getMessages = async (req, res) => {
  const { chatId } = req.params;

  const messages = await messageModel.find({ chatId });

  res.status(200).json(messages);

  try {
  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
};
