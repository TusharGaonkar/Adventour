process.env['PORT'] = 800;
process.env['USER'] = JSON.stringify({
  user: 'tushar'
});
process.env['DB'] = 'mongodb+srv://tushar:tushar@cluster0.vzkwn.mongodb.net/advantours?retryWrites=true&w=majority'

module.exports = process;

