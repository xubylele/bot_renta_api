const sapcai = require('sapcai').default
const client = new sapcai('d8dff08560391c22ec34c15560fb01ea')
const build = client.build

exports.sendMessage = (req, res, next) => {
    
    build.dialog({'type': 'text', content: req.body.message}, {conversationId: 100})
        .then(data => {
            res.status(200).json({'response': data})
        })
        .catch(err => res.status(400).json({'response': err}))
}