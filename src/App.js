import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import './App.css';


const App = () => {
  if (!localStorage.getItem('username')) return <LoginForm />;

  return (
    <ChatEngine
	   height="100vh"
	   userName={process.env.REACT_APP_CHAT_ENGINE_USER_NAME}
	   userSecret={process.env.REACT_APP_CHAT_ENGINE_USER_SECRET}
	   projectID={process.env.REACT_APP_CHAT_ENGINE_PROJECT_ID}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
	  />
  );
};


export default App;