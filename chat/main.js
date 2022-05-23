// tinyurl.com/subtocookies
// eslint-disable-next-line no-undef
const Peer = new Peer();

function send() {
    let msg = document.getElementById('msgSend')
    const conn = Peer.connect('another-peers-id');
    // on open will be launch when you successfully connect to PeerServer
    // eslint-disable-next-line space-before-function-paren
    conn.on('open', function () {
        // here you have conn.id
        conn.send();
    });
}