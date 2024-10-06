import React, { useState } from 'react';
import { FaPhone, FaVideo, FaSmile, FaImage, FaPhoneSlash, FaMicrophoneSlash, FaMicrophone, FaVideoSlash } from 'react-icons/fa'; // Icons for call controls
import Picker from '@emoji-mart/react';
import data from '@emoji-mart/data'; // Emoji data import

const colleagues = ['Reg', 'Aurinnelle', 'Lesley'];

function Message() {
    const [message, setMessage] = useState('');
    const [privateMessage, setPrivateMessage] = useState('');
    const [selectedColleague, setSelectedColleague] = useState(null);
    const [isMuted, setIsMuted] = useState(false);
    const [isVideoEnabled, setIsVideoEnabled] = useState(true);
    const [showEmojiPicker, setShowEmojiPicker] = useState(false);
    const [image, setImage] = useState(null);
    const [isCallActive, setIsCallActive] = useState(false);
    const [isVideoCall, setIsVideoCall] = useState(false);

    const handleSendMessage = () => {
        console.log('Message sent:', message, 'To:', selectedColleague);
        setMessage(''); // Reset message input after sending
    };

    const handlePrivateMessage = () => {
        console.log('Private message sent:', privateMessage, 'To:', selectedColleague);
        setPrivateMessage(''); // Reset private message input after sending
    };

    const toggleMute = () => {
        setIsMuted(!isMuted);
    };

    const toggleVideo = () => {
        setIsVideoEnabled(!isVideoEnabled);
    };

    const addEmoji = (emoji) => {
        setMessage(prevMessage => prevMessage + emoji.native);
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        setImage(URL.createObjectURL(file));
    };

    const startCall = (isVideo) => {
        if (!selectedColleague) {
            alert('Please select a colleague to start the call');
            return;
        }
        setIsCallActive(true);
        setIsVideoCall(isVideo);
        console.log(isVideo ? 'Starting video call with ' : 'Starting voice call with ', selectedColleague);
    };

    const endCall = () => {
        setIsCallActive(false);
        console.log('Call ended with ', selectedColleague);
    };

    const handleColleagueSelect = (e) => {
        setSelectedColleague(e.target.value);
    };

    return (
        <div className="message-container">
            <div className="chat-section">
                <h2>Colleague Chat</h2>
                <select className="colleague-select" value={selectedColleague} onChange={handleColleagueSelect}>
                    <option value="" disabled>Select Colleague</option>
                    {colleagues.map((colleague, index) => (
                        <option key={index} value={colleague}>{colleague}</option>
                    ))}
                </select>
                <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type your message here..."
                />
                <div className="chat-controls">
                    <button onClick={handleSendMessage}>Send Message</button>
                    <button onClick={() => setShowEmojiPicker(!showEmojiPicker)}>
                        <FaSmile />
                    </button>
                    <input type="file" onChange={handleImageUpload} id="image-upload" style={{ display: 'none' }} />
                    <label htmlFor="image-upload">
                        <FaImage />
                    </label>
                </div>
                {showEmojiPicker && <Picker data={data} onEmojiSelect={addEmoji} />}
                {image && <img src={image} alt="Uploaded" className="uploaded-image" />}
            </div>

            <div className="private-message-section">
                <h3>Private Message</h3>
                <textarea
                    value={privateMessage}
                    onChange={(e) => setPrivateMessage(e.target.value)}
                    placeholder="Send a private message..."
                />
                <button onClick={handlePrivateMessage}>Send Private Message</button>
            </div>

            <div className="meeting-section">
                <h2>Meeting (Video/Audio Call)</h2>
                <button onClick={() => startCall(false)}>
                    <FaPhone /> Voice Call
                </button>
                <button onClick={() => startCall(true)}>
                    <FaVideo /> Video Call
                </button>
                {isCallActive && (
                    <div className="call-controls">
                        <button onClick={toggleMute}>
                            {isMuted ? <FaMicrophoneSlash /> : <FaMicrophone />} {isMuted ? 'Unmute' : 'Mute'}
                        </button>
                        <button onClick={toggleVideo}>
                            {isVideoEnabled ? <FaVideo /> : <FaVideoSlash />} {isVideoEnabled ? 'Disable Video' : 'Enable Video'}
                        </button>
                        <button onClick={endCall}>
                            <FaPhoneSlash /> End Call
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Message;
