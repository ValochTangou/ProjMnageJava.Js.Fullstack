import React, { useState } from 'react';
import { FaPhone, FaVideo, FaSmile, FaImage, FaPhoneSlash, FaMicrophoneSlash, FaMicrophone, FaVideoSlash, FaUserFriends } from 'react-icons/fa'; // Icons for call controls
import Picker from '@emoji-mart/react';
import data from '@emoji-mart/data';

const colleagues = ['Reg', 'Aurinelle', 'Lesley', 'Jenny', 'Cedrick']; // List des colleques

function Message() {
    const [message, setMessage] = useState('');
    const [selectedColleagues, setSelectedColleagues] = useState([]);
    const [isMuted, setIsMuted] = useState(false);
    const [isVideoEnabled, setIsVideoEnabled] = useState(true);
    const [showEmojiPicker, setShowEmojiPicker] = useState(false);
    const [image, setImage] = useState(null);
    const [isCallActive, setIsCallActive] = useState(false);
    const [isVideoCall, setIsVideoCall] = useState(false);
    const [showColleagueList, setShowColleagueList] = useState(false);

    const handleSendMessage = () => {
        if (selectedColleagues.length === 0) {
            alert('Please select at least one colleague to send a message');
            return;
        }
        console.log('Message sent:', message, 'To:', selectedColleagues);
        setMessage(''); // Reset message input after sending
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
        if (selectedColleagues.length === 0) {
            alert('Please select at least one colleague to start a call');
            return;
        }
        setIsCallActive(true);
        setIsVideoCall(isVideo);
        console.log(isVideo ? 'Starting video call with ' : 'Starting voice call with ', selectedColleagues);
    };

    const endCall = () => {
        setIsCallActive(false);
        console.log('Call ended with ', selectedColleagues);
    };

    const handleColleagueSelect = (colleague) => {
        setSelectedColleagues(prev =>
            prev.includes(colleague) ? prev.filter(c => c !== colleague) : [...prev, colleague]
        );
    };

    const handleRightClick = (colleague, event) => {
        event.preventDefault();
        console.log(`Options for ${colleague}: Call or Send Message`);
        // Implement further actions (call/message) via context menu
    };

    return (
        <div className="message-container">
            <div className="chat-section">
                <h2>Colleague Chat</h2>
                <button onClick={() => setShowColleagueList(!showColleagueList)} className="show-colleagues-btn">
                    <FaUserFriends /> Show Colleagues
                </button>

                {showColleagueList && (
                    <div className="colleague-list">
                        {colleagues.map((colleague, index) => (
                            <div
                                key={index}
                                className={`colleague-item ${selectedColleagues.includes(colleague) ? 'selected' : ''}`}
                                onClick={() => handleColleagueSelect(colleague)}
                                onContextMenu={(e) => handleRightClick(colleague, e)}
                            >
                                {colleague}
                            </div>
                        ))}
                    </div>
                )}

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
