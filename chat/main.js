// tinyurl.com/subtocookies
// eslint-disable-next-line no-undef
const Peer = new Peer();
// eslint-disable-next-line no-var
var oldChat = ' ';
// eslint-disable-next-line no-var
var newChat = '';
// eslint-disable-next-line space-before-function-paren


// eslint-disable-next-line no-unused-vars
function sendMsg(msg) {
    /* const conn = Peer.connect('another-peers-id');
    // on open will be launch when you successfully connect to PeerServer
    // eslint-disable-next-line space-before-function-paren
    conn.on('open', function () {
        // here you have conn.id
        conn.send(msg);
    });*/
    console.log(msg);
    newChat = oldChat + '<br>' + msg;
    newChat = newChat.replace('undefined', '');
    document.getElementById('chat').innerHTML = newChat;
    oldChat = newChat;
}