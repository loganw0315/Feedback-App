
import { useContext, useState } from "react"
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from './data/FeedbackData'
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import About from './pages/About';
import AboutIconLink from './components/AboutIconLink';
import { FeedbackProvider } from './context/FeedbackContext';
import FeedbackContext from "./context/FeedbackContext";

export default function App(){
    const [feedback, setFeedback] = useState(FeedbackData)
    return (
      <FeedbackProvider>
        <Router>
          <Header text="Hello World" />
          <div className="container">
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <FeedbackForm/>
                    <FeedbackStats/>
                    <FeedbackList />
                  </>
                }
              ></Route>
              <Route path="/about" element={<About />} />
            </Routes>
            <AboutIconLink />
          </div>
        </Router>
      </FeedbackProvider>
    );
}