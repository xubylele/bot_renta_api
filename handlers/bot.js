const sapcai = require('sapcai').default
const client = new sapcai('0a4f353f4e9bfaf61bf17937269a7692')
const build = client.build

exports.sendMessage = (req, res, next) => {
    const rdm = Math.floor(Math.random() * (+99999999 - +1000000)) + +1000000
    build.dialog({'type': 'text', content: req.body.message}, {conversationId: rdm})
        .then(data => {
            res.status(200).json({'response': data})
        })
        .catch(err => res.status(400).json({'response': err}))
}