import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ContactMessages.css';
import DashboardMain from './DarshMain'; // corrected file name if typo

const ContactMessages = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get('https://transportbackend-kappa.vercel.app/messages');
        setMessages(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch messages');
        setLoading(false);
      }
    };

    fetchMessages();
  }, []);

  return (
    <div className="dashboard-layout">
      <aside className="dashboard-sidebar">
        <DashboardMain />
      </aside>

      <main className="dashboard-content">
        {loading ? (
          <div className="contact-loading">Loading messages...</div>
        ) : error ? (
          <div className="contact-error">{error}</div>
        ) : (
          <div className="contact-messages-container">
            <h2 className="contact-messages-title">Contact Messages</h2>
            {messages.length === 0 ? (
              <p className="contact-no-messages">No messages found</p>
            ) : (
              <table className="contact-table">
                <thead className="contact-table-head">
                  <tr className="contact-table-header-row">
                    <th className="contact-table-header">Name</th>
                    <th className="contact-table-header">Email</th>
                    <th className="contact-table-header">Phone</th>
                    <th className="contact-table-header">Message</th>
                  </tr>
                </thead>
                <tbody className="contact-table-body">
                  {messages.map((msg, index) => (
                    <tr className="contact-table-row" key={index}>
                      <td className="contact-table-cell">{msg.name}</td>
                      <td className="contact-table-cell">{msg.email}</td>
                      <td className="contact-table-cell">{msg.phone}</td>
                      <td className="contact-table-cell">{msg.message}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        )}
      </main>
    </div>
  );
};

export default ContactMessages;
