var schedule = require('node-schedule');
const Nexmo = require('nexmo');
const nexmo = new Nexmo({
  apiKey: "5f9239d4",
  apiSecret: "op2023192djawd4G",
  applicationId: "93ce0f7f-0b7b-4933-aa73-4f3680ca3323",
  privateKey: "./nexmoprivate.key"
})
  nexmo.calls.create({
    to: [{
      type: 'phone',
      number: '+966533488519'
    }],
    from: {
      type: 'phone',
      number: '5102742704'
    },
    answer_url: ['{"action": "talk","text": "You are listening to a Call made with Voice API"}']
});
