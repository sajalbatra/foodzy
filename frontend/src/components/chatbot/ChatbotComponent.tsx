import { Webchat, WebchatProvider, Fab, getClient } from "@botpress/webchat";
import { useState, useEffect } from "react";

// Define the Botpress client ID
const clientId: string = "d492450f-643f-41de-a1ac-138b1818df4f";

const ChatbotComponent: React.FC = () => {
  const client = getClient({ clientId });

  // States with correct TypeScript typings
  const [isWebchatOpen, setIsWebchatOpen] = useState<boolean>(false);
  const [chatKey, setChatKey] = useState<number>(Date.now());
  const [showFab, setShowFab] = useState<boolean>(false); // Track visibility of the Fab button

  // Toggle webchat visibility
  const toggleWebchat = () => {
    setIsWebchatOpen((prevState) => !prevState);
  };

  // Side effect to update chat key and handle scroll event
  useEffect(() => {
    setChatKey(Date.now());

    const handleScroll = () => {
      // Show the Fab button when scrolling down more than 100px
      if (window.scrollY > 100) {
        setShowFab(true);
      } else {
        setShowFab(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div style={{ width: "0vw", height: "0vh", position: "relative" }}>
      <WebchatProvider client={client}>
        <Fab
          onClick={toggleWebchat}
          style={{
            position: "fixed",
            bottom: "120px", // Adjusted from 20px to 120px
            right: showFab ? "43px" : "-100px", // Move the button off-screen when `showFab` is false
            zIndex: 1000,
            transition: "right 0.5s ease", // Smooth transition effect for the button
            backgroundColor: "#2b2b2b", // Midnight theme color for button
            color: "#fff", // White icon color
          }}
        />
        {isWebchatOpen && (
          <div
            style={{
              position: "fixed",
              bottom: "190px",
              right: "20px",
              zIndex: 1000,
              width: "350px",
              height: "500px",
              maxHeight: "70vh",
              boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
              overflow: "hidden",
              borderRadius: "10px",
              backgroundColor: "#1a1a1a", // Dark background for midnight theme
            }}
          >
            <div
              style={{
                width: "100%",
                height: "100%",
                maxHeight: "100%",
                overflowY: "auto",
                backgroundColor: "#1a1a1a", // Dark background for chat area
                color: "#fff", // White text for midnight theme
              }}
            >
              <Webchat key={chatKey} />
            </div>
          </div>
        )}
      </WebchatProvider>
    </div>
  );
};

export default ChatbotComponent;
