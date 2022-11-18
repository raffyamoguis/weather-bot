// const { Telegraf } = require('telegraf');
// const bot = new Telegraf(process.env.BOT_TOKEN);

// bot.start((ctx) => {
//   console.log('Received /start command');
//   try {
//     return ctx.reply('Hi motherfucker!');
//   } catch (e) {
//     console.error('error in start action:', e);
//     return ctx.reply('Error occured');
//   }
// });

// bot.on('text', (ctx) => {
//   ctx.reply('This is a test');
// });

// bot.command('quit', async (ctx) => {
//   // Explicit usage
//   // await ctx.telegram.leaveChat(ctx.message.chat.id);

//   // Using context shortcut
//   await ctx.leaveChat();
// });

// // AWS event handler syntax (https://docs.aws.amazon.com/lambda/latest/dg/nodejs-handler.html)
// exports.handler = async (event) => {
//   try {
//     await bot.handleUpdate(JSON.parse(event.body));
//     return { statusCode: 200, body: '' };
//   } catch (e) {
//     console.error('error in handler:', e);
//     return {
//       statusCode: 400,
//       body: 'This endpoint is meant for bot and telegram communication',
//     };
//   }
// };

const TelegramBot = require('node-telegram-bot-api');

// replace the value below with the Telegram token you receive from @BotFather
const token = process.env.BOT_TOKEN;

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, { polling: true });

bot.on('message', (msg) => {
  const chatId = msg.chat.id;

  // send a message to the chat acknowledging receipt of their message
  bot.sendMessage(chatId, 'Received your message');
});
