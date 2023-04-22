import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import { ContactProvider } from './context/ConcatctContext';

/**contct form contact list context se sastoij od lsite, funkcija za dodavanje kontakta */

function App() {
  return (
    <div className="App">
      <ContactProvider>
        <Router>
          <div className="flex flex-col justify-between h-screen">
            <main className="container mx-auto px-3 pb-12">
              <Routes>
                <Route path="/*" element={<ContactForm />} />
                <Route path="list" element={<ContactList />} />
              </Routes>
            </main>
          </div>
        </Router>
      </ContactProvider>
    </div>
  );
}

export default App;
